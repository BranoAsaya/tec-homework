import React from 'react'

function ShowList({ list, setList,setAllList ,setActive,setCompleted}) {
  const makeVisited = (i) => {
    const copyList = [...list]
    copyList[i].visited = true
    setList(copyList)
    setAllList(copyList)
    setActive(copyList)
    setCompleted(copyList)
  }
  return (
    <>
      <ol>
        {list.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => makeVisited(i)}
              style={{ textDecorationLine: item.visited ? 'line-through' : '' }}
            >
              {item.city}
             
            </li>
          )
        })}
      </ol>
    </>
  )
}

export default ShowList
