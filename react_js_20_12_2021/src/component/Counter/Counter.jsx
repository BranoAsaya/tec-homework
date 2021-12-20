import React,{useState,useEffect} from 'react'

function Counter({number}) {
    const [count,setCount]=useState(number)
    useEffect(()=>{setCount(number)},[number])
    return (
        <div>
            <button onClick={()=>setCount((prev)=>prev+1)}>increment</button>
            <p>{count}</p>
        </div>
    )
}

export default Counter
