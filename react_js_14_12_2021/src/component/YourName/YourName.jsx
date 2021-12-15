import React,{useState} from 'react'

const YourName = () => {
    const name ='Brano'
    const [bol,setBol]=useState(false)
    const checkBol=()=>{
        setBol(bol?false:true)
    }
    return (
        <div>
            <p onClick={checkBol} style={{color:bol?'red':'blue'}}>{name}</p>
        </div>
    )
}
export default YourName