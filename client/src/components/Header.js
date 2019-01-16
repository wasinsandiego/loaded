import React from 'react'
import styled from '@emotion/styled'

const Container = styled.header`
  position: fixed;
  width: 100%;
  min-height: 60px;
  top: 0;
  background-color: #000;
  z-index: 1;
`

const Logo = styled.img`
  position: absolute;
  padding: 15px;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
`

const Header = () => (
  <Container>
    <Logo src='logo.svg' />
  </Container>
)

export default Header
