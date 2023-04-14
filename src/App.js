// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navigate,
  Routes,
  Route,
} from "react-router-dom"
import Hero from "./components/Hero";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
function App() {
  const user = localStorage.getItem("token");
console.log(user)
  return (
    <div className="App">
      <Routes>
      {user && <Route path="/" exact element={<Hero/>} />}
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route  path="/signup" exact element={<SignUp/>}/>
      <Route  path="/login" exact element={<Login/>}/>
      <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
     {/* <SignUp/> */}
    </div>
  );
}

export default App;
