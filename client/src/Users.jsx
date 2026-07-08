import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Edit from "./edit/UserEdit";

const API = "https://assignment-3-backend-2t8x.onrender.com/api/users";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setUsers(data);
  };

  const remove = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    load(); // refresh list
  };

  

  return (
    <div>
      <h2>Users</h2>

      <Link className="reglinkbt" to="/users/add">Add User</Link>
      <br></br>
      <br></br>
      {users.map((u) => (
        <div key={u._id}>
        {u.firstName} {u.lastName}  -  {u.username}  -  {u.email}
          <Link className="btn" to={`/users/edit/${u._id}`}> Edit</Link>
          <button onClick={() => remove(u._id)}>Delete</button>
          <br></br>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default UsersList;