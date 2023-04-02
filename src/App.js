import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
