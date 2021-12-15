import React, { useState } from 'react'

const VacationList = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')
  const [allList, setAllList] = useState([])
  const [active, setActive] = useState([])
  const [completed, setCompleted] = useState([])
  const [
    { allDisabled, activeDisabled, completedDisabled },
    setDisabled,
  ] = useState({ all: false, active: false, completed: false })
  const addNewWish = () => {
    const arr = [...list]
    const obj = { city: input, visited: false }
    arr.push(obj)
    setList(arr)
    setAllList(arr)
    setActive(arr)
    setCompleted(arr)
  }
  const makeVisited = (i) => {
    const arr = [...list]
    arr[i].visited = true
    setList(arr)
    setAllList(arr)
    setActive(arr)
    setCompleted(arr)
  }
  const filterListAll = () => {
    const arr = [...allList]
    setList(arr)
    setDisabled({
      allDisabled: true,
      activeDisabled: false,
      completedDisabled: false,
    })
  }
  const filterListActive = () => {
    const arr = [...active]
    const newArr = arr.filter((item) => {
      return item.visited === false
    })
    setList(newArr)
    setDisabled({
      allDisabled: false,
      activeDisabled: true,
      completedDisabled: false,
    })
  }
  const filterListCompleted = () => {
    const arr = [...completed]
    const newArr = arr.filter((item) => {
      return item.visited === true
    })
    setList(newArr)
    setDisabled({
      allDisabled: false,
      activeDisabled: false,
      completedDisabled: true,
    })
  }

  return (
    <div>
      <h1>Vacation Wish List</h1>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={addNewWish}>Add Vacation</button>
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
      <button onClick={filterListAll} disabled={allDisabled}>
        All
      </button>
      <span> </span>
      <button onClick={filterListActive} disabled={activeDisabled}>
        Active
      </button>
      <span> </span>
      <button onClick={filterListCompleted} disabled={completedDisabled}>
        Completed
      </button>
      <span> </span>
    </div>
  )
}
export default VacationList
