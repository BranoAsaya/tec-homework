import React,{useState} from 'react'

 const ThreeCounters = () => {
    const [countI,setCountI]=useState(0)
    const [countII,setCountII]=useState(0)
    const [countIII,setCountIII]=useState(0)
    return (
        <div>
            <button onClick={()=>setCountI(countI +1)}>increment 1</button>
            <button onClick={()=>setCountII(countII +1)}>increment 2</button>
            <button onClick={()=>setCountIII(countIII +1)}>increment 3</button>
         <p>{countI}</p>
         <p>{countII}</p>
         <p>{countIII}</p>
        </div>
    )
}
export default ThreeCounters
