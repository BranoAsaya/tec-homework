import React, { Component } from 'react'

export default class ShowHide extends Component {
    constructor(props) {
        super(props)
        this.state={show:"1"}
    }
    chanceOpacity=()=>{this.setState({show:this.state.show==="1"?"0":"1"})}
    
    render() {
        return (
            <>
              <p style={{opacity:this.state.show}}onClick={this.chanceOpacity}>{this.props.text}</p>  
            </>
        )
    }
}
