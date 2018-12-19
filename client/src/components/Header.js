import React from 'react'
import styled from '@emotion/styled'

const Container = styled.header`
  position: fixed;
  width: 100%;
  min-height: 60px;
  top: 0;
  background-color: #000;
`

const Logo = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  font-size: 30px;
  color: #fff;
`

const Header = ({}) => (
  <Container>
    <Logo>Influencers</Logo>
  </Container>
)

export default Header
