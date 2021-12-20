import React, { useState, useEffect } from 'react'

const CounterThree = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = count
  })

  return (
    <div
      style={{ width: '100%', height: '100vh' }}
      onClick={() => setCount((prev) => prev + 1)}
    ></div>
  )
}

export default CounterThree
