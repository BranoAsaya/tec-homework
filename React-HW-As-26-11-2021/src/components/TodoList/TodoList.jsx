import React, { Component } from 'react'

export default class TodoList extends Component {
state={newTask:"",status:"true"}
Tasks=[]
input=""

keepInput=(e)=>{
    this.input=e.target.value
  }
addTask=()=>{
   this.Tasks.push(<> <li ><button onClick={this.deleteTask} name={this.Tasks.length-1}>X</button>{this.input}<input type="checkbox" onChange={this.getChecked} name={this.Tasks.length}/>status:{this.state.status}</li>   </>)
   this.setState({newTask:this.Tasks})
}
deleteTask=(e)=>{
this.Tasks.splice(e.target.name-1,1)
this.setState({newTask:this.Tasks})
}
getChecked=(e)=>{
   let boolean=e.target.checked.toString()
   this.setState({status:boolean})
   
   this.setState({newTask:this.Tasks})
}
  render() {
        return (
            <>
               <h1>TodoList</h1> 
               <input type="text" placeholder="ADD Task" onChange={this.keepInput}/>
               
               <button onClick={this.addTask}>ADD TASK</button>
               <ul>
                  {this.state.newTask}
               </ul>
            </>
        )
    }
}


  