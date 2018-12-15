import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Debug from 'components/Debug'

export const Influencers = props => (
  <Debug style={{ textAlign: 'left' }} {...props} />
)

export const INFLUENCERS = gql`
  query Influencers {
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

export default withInfluencers(Influencers)
