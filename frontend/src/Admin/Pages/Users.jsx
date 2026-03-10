import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {

  const [users,setUsers] = useState([]);

  useEffect(()=>{

    axios.get("http://localhost:8000/api/admin/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));

  },[]);

  return (

    <div>

      <h2>Users</h2>

      <table border="1" cellPadding="10">

        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
          </tr>
        </thead>

        <tbody>

          {users.map(user => (

            <tr key={user._id}>
              <td>{user.email}</td>
              <td>{user.username}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default Users;