import "./App.css";
import React, { Component } from "react";
import ProfileData from "./ProfileData";
import UserProfile from "./UserProfile";
import Header from "./Header";

class AddProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
        firstName: "",
        lastName: "",
        role: "",
        id: ""
      
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleFirstName = (event) => {
    event.preventDefault();
    this.setState({firstName: event.target.value})
  };

  handleLastName = (event) => {
    event.preventDefault();
    this.setState({lastName: event.target.value})
  };

  handleRole = (event) => {
    event.preventDefault();
    this.setState({role: event.target.value})
  };

  handleId = (event) => {
    event.preventDefault();
    this.setState({id: event.target.value})
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={this.handleFirstName}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={this.handleLastName}
        />
        <input type="text" placeholder="Role" onChange={this.handleRole} />
        <input type="text" placeholder="Id #" onChange={this.handleId} />
      </form>
    );
  }
}

export default AddProfileForm;
