import React from 'react'
import { shallow } from 'enzyme'
import { InfluencersList } from './InfluencersList'
import { InfluencerItem } from './InfluencerItem'

it('InfluencersList - renders without props', () => {
  shallow(<InfluencersList />)
})

it('InfluencersList - renders with InfluencerItem(s)', () => {
  const wrapper = shallow(
    <InfluencersList
      data={[
        { id: 1, thumbUrl: 'imaThumbnail', title: 'Ima Influencer', subTitle: 'Ima Subtitle' },
        { id: 2, thumbUrl: 'imaThumbnailToo', title: 'Ima InfluencerToo', subTitle: 'Ima SubtitleToo' },
        { id: 3, thumbUrl: 'imaThumbnailAlso', title: 'Ima InfluencerAlso', subTitle: 'Ima SubtitleAlso' }
      ]}
    />
  )

  expect(
    wrapper.find(InfluencerItem)
  ).toHaveLength(3)
})
