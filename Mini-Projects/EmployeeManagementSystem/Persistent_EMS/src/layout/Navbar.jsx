import Logo from "../assets/persistent.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-dark text-white">
        <div className="container container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={Logo}
              alt="Persistent"
              className="d-inline-block align-text-top mx-1"
            />
          </Link>
          <Link
            to="/addUser"
            className="btn btn-sm bg-success text-white rounded-0"
          >
            Add Employee
          </Link>
        </div>
      </nav>
    </>
  );
}
