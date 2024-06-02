import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUp/SignIn";
import SignUp from "./components/LoginSignUp/SignUp";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Dashboard from "./components/Dashboard/Dashboard";
import AddEmployee from "./components/Employee/AddEmployee";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}/>

        {/* protect route using  PrivateRoute */}
        <Route path="/SignUp" element={<PrivateRoute ProtectRoute={<SignUp />}/>} />
        <Route path="/Dashboard" element={<PrivateRoute ProtectRoute={<Dashboard />}/>} />
        <Route path="/AddEmployee" element={<PrivateRoute ProtectRoute={<AddEmployee />} />} />
      </Routes>
    </BrowserRouter>
  )
}