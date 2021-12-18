import React, { useState, useEffect } from 'react'

function RedditProp({input}) {
  const [title, setTitle] = useState([])

  const getData = () => {
    fetch('https://www.reddit.com/r/'+input+'.json')
      .then((res) => res.json())
      .then((data) => setTitle(data.data.children))
      .catch((err)=>{console.error(err);})
  }
  useEffect(getData, [input])
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

export default RedditProp