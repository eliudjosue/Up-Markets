import React from 'react'

const UserTable = (props) => {

  console.log(props.users)
    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            props.users.length > 0 ?
            props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                  <button className="button muted-botton">Edit</button>
                  <button className="button muted-botton">Delete</button>
              </td>
            </tr>
            )) : (
              <tr>
                <td colSpan={3}>No users</td>
              </tr>
            )
          }
         
         
        </tbody>
      </table>
     );
}

export default UserTable;