import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Persons extends Component {
  state = { redirect: false, details: false };
  redirect = () => {
    this.setState({ redirect: true });
  };
  setBiography = (text) => {
    this.props.bio(text);
    this.setState({ details: true });
  };

  render() {
    const AddPersonPage = this.state.redirect ? (
      <Redirect to="/AddPerson" />
    ) : (
      ""
    );
    const DetailsPage = this.state.details ? <Redirect to="/Details" /> : "";
    const personsList = this.props.persons.map((person, i) => {
      return (
        <li key={i}>
          Name: {person.name} , Age: {person.age} 
          <button onClick={() => this.setBiography(person.bio)}>Details</button>
        
        </li>
      );
    });
    return (
      <>
        <h1>Persons</h1>
        <button onClick={this.redirect}>AddPerson</button>
        {AddPersonPage}
        {DetailsPage}
        <ul>{personsList}</ul>
      </>
    );
  }
}
