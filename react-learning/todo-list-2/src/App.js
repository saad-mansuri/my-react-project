import React, {useState} from 'react';
import AddUsers from "./component/Users/AddUsers";
import UserList from './component/Users/UserList';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (uName, uAge) =>{
    setUsersList(prevUserList =>[
        ...prevUserList,
        {name : uName, age : uAge, id: Math.random().toString()}
      ]
    )
  }
  return (
    <div>
      <AddUsers onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
