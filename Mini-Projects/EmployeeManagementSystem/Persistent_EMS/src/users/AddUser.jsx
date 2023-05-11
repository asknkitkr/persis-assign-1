import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    employeeName: "",
    username: "",
    email: "",
    designation: "",
  });

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded-0 bg-white p-4 mt-5 shadow">
          <h2 className="text-center fw-bold">Register Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name:
              </label>
              <input
                type={"text"}
                className="form-control rounded-0"
                placeholder="Enter Employee Name"
                name="employeeName"
                value={user.employeeName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                UserName:
              </label>
              <input
                type={"text"}
                className="form-control rounded-0"
                placeholder="Enter Username"
                name="username"
                value={user.username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail:
              </label>
              <input
                type={"text"}
                className="form-control rounded-0"
                placeholder="Enter E-mail ID"
                name="email"
                value={user.email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Designation" className="form-label">
                Designation:
              </label>
              <input
                type={"text"}
                className="form-control rounded-0"
                placeholder="Enter Employee Designation"
                name="designation"
                value={user.designation}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary rounded-0">
              Submit
            </button>
            <Link to="/" className="btn btn-outline-danger mx-2 rounded-0">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
