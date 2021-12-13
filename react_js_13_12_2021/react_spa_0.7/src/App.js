import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./component/Pages/Home";
import Persons from "./component/Pages/Persons";
import AddPerson from "./component/Pages/AddPerson";
import Details from "./component/Pages/Details";

export default class App extends Component {
 persons=[]
 bio=null
  createNewPerson=(name,age,bio)=>{
  const array = [...this.persons]
  const obj={name,age,bio}
  array.push(obj)
  this.persons=array
  }
  getBioAndSet=(text)=>{
   this.bio=text

  }

  render() {
    return (
      <>
        <div className="App">
          <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/Persons">Persons</Link>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                exact
                path="/Persons"
                render={() => <Persons persons={this.persons} bio={this.getBioAndSet} />}
              />
              <Route
                exact
                path="/AddPerson"
                render={() => <AddPerson person={this.createNewPerson} />}
              />
                            <Route
                exact
                path="/Details"
                render={() => <Details bio={this.bio} />}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </>
    );
  }
}
