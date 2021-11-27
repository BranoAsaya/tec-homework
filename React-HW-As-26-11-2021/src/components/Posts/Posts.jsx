import React, { Component } from 'react'
import * as styles from "./Posts.module.css"

export default class Posts extends Component {
  state={array:[],posts:[]}
  show =[]
  getFromApi=()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((data)=>{
        this.setState({array:data})
         
       this.setState({posts:this.show})
    })
    .catch((err)=>console.error(err))
}
   render() {
       
    for (const iterator of this.state.array) {
        this.show.push(<li >{iterator.title}</li>)
    }
        return (
            <>
            <div className={styles.title}>
            <button onClick={this.getFromApi}>click</button>
              <ul>
                 {this.state.posts} 
                </ul> 
               </div>  
            </>
        )
    }
}


  
   