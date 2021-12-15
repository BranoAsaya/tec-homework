import React, { useState } from 'react'

function AddItem({ list, setList,setAllList ,setActive,setCompleted}) {
  const [input, setInput] = useState('')
  const addToList = () => {
    const copyList = [...list]
    const listObj={city:input,visited: false}
    copyList.push(listObj)
    setList(copyList)
    setAllList(copyList)
    setActive(copyList)
    setCompleted(copyList)
  }

  return (
    <>
      <>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <button onClick={addToList}>Add Vacation</button>
      </>
    </>
  )
}

export default AddItem
