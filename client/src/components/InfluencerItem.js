/**
 * InfluencerItem
 * Displays influencers handle, avatar, and some info. Should behave as a
 * responsive list item.
 *
 * props
 * - avatar: string (url)
 * - title: string (influencer handle)
 * - id: string
 * - stat: number (whatever data its sorted by ex: twitcher viewers)
 * - statIcon: svg
 */
import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Debug from 'components/Debug'

export const InfluencerItem = props => (
  <Debug style={{ textAlign: 'left' }} {...props} />
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

export default withInfluencerItem(InfluencerItem)
