import React from 'react'
import styled from '@emotion/styled'
import GlobalStyles from './GlobalStyles'
import Header from 'components/Header'
import InfluencersList from 'components/InfluencersList'
import InfluencerItem from 'components/InfluencerItem'
import InfluencerDetails from 'components/InfluencerDetails'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const Box = styled.div`
  position: relative;
  margin: 100px;
  padding: 20px;
  background: #f9f9f9;
  &:after {
    pointer-events: none;
    content: '';
    position: absolute;
    width: calc(100% - 40px);
    height: calc(100% - 40px);
    top: 20px;
    left: 20px;
    border: dashed 1px rgba(255, 0, 255, 0.2);
  }
`

const App = () => (
  <Container className='App'>
    <Header />
    {/* <InfluencerDetails id={1601235883} /> */}
    <InfluencersList />
    {/* <Box>
      <InfluencerItem id={1601235883} />
    </Box> */}
    <GlobalStyles />
  </Container>
)

export default App
