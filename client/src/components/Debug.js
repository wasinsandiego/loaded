import React from 'react'

/**
 * A component to print props to the screen.
 * @param  {object}    props       The props for the component
 * @return {component}             A react component
 */
const Debugger = ({ style, ...props }) => (
  <pre style={style}>
    {console.groupCollapsed('Debug Me')}
    {console.log('props: ', props)}
    {console.groupEnd()}
    {JSON.stringify(props, null, '  ')}
  </pre>
)

export default Debugger
