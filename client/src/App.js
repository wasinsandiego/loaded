import React from 'react'
import Influencers from 'components/Influencers'
import InfluencerItem from 'components/InfluencerItem'
import InfluencerDetails from 'components/InfluencerDetails'

export const App = () => (
  <div className='App'>
    {/* <InfluencerItem id={1601235883} /> */}
    <InfluencerDetails id={1601235883} />
    {/* <Influencers /> */}
  </div>
)

export default App
