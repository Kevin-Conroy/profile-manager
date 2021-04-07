import "./App.css";
import React, { Component } from "react";
import ProfileData from "./ProfileData";
import UserProfile from "./UserProfile";
import Header from "./Header";
import App from "./App";

class AddProfileForm extends Component {
  constructor(props) {
    super(props);
    this.addProfile = this.addProfile.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      role: "",
      id: "",
    };
  }

  addProfile = () => {
    this.props.addProfile();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addProfile(this.state);
  };

  handleInput = (field) => (event) => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="firstName"
          type="text"
          placeholder="First Name"
          onChange={this.handleInput("firstName")}
        />
        <input
          id="lastName"
          type="text"
          placeholder="Last Name"
          onChange={this.handleInput("lastName")}
        />
        <input
          id="role"
          type="text"
          placeholder="Role"
          onChange={this.handleInput("role")}
        />
        <input
          id="id"
          type="text"
          placeholder="Id #"
          onChange={this.handleInput("id")}
        />
        <button type="submit" onSubmit={this.handleSubmit}>
          Add Profile
        </button>
      </form>
    );
  }
}

export default AddProfileForm;
