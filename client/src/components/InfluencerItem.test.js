import React from 'react'
import { shallow } from 'enzyme'
import { InfluencerItem } from './InfluencerItem'

it('InfluencerItem - renders without props', () => {
  shallow(<InfluencerItem />)
})

it('InfluencerItem - renders with props', () => {
  shallow(
    <InfluencerItem
      thumbUrl='http://stuff.com/image.png'
      alt='Thats an image'
    />
  )
})
