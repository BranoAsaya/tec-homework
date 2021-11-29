import React, { Component } from "react";

export default class CodeFix extends Component {
  state = {
    persons: [
      { id: 1, first: "avi", last: "cohen" },
      { id: 2, first: "mickey", last: "berkovich" },
      { id: 3, first: "jim", last: "ber" },
    ],
    personToEdit: { first: "", last: "" },
    inputFirst: "",
    inputLast: "",
  };
  render() {
    const { persons, personToEdit, inputFirst, inputLast } = this.state;
    const personsElement = persons.map((person) => (
      <div key={person.id}>
        <p>
          first : {person.first} ,last : {person.last}
        </p>
        <button
          onClick={() => {
            const newPersons = persons.filter((item) => item.id !== person.id);
            this.setState({ persons: newPersons });
          }}>
          Delete
        </button>
        <button
          onClick={() => {
            this.setState({ personToEdit: person });
          }}>
          Edit
        </button>
      </div>
    ));
    return (
      <div className='App'>
        <div>
          first name{" "}
          <input
            onChange={(evt) => {
              this.setState({ inputFirst: evt.target.value });
             personToEdit.first= evt.target.value 
            }}
            value={personToEdit.first}
          />
          <br />
          last name{" "}
          <input
            onChange={(evt) => {
              this.setState({ inputLast: evt.target.value });
              personToEdit.last= evt.target.value 

            }}
            value={personToEdit.last}
          />
          <br />
          <button
            onClick={() => {
              console.log(`personToEdit.id : ${personToEdit.id}`);
              let newPersons = [...persons];
              let person = newPersons.find((it) => it.id === personToEdit.id);
              person.last = inputLast;
              person.first = inputFirst;
              this.setState({ persons: newPersons });
            }}>
            Update
          </button>
        </div>
        {personsElement}
      </div>
    );
  }
}
