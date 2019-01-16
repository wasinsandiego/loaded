import React from 'react'
import { shallow } from 'enzyme'
import { Page } from './Layout'

it('Page - renders without props', () => {
  shallow(<Page />)
})

it('Page - renders single child', () => {
  const wrapper = shallow(<Page><h1>Ima Child</h1></Page>)
  expect(wrapper.find('h1')).toHaveLength(1)
})

it('Page - renders many children', () => {
  const wrapper = shallow(
    <Page>{
      Array(5).fill().map((_, index) => <h1 key={index}>Ima Child</h1>)
    }</Page>
  )
  expect(wrapper.find('h1')).toHaveLength(5)
})
