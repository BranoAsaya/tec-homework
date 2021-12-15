import React from 'react'

function CompletedListItems({completed,setDisabled,setList,completedDisabled}) {
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
        <>
            <button onClick={filterListCompleted} disabled={completedDisabled}>Completed</button>
        </>
    )
}

export default CompletedListItems
