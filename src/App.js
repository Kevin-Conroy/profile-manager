import './App.css';
import ProfileData from './ProfileData';
import UserProfile from './UserProfile';
import Header from './Header'

function App() {
  const profileList = ProfileData.map(profile  => 
  <UserProfile 
    firstName={profile.firstName}
    lastName={profile.lastName}
    role={profile.role}
    id={profile.id}
  />)

  
    
return (
  <div>
    <Header />
    {profileList}
  </div>
)

      
  
}
  

export default App;
