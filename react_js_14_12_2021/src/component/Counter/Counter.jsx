import React,{useState,useEffect} from 'react'

 const Counter = () => {
const [count,setCount]=useState(0)
useEffect(()=>{
console.log('component');
},[])
    return (
        <div>
            <button onClick={()=>setCount(count +1)}>click</button>
            <p>{count}</p>
        </div>
    )
}
export default Counter