import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ViewUser() {
  const [user, setUser] = useState({
    employeeName: "",
    username: "",
    email: "",
    designation: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded-0 p-4 mt-5 bg-white shadow">
          <h2 className="text-center fw-bold pb-2">Employee Details</h2>

          <div className="card rounded-0">
            <div className="card-header">
              <p className="py-1">
                <strong>Details of Employee ID:</strong> {user.employeeId}
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Name: </strong>
                  {user.employeeName}
                </li>
                <li className="list-group-item">
                  <strong>UserName: </strong>
                  {user.username}
                </li>
                <li className="list-group-item">
                  <strong>Email: </strong>
                  {user.email}
                </li>
                <li className="list-group-item">
                  <strong>Designation: </strong>
                  {user.designation}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-3 rounded-0" to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
