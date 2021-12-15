import React from 'react'

function AllListItems({ allList, setDisabled, setList ,allDisabled}) {
  const filterListAll = () => {
    const copyList = [...allList]
    setList(copyList)
    setDisabled({
      allDisabled: true,
      activeDisabled: false,
      completedDisabled: false,
    })
  }
  return (
    <>
      <button onClick={filterListAll} disabled={allDisabled}>All</button>
    </>
  )
}

export default AllListItems
