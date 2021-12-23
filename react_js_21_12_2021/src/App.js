import "./App.css";
import React, { createContext } from "react";
// import UseRef_1 from "./component/UseRef/UseRef_1";
// import UseRef_2 from "./component/UseRef/UseRef_2";
// import UseRef_3 from "./component/UseRef/UseRef_3";
import Level1 from "./component/UseContext/Level1";
export const UserContext = createContext()

const App = () => {
  const user = { name: 'john', email: 'john@mail.com', address: 'cuba' }
  return (
    <>
      {/* <UseRef_1/> */}
      {/* <UseRef_2/> */}
      {/* <UseRef_3/> */}

      <UserContext.Provider value={user}>
        <Level1 />
      </UserContext.Provider>


    </>
  )
}
export default App








