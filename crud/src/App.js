import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';

function App() {

  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Ben', username: 'floppydiskette' },
  ]

  //state
  const [users, setUsers] = useState(usersData);

  // Agregar usuario.
  const addUser = (user) => {
    user.id = uuidv4()
    setUsers([
      ...users,
      user
    ])
  }

  return (
    <div className="container">
      <h1>CRUD App with HOOKS</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm/>
          </div>
          <div className="flex-large">
            <h2>View user</h2>
            <UserTable users={users}/>
            </div>
          </div>
          </div>
  );
}

export default App;
