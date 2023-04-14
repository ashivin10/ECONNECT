import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import axios from "./components/axios";
import Course from "./components/Courses";
import Pusher from "pusher-js";
function App() {
  const [messages, setmessages] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/messages/sync").then((response) => {
      setmessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("95fa3a1a032bda77a987", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (newmessages) {
      setmessages([...messages, newmessages]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Hero />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/learn" element={<Course />} />
      </Routes>
      <div className="app_body">
        <Routes>
          <Route
            path="group"
            element={
              <>
                <Sidebar />
                <Chat messages={messages} />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
