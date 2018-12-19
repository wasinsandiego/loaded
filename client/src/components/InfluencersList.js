import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import styled from '@emotion/styled'
import { Page } from 'components/Layout'
import Debug from 'components/Debug'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 255, 0.2);
`

export const InfluencersList = ({ data, isLoading }) => (
  // <Debug style={{ textAlign: 'left' }} {...props} />
  <Page>

  </Page>
)

export const INFLUENCERS = gql`
  query InfluencersList {
    influencers {
      id
      handle
      avatar
      twitchId
      twitchFollowers
      twitchViewers
      twitchUrl
      twitterFollowers
      twitterLink
      youtubeSubscribers
      youtubeLink
    }
  }
`

export const withInfluencers = graphql(INFLUENCERS, {
  // map response to component props
  props: ({ data, ownProps }) => ({
    isLoading: data && data.loading,
    errors: data && data.error,
    data: data && data.influencers
  }),
  // map props to query options
  options: () => {
    return ({
      fetchPolicy: 'no-cache',
      variables: {}
    })
  }
})

export default withInfluencers(InfluencersList)
