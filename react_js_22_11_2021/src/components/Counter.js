import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state={count:this.props.num}
    }
    plusCount=()=>{this.setState({count:this.state.count +1})}
    render() {
        return (
            <>
            <button onClick={this.plusCount}>Click</button>
                <p>{this.state.count}</p>
            </>
        )
    }
}
