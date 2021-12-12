import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Courses from "./Courses";
import Events from "./Events";
import Mentoring from "./Mentoring";
import Testimonials from "./Testimonials";
export default class Header extends Component {
  render() {
    return (
      <header>
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Courses">Courses</Link>
            <Link to="/Mentoring">Mentoring</Link>
            <Link to="/Testimonials">Testimonials</Link>
            <Link to="/Events">Events</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Courses" component={Courses} />
            <Route exact path="/Events" component={Events} />
            <Route exact path="/Mentoring" component={Mentoring} />
            <Route exact path="/Testimonials" component={Testimonials} />
          </Switch>
        </BrowserRouter>
      </header>
    );
  }
}
