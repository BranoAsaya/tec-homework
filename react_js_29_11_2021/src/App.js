import "./App.css";
// import ShowPosts from "./components/ShowPosts/ShowPosts.js";
import CodeFix from "./components/CodeFix/CodeFix.js";

import React, { Component } from "react";

export default class App extends Component {


  render() {
    return (
      <div className='App'>
    {/* <ShowPosts/> */}
    <CodeFix/>
      </div>
    );
  }
}
