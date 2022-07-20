import React from 'react'

import './style.css'

const Button = ({ name, ...props }) => {
  return (
    <div>
      <button className="button" {...props} >
        <span>{name}</span>
      </button>
    </div>
  )
}

export default Button