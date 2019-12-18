import React, { useState } from 'react'

import './checkbox.css'

export function Checkbox () {
  const [ isChecked, setChecked ] = useState(false)

  function toggleCheck () {
    setChecked(!isChecked)
  }

  return (
    <div className="container">
      <button onClick={toggleCheck}>Check</button>

      <div
        className="checkbox"
      >
        <Inner
          width={isChecked ? '212px' : '232px'}
          height={isChecked ? '212px' : '232px'}
          borderRadius={isChecked ? '16px' : '24px'}
        />
      </div>
    </div>
  )
}

function Inner ({ width, height, borderRadius }) {
  return (
    <div
      className="inner"
      style={{ width, height, borderRadius }}
    />
  )
}
