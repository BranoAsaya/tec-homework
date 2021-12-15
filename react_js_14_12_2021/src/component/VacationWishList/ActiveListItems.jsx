import React from 'react'

function ActiveListItems({ active, setDisabled, setList, activeDisabled }) {
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
  return (
    <>
      <button onClick={filterListActive} disabled={activeDisabled}>
        Active
      </button>
    </>
  )
}

export default ActiveListItems
