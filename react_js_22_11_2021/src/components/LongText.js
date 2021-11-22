import React, { Component } from 'react'

export default class LongText extends Component {
    
    constructor(props) {
        super(props)
        this.state={text:this.props.text,color:"black"}
        
    }
    

    render() {
        this.state.color=this.state.text.length>5?"red":"blue"
        return (
            <>
               <p style={{color:this.state.color}} >{this.state.text}</p> 
            </>
        )
    }
}
