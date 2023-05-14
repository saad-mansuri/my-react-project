import React from 'react';

import AddUsers from './Components/Users/AddUsers'
import UserList from './Components/Users/UserList'
import { useState } from 'react';
function App(props) {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (todos) =>{
    // console.log([fname]);
    setUsersList( prevData => [
        ...prevData,
        todos
      ]
    )
    // console.log(usersData);
  }
  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
