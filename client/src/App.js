import React from 'react'
import styled from '@emotion/styled'
import GlobalStyles from './GlobalStyles'
import Header from 'components/Header'
import InfluencersList from 'components/InfluencersList'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`

const App = () => (
  <Container className='App'>
    <Header />
    <InfluencersList />
    <GlobalStyles />
  </Container>
)

export default App
