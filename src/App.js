import React, { useState } from "react";
import { AddUser } from "./components/Users/AddUser";
import { UsersList } from "./components/Users/UsersList";

function App() {
  const [userData, setUserData] = useState([]);

  const onAddUserDataHandler = (uName, uAge) => {
    localStorage.setItem('user data',JSON.stringify(userData))
    setUserData([...userData, { name: uName, age: uAge }]);
  };

  return (
    <div>
      <AddUser onAddUserData={onAddUserDataHandler} />
      <UsersList users={userData} />
    </div>
  );
}

export default App;
