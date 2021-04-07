import "./App.css";
import React, { Component } from "react";
import ProfileData from "./ProfileData";
import UserProfile from "./UserProfile";
import Header from "./Header";
import AddProfileForm from "./AddProfileForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.addProfile = this.addProfile.bind(this);
    this.state = {
      profileList: [],
    };
  }

  addProfile = (profile) => {
    this.setState({ profileList: [...this.state.profileList, profile] });
  };

  render() {
    return (
      <div>
        <Header />
        <AddProfileForm addProfile={this.addProfile} />
        {this.state.profileList.map((profile) => (
          <UserProfile
            firstName={profile.firstName}
            lastName={profile.lastName}
            role={profile.role}
            id={profile.id}
          />
        ))}
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
