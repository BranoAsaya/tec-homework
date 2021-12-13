import React, { Component } from 'react'

export default class BookDetails extends Component {
  render() {
    return (
      <>
        <h1>BookDetails</h1>
        <h4>{this.props.book.pages}</h4>
        <img src={this.props.book.img} alt="book" />
        <h5>{this.props.book.summary}</h5>
      </>
    )
  }
}
