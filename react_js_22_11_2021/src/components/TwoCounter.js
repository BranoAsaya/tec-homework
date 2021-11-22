import React, { Component } from 'react'
import Counter from './Counter'

export default class TwoCounter extends Component {
    render() {
        return (
            <>
              <Counter num={5}/> 
              <Counter num={6}/> 

            </>
        )
    }
}
