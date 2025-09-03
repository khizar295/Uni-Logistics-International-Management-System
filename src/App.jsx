import React from "react";
import "../node_modules/react-icons";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./Components/Landingpage.jsx";
import Trackpage from "./Components/Trackpage.jsx";
import Trackorderpage from "./Components/Trackorderpage.jsx";
import "./App.css";
import Signup from "./Components/Signup.jsx";
import Login from "./Components/Login.jsx";
import Customerdash from "./Components/Customerdash.jsx";
import Newship from "./Components/Newship.jsx";
import Newship2 from "./Components/Newship2.jsx";
import Newship3 from "./Components/Newship3.jsx";
import Confirmship from "./Components/Confirmship.jsx";
import Profile from "./Components/Profile.jsx";
import Customerprofile from "./Components/Customerprofile.jsx";
import Adminprofile from "./Components/Adminprofile.jsx";
import Admindashboard from "./Components/Admindashboard.jsx";
import Adminnewship from "./Components/Adminnewship.jsx";
import Adminnewship2 from "./Components/Adminnewship2.jsx";
import Adminnewship3 from "./Components/Adminnewship3.jsx";
import Confirmadminship from "./Components/Confirmadminship.jsx";
import Driverprofile from "./Components/Driverprofile.jsx";
import Driverdash from "./Components/Driverdash.jsx";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Landingpage />
        <Routes>
          <Route path="trackpage" element={<Trackpage />} />
          <Route path="/trackorderpage" element={<Trackorderpage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup/login" element={<Login />} />
          <Route path="/dashboard" element={<Customerdash />} />
          <Route path="/newship" element={<Newship />} />
          <Route path="/newship/newship2" element={<Newship2 />} />
          <Route path="/newship/newship2/newship3" element={<Newship3 />} />
          <Route
            path="/newship/newship2/newship3/confirmship"
            element={<Confirmship />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/customerprofile" element={<Customerprofile />} />
          <Route path="/adminprofile" element={<Adminprofile />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="/adminnewship" element={<Adminnewship />} />
          <Route
            path="/adminnewship/adminnewship2"
            element={<Adminnewship2 />}
          />
          <Route
            path="/adminnewship/adminnewship2/adminnewship3"
            element={<Adminnewship3 />}
          />
          <Route
            path="/adminnewship/adminnewship2/adminnewship3/confirmadminship"
            element={<Confirmadminship />}
          />
          <Route path="/driverprofile" element={<Driverprofile />} />
          <Route path="/driverdash" element={<Driverdash />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
