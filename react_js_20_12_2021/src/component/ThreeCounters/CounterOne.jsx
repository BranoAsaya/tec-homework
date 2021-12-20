import React from 'react'

function CounterOne() {
  let num = 0

  return (
    <div
      onClick={() => (document.title = num++)}
      style={{ width: '100%', height: '100vh' }}
    ></div>
  )
}

export default CounterOne
