import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Chatpage from './components/Chatpage'


import Course from "./components/Courses";
function App() {
  
  const user = localStorage.getItem("token");
	console.log(user)
  return (
    <div className="App">
      {/* <Login /> */}
      <Routes>
        
        {user && <Route path="/" exact element={<Hero />} />}
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/learn" element={<Course />} />
      </Routes>
      <div className="app_body">
        <Routes>
          <Route
            path="/group"
             exact element={
             <Chatpage/>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
