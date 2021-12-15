import React, { useState } from 'react'
import AddItem from './AddItem'
import ShowList from './ShowList'
import AllListItems from './AllListItems'
import ActiveListItems from './ActiveListItems'
import CompletedListItems from './CompletedListItems'

function VacationWishList() {
  const [list, setList] = useState([])
  const [allList, setAllList] = useState([])
  const [active, setActive] = useState([])
  const [completed, setCompleted] = useState([])
  const [
    { allDisabled, activeDisabled, completedDisabled },
    setDisabled,
  ] = useState({ all: false, active: false, completed: false })
  return (
    <div>
      <h1>Vacation Wish List</h1>
      <AddItem
        list={list}
        setList={(item) => setList(item)}
        setAllList={(item) => setAllList(item)}
        setActive={(item) => setActive(item)}
        setCompleted={(item) => setCompleted(item)}
      />
      <ShowList
        list={list}
        setList={(item) => setList(item)}
        setAllList={(item) => setAllList(item)}
        setActive={(item) => setActive(item)}
        setCompleted={(item) => setCompleted(item)}
      />
      <AllListItems
        allList={allList}
        setDisabled={(item) => setDisabled(item)}
        setList={(item) => setList(item)}
        allDisabled={allDisabled}
      />
      <ActiveListItems
        active={active}
        setDisabled={(item) => setDisabled(item)}
        setList={(item) => setList(item)}
        activeDisabled={activeDisabled}
      />
      <CompletedListItems
        completed={completed}
        setDisabled={(item) => setDisabled(item)}
        setList={(item) => setList(item)}
        completedDisabled={completedDisabled}
      />
    </div>
  )
}

export default VacationWishList
