import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  // const { id } = useParams();

  const url = "http://localhost:8080/";

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const results = await axios.get(`${url}users`);
    setUsers(results.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  return (
    <div className="container my-4">
      <h1 className="pb-4 text-dark fw-bold">Employee Management System</h1>
      <table className="table table-striped border shadow">
        <thead className="bg-dark text-white">
          <tr>
            <th scope="col">Employee ID</th>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Designation</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row">{user.employeeId}</th>
                <td>{user.username}</td>
                <td>{user.employeeName}</td>
                <td>{user.email}</td>
                <td>{user.designation}</td>
                <td>
                  <Link
                    to={`/viewUser/${user.employeeId}`}
                    className="btn btn-sm rounded-0 btn-primary mx-1"
                  >
                    View
                  </Link>
                  <Link
                    to={`/editUser/${user.employeeId}`}
                    className="btn btn-sm rounded-0 btn-outline-success mx-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteUser(user.employeeId)}
                    className="btn btn-sm rounded-0 btn-danger mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
