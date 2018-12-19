import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  background-color: #e1e1e1;
  border-radius: 50%;
  overflow: hidden;
`

const Image = styled.img`
  width: 100%;
`

const Avatar = ({ className, src, alt }) => (
  <Container className={className}>
    <Image src={src} alt={alt} />
  </Container>
)

export default Avatar
