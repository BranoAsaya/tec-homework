import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Pages/Home";
import Books from "./component/Pages/Books";
import AddBook from "./component/Pages/AddBook"
import BookDetails from "./component/Pages/BookDetails";
;

export default class App extends Component {
  books = [{ title: 'title', author: 'author', pages: 'pages', img: 'https://i.ibb.co/gjYRGDZ/card7.png', summary: 'summary' }]
  details=''
  addNewBook = (title, author, pages, img, summary) => {
    this.books.push({ title, author, pages, img, summary })
  }
  saveBookDetails=(pages,img,summary)=>{
   this.details={pages,img,summary}
  }

  render() {
    return (<>
      <div className="App" >
        <BrowserRouter >
          <Link to="/"> Home </Link>
          <Link to="/Books"> Books </Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Books" render={() => <Books books={this.books} details={this.saveBookDetails}/>} />
            <Route exact path="/AddBook" render={() => <AddBook book={this.addNewBook} />} />
            <Route exact path="/BookDetails" render={() => <BookDetails book={this.details}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
    );
  }
}








