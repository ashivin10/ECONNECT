import React from "react";
import "./hero.css";
import Pusher from "pusher-js";
import Chat from "./Chat.js";
import Sidebar from "./Sidebar.js";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const Hero = () => {
  
  return (
    <div className="App">
      <div className="hero">
        <Navbar />
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
          <div id="scene">
            <div id="left-zone">
              <ul class="list">
                <li class="item">
                  <input
                    type="radio"
                    id="radio_The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)"
                    name="basic_carousel"
                    value="The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)"
                    checked="checked"
                  />

                  <label
                    class="label_strawberry"
                    for="radio_The garden strawberry (or simply strawberry /ˈstrɔːbᵊri/; Fragaria × ananassa) is a widely grown hybrid species of the genus Fragaria (collectively known as the strawberries)"
                  >
                    Machine Learning
                  </label>
                  <div class="content content_strawberry">
                    <span class="picto"></span>
                    <h1>Machine Learning</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fugiat odit molestiae ipsa itaque? Est dignissimos modi
                      hic obcaecati distinctio assumenda tenetur, a perferendis
                      repellendus ducimus optio qui impedit maiores. Aliquam.
                    </p>
                    <div class="button">
                      <button>JOIN</button>
                      <button>MORE..</button>
                    </div>
                  </div>
                </li>
                <li class="item">
                  <input
                    type="radio"
                    id="radio_A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."
                    name="basic_carousel"
                    value="A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."
                  />
                  <label
                    class="label_banana"
                    for="radio_A banana is an edible fruit, botanically a berry, produced by several kinds of large herbaceous flowering plants in the genus Musa."
                  >
                    Web Development
                  </label>
                  <div class="content content_banana">
                    <span class="picto"></span>
                    <h1> Web Development</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fugiat odit molestiae ipsa itaque? Est dignissimos modi
                      hic obcaecati distinctio assumenda tenetur, a perferendis
                      repellendus ducimus optio qui impedit maiores. Aliquam.
                    </p>
                    <div class="button">
                      <button>JOIN</button>
                      <button>MORE..</button>
                    </div>
                  </div>
                </li>
                <li class="item">
                  <input
                    type="radio"
                    id="radio_The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."
                    name="basic_carousel"
                    value="The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."
                  />
                  <label
                    class="label_apple"
                    for="radio_The apple tree (Malus domestica) is a deciduous tree in the rose family best known for its sweet, pomaceous fruit, the apple. It is cultivated worldwide as a fruit tree, and is the most widely grown species in the genus Malus."
                  >
                    Cyber Security
                  </label>
                  <div class="content content_apple">
                    <span class="picto"></span>
                    <h1>Cyber Security</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fugiat odit molestiae ipsa itaque? Est dignissimos modi
                      hic obcaecati distinctio assumenda tenetur, a perferendis
                      repellendus ducimus optio qui impedit maiores. Aliquam.
                    </p>
                    <div class="button">
                      <button>JOIN</button>
                      <button>MORE..</button>
                    </div>
                  </div>
                </li>
                <li class="item">
                  <input
                    type="radio"
                    id="radio_The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
                    name="basic_carousel"
                    value="The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
                  />
                  <label
                    class="label_orange"
                    for="radio_The orange (specifically, the sweet orange) is the fruit of the citrus species Citrus × sinensis in the family Rutaceae."
                  >
                    Blockchain and Security
                  </label>
                  <div class="content content_orange">
                    <span class="picto"></span>
                    <h1>Blockchain and Security</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Fugiat odit molestiae ipsa itaque? Est dignissimos modi
                      hic obcaecati distinctio assumenda tenetur, a perferendis
                      repellendus ducimus optio qui impedit maiores. Aliquam.
                    </p>
                    <div class="button">
                      <button>JOIN</button>
                      <button>MORE..</button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="middle-border"></div>
            <div id="right-zone"></div>
          </div>
        </div>
      </div>
      <div className="card-course">
        <h1>Live meeting</h1>
        <div className="live-meeting">
          <div className="card">
            <img
              src="https://contentstatic.techgig.com/photo/80158672/top-4-web-development-trends-in-2021.jpg?119426"
              alt="web"
            />
            <div className="card-info">
              <p>Instrctor : XXX , IIT Madras</p>
              <h1>WEB DEVELOPMENT</h1>
              <h4>Duration - 12 Weeks Course</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, aut ab. Fuga exercitationem dignissimos perferendis
                aspernatur natus laborum vel. Eius.
              </p>
              <div class="button">
                <button>JOIN</button>
                <button>SHARE</button>
              </div>
            </div>
          </div>

          {/* 2ND */}
          <div className="card">
            <img
              src="https://elearningindustry.com/wp-content/uploads/2021/10/Cybersecurity-Engagement-7-Tips-For-Employees.jpg"
              alt="web"
            />
            <div className="card-info">
              <p>Instrctor : XXX , IIT Madras</p>
              <h1>CYBER SECURITY</h1>
              <h4>Duration - 12 Weeks Course</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, aut ab. Fuga exercitationem dignissimos perferendis
                aspernatur natus laborum vel. Eius.
              </p>
              <div class="button">
                <button>JOIN</button>
                <button>SHARE</button>
              </div>
            </div>
          </div>

          {/*3rd*/}
          <div className="card">
            <img
              src="https://assets.toptal.io/images?url=https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1129714/regular_1708x683_cover-0323-MachineLearning_Dan_Newsletter-b21703f41d807514083e297955e1b46d.png"
              alt="web"
            />
            <div className="card-info">
              <p>Instrctor : XXX , IIT Madras</p>
              <h1>MACHINE LEARNING</h1>
              <h4>Duration - 8 Weeks Course</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, aut ab. Fuga exercitationem dignissimos perferendis
                aspernatur natus laborum vel. Eius.
              </p>
              <div class="button">
                <button>JOIN</button>
                <button>SHARE</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://contentstatic.techgig.com/photo/80158672/top-4-web-development-trends-in-2021.jpg?119426"
              alt="web"
            />
            <div className="card-info">
              <p>Instrctor : XXX , IIT Madras</p>
              <h1>WEB DEVELOPMENT</h1>
              <h4>Duration - 12 Weeks Course</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, aut ab. Fuga exercitationem dignissimos perferendis
                aspernatur natus laborum vel. Eius.
              </p>
              <div class="button">
                <button>JOIN</button>
                <button>SHARE</button>
              </div>
            </div>
          </div>
          <div className="card">
            <img
              src="https://contentstatic.techgig.com/photo/80158672/top-4-web-development-trends-in-2021.jpg?119426"
              alt="web"
            />
            <div className="card-info">
              <p>Instrctor : XXX , IIT Madras</p>
              <h1>WEB DEVELOPMENT</h1>
              <h4>Duration - 12 Weeks Course</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, aut ab. Fuga exercitationem dignissimos perferendis
                aspernatur natus laborum vel. Eius.
              </p>
              <div class="button">
                <button>JOIN</button>
                <button>SHARE</button>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src="https://contentstatic.techgig.com/photo/80158672/top-4-web-development-trends-in-2021.jpg?119426"
              alt="web"
            />
            <div className="card-info">
              <p>Instrctor : XXX , IIT Madras</p>
              <h1>WEB DEVELOPMENT</h1>
              <h4>Duration - 12 Weeks Course</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, aut ab. Fuga exercitationem dignissimos perferendis
                aspernatur natus laborum vel. Eius.
              </p>
              <div class="button">
                <button>JOIN</button>
                <button>SHARE</button>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer">
            <p>Copyrights reserved by BROGRAMMERS</p>
          </div>
        </footer>
      </div>
      
    </div>
  );
};

export default Hero;
