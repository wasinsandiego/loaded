/**
 * InfluencerItem
 * Displays influencers handle, avatar, and some info. Should behave as a
 * responsive list item.
 *
 * props
 * - id: string
 * - thumbUrl: string (url)
 * - title: string (influencer handle)
 * - subTitle: number (whatever data its sorted by ex: twitcher viewers)
 * - isLoading: boolean
 */
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { compose, withState, lifecycle, setDisplayName } from 'recompose'
import styled from '@emotion/styled'
import { secondaryText, thinText } from 'GlobalStyles'
import { mungeDataInfluencerItem } from 'utils'
import Thumb from 'components/Thumb'

const Container = styled.article`
  position: relative;
  width: 100%;
  padding: 20px 30px;
  background: #fff;
  &:after {
    content: '';
    position: absolute;
    width: calc(100% - 40px);
    height: 1px;
    bottom: 0;
    left: 20px;
    background: #f2f2f2;
  }

  ${'' /* background: #f7f7f7;
  background: -moz-linear-gradient(top, #f9f9f9 0%, #ffffff 80%);
  background: -webkit-linear-gradient(top, #f9f9f9 0%,#ffffff 80%);
  background: linear-gradient(to bottom, #f9f9f9 0%,#ffffff 80%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f9f9f9', endColorstr='#ffffff',GradientType=0 ); */}

  background: #fff;
  transition: background ease-out 400ms;
  cursor: pointer;
  &:hover {
    background: #f9f9f9;
    transition-duration: 0;
  }
`

const Avatar = styled(Thumb)(props => `
  display: inline-block;
  vertical-align: top;
  width: 50px;
  height: 50px;
  margin: 3px 25px 0 0;

  box-shadow: 0px 0px 0px 5px rgba(171, 171, 171, 0.2);
  opacity: 0;
  transition: opacity ease-in-out 600ms 100ms, transform cubic-bezier(0.175, 0.885, 0.320, 1.275) 800ms;
  ${props.show ? `
    opacity: 1;
  ` : ''}

  .container:hover & {
    transform: scale(1.1);
  }
`)

// NOTE: Interesting result from using inline-table with absolute
// centering. No clue if this behaves x-browser.
const Content = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-top: 8px;
`

const Title = styled.div(props => `
  margin: 0 0 0px 0;
  font-size: 20px;

  opacity: 0;
  transition: opacity ease-in-out 600ms 300ms;
  ${props.show ? `
    opacity: 1;
  ` : ''}
`)

const SubTitle = styled.div(props => `
  ${secondaryText}
  ${thinText}
  margin: 0;
  font-size: 14px;

  opacity: 0;
  transition: opacity ease-in-out 600ms 500ms;
  ${props.show ? `
    opacity: 1;
  ` : ''}
`)

export const InfluencerItem = compose(
  withState('show', 'setShow', false),
  lifecycle({
    componentDidMount() {
      // super lame but didn't want to get into key frames atm
      setTimeout(() => this.props.setShow(true), 0)
    }
  }),
  setDisplayName('InfluencerItem')
)(
  ({ thumbUrl, title, subTitle, show }) => (
    <Container className='container'>
      <Avatar
        src={thumbUrl}
        alt={title}
        show={show}
      />
      <Content>
        <Title show={show}>{title}</Title>
        <SubTitle show={show}>{subTitle}</SubTitle>
      </Content>
    </Container>
  )
)

export const INFLUENCER_ITEM = gql`
  query Influencer($id: Int!) {
    influencer(id: $id) {
      id
      handle
      avatar
      twitchViewers
    }
  }
`

export const withInfluencerItem = graphql(INFLUENCER_ITEM, {
  // map response to component props
  props: ({ data }) => ({
    isLoading: data && data.loading,
    errors: data && data.error,
    ...mungeDataInfluencerItem(data && data.influencer)
  }),
  // map props to query options
  options: ({ id }) => {
    return ({
      fetchPolicy: 'no-cache',
      variables: { id }
    })
  }
})

export default withInfluencerItem(InfluencerItem)
