import React, { Component } from 'react'

export default class CounterTwo extends Component {
  state = { count: 0 }
  componentDidMount() {
    document.title = this.state.count
    
  }
  componentDidUpdate() {
    document.title = this.state.count
  }

  render() {
    return (
      <div
        onClick={() => this.setState({ count: this.state.count + 1 })}
        style={{ width: '100%', height: '100vh' }}
      ></div>
    )
  }
}
