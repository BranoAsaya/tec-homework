import React,{ useState }  from 'react'
const Login = () => {
    const [{userName,userEmail,userPassword},setUser]=useState({name:'',email:'',password:''})
    return (
        <div>
            <form >
                <input type="text" name='name' onChange={(e)=>setUser({userName:e.target.value,userEmail,userPassword})}/>
                <input type="email" name='email'onChange={(e)=>setUser({userName,userEmail:e.target.value,userPassword})}/>
                <input type="password" name='password'onChange={(e)=>setUser({userName,userEmail,userPassword:e.target.value})}/>
                <input type="button" value='Login' onClick={()=>console.log(userName,userEmail,userPassword) }/>
            </form>
        </div>
    )
}
export default Login