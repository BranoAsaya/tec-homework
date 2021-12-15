import React, { useState } from 'react'

const Name = ({ name }) => {
  const [Fname, setFname] = useState(name)
  const [bool, setBool] = useState(false)
  const colorToggle = () => {
    setBool(bool ? false : true)
  }
  return (
    <div>
      <p onClick={colorToggle} style={{ color: bool ? 'red' : 'blue' }}>
        {Fname}
      </p>
    </div>
  )
}
export default Name
