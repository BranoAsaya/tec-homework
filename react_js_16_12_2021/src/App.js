import "./App.css";
import React, { useState } from "react";
// import Reddit from "./component/Reddit/Reddit";
// import RedditProp from "./component/RedditProp/RedditProp";
import Unmount from "./component/Unmount/Unmount";

const App = () => {

  // const [input, setInput] = useState('reactjs')
  const [bool,setBool]=useState(false)
  const toggle= bool ? <Unmount/>:""
  return (

    <>
      {/* <input type="text" onChange={(e) => setInput(e.target.value)} /> */}
      {/* <Reddit/> */}
      {/* <RedditProp input={input}/> */}
      <button onClick={()=>setBool(bool?false:true)}>Click </button>
     {toggle}

    </>
  )
}
export default App








