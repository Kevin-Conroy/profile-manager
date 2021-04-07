import "./App.css";
import React, { Component } from "react";
import ProfileData from "./ProfileData";
import UserProfile from "./UserProfile";
import Header from "./Header";
import AddProfileForm from "./AddProfileForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileList: [],
    };
  }

  render() {
    return (
      <div>
        <Header />
        <AddProfileForm />
        <ProfileData />
      </div>
    );
  }
}

/*
  const profileList = ProfileData.map(profile  => 
  <UserProfile 
    firstName={profile.firstName}
    lastName={profile.lastName}
    role={profile.role}
    id={profile.id}
  />)
*/

export default App;
