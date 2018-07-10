import React from 'react'

const Title = ({children, panel}) => (
  <h1
    className={panel.isOpen ? 'panel-open-title' : 'panel-close-title'}
  >{children}
  </h1>
)

export default Title
