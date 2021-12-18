import React,{useEffect} from 'react'

function Unmount() {
useEffect(()=>{
console.log('hayy');
return ()=>console.log('Unmounted');
},[])
    return (
        <div>
            <h1>HAY</h1>
        </div>
    )
}

export default Unmount
