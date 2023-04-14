import React from "react";
import "./hero.css";
import Pusher from "pusher-js";
import Chat from "./Chat.js";
import Sidebar from "./Sidebar.js";
import axios from "./axios.js";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Hero = () => {
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
      <Navbar />

      <div className="hero">
        <div className="hero-container">
          <div className="hero-taglines">
            <h2>Welcome to E - Connect</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              doloremque tenetur earum temporibus rerum sed voluptatem
              reprehenderit velit similique perferendis?
            </p>
          </div>
          <div className="search-tab">
            <input type="text" placeholder="What's your interest?" />
            <img
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt="search"
            />
          </div>
        </div>
        <div className="hero-section-2">
          <h2 className="hero-recommended-text">Recommended courses</h2>
          <div className="hero-courses">
            <div className="hero-card">
              <h5>Machine Learning</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                ut, totam facere quis libero illum cupiditate accusamus culpa
                iusto aperiam mollitia explicabo, quod perferendis perspiciatis
                dolore! Doloribus numquam enim ullam.
              </p>
              <div className="hero-card-button">
                <button>DISCUSS</button>
                <button>NOTES</button>
              </div>
            </div>
            <div className="hero-card">
              <h5>Machine Learning</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                ut, totam facere quis libero illum cupiditate accusamus culpa
                iusto aperiam mollitia explicabo, quod perferendis perspiciatis
                dolore! Doloribus numquam enim ullam.
              </p>
              <div className="hero-card-button">
                <button>DISCUSS</button>
                <button>NOTES</button>
              </div>
            </div>
            <div className="hero-card">
              <h5>Machine Learning</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                ut, totam facere quis libero illum cupiditate accusamus culpa
                iusto aperiam mollitia explicabo, quod perferendis perspiciatis
                dolore! Doloribus numquam enim ullam.
              </p>
              <div className="hero-card-button">
                <button>DISCUSS</button>
                <button>NOTES</button>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default Hero;
