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
import styled from '@emotion/styled'
import Thumb from 'components/Thumb'
import Debug from 'components/Debug'

const Container = styled.article`
  position: relative;
  width: 100%;
  height: 100%;
  height: 75px;
  padding: 13px;
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
`

const Avatar = styled(Thumb)`
  display: inline-block;
  vertical-align: top;
  width: 50px;
  height: 50px;
`

const Content = styled.div`
  display: inline-block;
  vertical-align: top;
  height: 100%;
  margin-left: 20px;
`

const Title = styled.h2`
  margin: 0 0 4px 0;
`

const SubTitle = styled.p`
  margin: 0;
`

export const InfluencerItem = ({ id, thumbUrl, title, subTitle, isLoading }) => (
  <Container>
    <Avatar src={thumbUrl} alt={title} />
    <Content>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Content>
  </Container>
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

export const munger = data => data ? {
  id: data.id,
  thumbUrl: data.avatar,
  title: data.handle,
  subTitle: `${data.twitchViewers || 0} Twitch Viewers`
} : {}

export const withInfluencerItem = graphql(INFLUENCER_ITEM, {
  // map response to component props
  props: ({ data, ownProps }) => ({
    isLoading: data && data.loading,
    errors: data && data.error,
    ...munger(data && data.influencer)
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
