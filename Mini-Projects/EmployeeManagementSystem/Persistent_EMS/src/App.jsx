import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Layout/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {
  return (
    <main className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/addUser" element={<AddUser />} />
        <Route path="/editUser/:id" element={<EditUser />} />
        <Route path="/viewUser/:id" element={<ViewUser />} />
      </Routes>
    </main>
  );
}

export default App;
