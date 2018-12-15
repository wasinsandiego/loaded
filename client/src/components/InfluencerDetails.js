/**
 * InfluencerDetails
 * Displays influencer in all their glory. Should fill the screen and be
 * responsive.
 *
 * props
 * - avatar: string (url)
 * - title: string (influencer handle)
 * - id: string
 * - stat: number (whatever data its sorted by ex: twitcher viewers)
 * - ...more
 */
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Debug from 'components/Debug'

export const InfluencerDetails = props => (
  <Debug style={{ textAlign: 'left' }} {...props} />
)

export const INFLUENCER_DETAIL = gql`
  query InfluencerDetails($id: Int!) {
    influencer(id: $id) {
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

export const withInfluencerDetails = graphql(INFLUENCER_DETAIL, {
  // map response to component props
  props: ({ data, ownProps }) => ({
    isLoading: data && data.loading,
    errors: data && data.error,
    data: data && data.influencer
  }),
  // map props to query options
  options: ({ id }) => {
    return ({
      fetchPolicy: 'no-cache',
      variables: { id }
    })
  }
})

export default withInfluencerDetails(InfluencerDetails)
