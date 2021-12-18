import React, { useState, useEffect } from 'react'

function RedditAsyc() {
    const [data,setData]=useState([])
  const getData = async () => {
    const response = await fetch('https://www.reddit.com/r/reactjs.json')
    const data =  await response.json() ;
    return  setData(data.data.children)
  }
  
  

  return (
    <>
       <div>
        <ul>
          {data.map((reddit, i) => {
            return <li key={i}> {reddit.data.title}</li>
          })}
        </ul>
      </div>
    </>
  )
}

export default RedditAsyc
