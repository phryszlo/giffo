import React from 'react'
import {Link} from 'react-router-dom'

function Header({ title }) {
  return (
    <div className="header">
      <h4 className="title">{title}</h4>
    </div>
  )
}

export default Header