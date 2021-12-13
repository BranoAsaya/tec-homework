import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Books extends Component {
  state = { addBookRoute: false, bookDetailsRoute: false }

  redirectToAddBook = () => {
    this.setState({ addBookRoute: true })
  }
  setBook = (pages, img, summary) => {
    this.props.details(pages, img, summary)
    this.setState({ bookDetailsRoute: true })
  }

  render() {
    const AddBookPage = this.state.addBookRoute ? (
      <Redirect to="/AddBook" />
    ) : null
    const BookDetails = this.state.bookDetailsRoute ? (
      <Redirect to="/BookDetails" />
    ) : null
    return (
      <>
        <h1>Books</h1>
        <button onClick={this.redirectToAddBook}>Add Book</button>
        {AddBookPage}
        {BookDetails}
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {this.props.books.map((book, i) => (
              <tr key={i}>
                <td>{book.title} </td>
                <td>
                  {book.author}
                  <button
                    onClick={() =>
                      this.setBook(book.pages, book.img, book.summary)
                    }
                  >
                    &#128195;
                  </button>
                  <button>&#9997;</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}
