import React, { useEffect, useState } from 'react'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }
  useEffect(getData, [])

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, i) => {
            return (
              <tr key={i}>
                <td>{post.title}</td>
                <td>{post.id}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export default Posts