import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class AddPerson extends Component {
  state = { redirect: false };
  name = null;
  age = null;
  biography = null;
  formSubmit = (e) => {
    e.preventDefault();
    const { fname, age, textarea } = e.target;
    this.name = fname.value;
    this.age = age.value;
    this.biography = textarea.value;
    this.props.person(this.name, this.age, this.biography);
    console.log("Submit");
    this.setState({ redirect: true });
  };
  render() {
    const page = this.state.redirect ? <Redirect to="/Persons" /> : "";
    return (
      <>
        <h1>Add Person</h1>
        <form onSubmit={this.formSubmit}>
          <input type="text" name="fname" />
          <input type="number" name="age" />
          <textarea cols="20" rows="3" name="textarea"></textarea>
          <input type="submit" />
        </form>
        {page}
      </>
    );
  }
}
