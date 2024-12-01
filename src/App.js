import React from 'react';
import UserProfile from "./component/UserProfile";
import Akita from "./component/Akita.jpeg";

function App() {
  return (
    <div>
      <UserProfile
        image={Akita}
        email="AkitaOwnerEmail.gmail.com"
        userName="Owner of Akita"
      />
    </div>
  )
}

export default App