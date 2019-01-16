import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styled from '@emotion/styled'
import { Page } from 'components/Layout'
import { InfluencerItem } from 'components/InfluencerItem'
import { mungeDataInfluencerItem } from 'utils'

const Content = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0px 0px 100px -30px rgba(0,0,0,0.54);
`

export const InfluencersList = ({ data }) => (
  <Page background='#f7f7f7' className='foo'>
    <Content>
      {data && data.map(influencer => <InfluencerItem key={influencer.id} {...influencer}/>)}
    </Content>
  </Page>
)

InfluencersList.displayName = 'InfluencersList'

InfluencersList.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  children: PropTypes.func
}

InfluencersList.defaultProps = {
  data: undefined,
  isLoading: false,
  children: undefined
}

export const INFLUENCERS_LIST = gql`
  query InfluencersList {
    influencers {
      id
      handle
      avatar
      twitchViewers
    }
  }
`

export const withInfluencersList = graphql(INFLUENCERS_LIST, {
  // map response to component props
  props: ({ data }) => data ? {
    isLoading: data.loading,
    errors: data.error,
    data: data.influencers && data.influencers.map(influencer => mungeDataInfluencerItem(influencer))
  } : { isLoading: false },
  // map props to query options
  options: () => {
    return ({
      fetchPolicy: 'no-cache',
      variables: {}
    })
  }
})

export default withInfluencersList(InfluencersList)
