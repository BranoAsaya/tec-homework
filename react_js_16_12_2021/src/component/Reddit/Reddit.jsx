import React, { useState, useEffect } from 'react'

function Reddit() {
  const [title, setTitle] = useState([])

  const getData = () => {
    fetch('https://www.reddit.com/r/reactjs.json')
      .then((res) => res.json())
      .then((data) => setTitle(data.data.children))
  }
  useEffect(getData, [])
  return (
    <>
      <div>
        <ul>
          {title.map((reddit, i) => {
            return <li key={i}> {reddit.data.title}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default Reddit
