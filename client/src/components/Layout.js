import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

export const PageContent = styled.div(props => `
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 0;

  @media(min-width: 600px) {
    padding: 50px;
  }
`)

export const PageContainer = styled.div(props => `
  width: 100%;
  margin-top: 60px;
  background: ${props.background || 'transparent'};
`)

export const Page = ({ className, children, background }) => (
  <PageContainer background={background} className={className}>
    <PageContent>
      {children}
    </PageContent>
  </PageContainer>
)

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  background: PropTypes.string
}

Page.defaultProps = {
  className: '',
  children: undefined,
  background: undefined
}
