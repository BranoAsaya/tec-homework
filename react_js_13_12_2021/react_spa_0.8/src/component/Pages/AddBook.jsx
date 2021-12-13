import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class AddBook extends Component {
  state = { booksRoute: false, btnDisabled: true }

  createNewBook = (e) => {
    e.preventDefault()
    const { title, author, pages, img, summary } = e.target
    this.props.book(
      title.value,
      author.value,
      pages.value,
      img.value,
      summary.value,
    )
    this.setState({ booksRoute: true })
  }
  validateInput = (e) => {
    const input = e.target.value
    const name = e.target.name
    console.log(name)
    console.log(input)
    if (input !== '' || input > 0 || input.length > 1) {
      this.setState({ btnDisabled: false })
    }
  }

  render() {
    const BookPage = this.state.booksRoute ? <Redirect to="/Books" /> : null

    return (
      <>
        <h1>AddBook</h1>
        {BookPage}
        <form onSubmit={this.createNewBook}>
          <label>Title</label>
          <input type="text" name="title" onChange={this.validateInput} />
          <label>Author</label>
          <input type="text" name="author" onChange={this.validateInput} />
          <label>Pages</label>
          <input type="number" name="pages" onChange={this.validateInput} />
          <label>Img</label>
          <input type="text" name="img" onChange={this.validateInput} />
          <label>Summary</label>
          <textarea
            name="summary"
            id=""
            cols="30"
            rows="10"
            onChange={this.validateInput}
          ></textarea>
          <input type="submit" disabled={this.state.btnDisabled} />
        </form>
      </>
    )
  }
}
