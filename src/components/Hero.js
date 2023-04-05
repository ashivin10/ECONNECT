import React from "react";
import "./hero.css";
const Hero = () => {
  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut,
              totam facere quis libero illum cupiditate accusamus culpa iusto
              aperiam mollitia explicabo, quod perferendis perspiciatis dolore!
              Doloribus numquam enim ullam.
            </p>
            <div className="hero-card-button">
              <button>DISCUSS</button>
              <button>NOTES</button>
            </div>
          </div>
          <div className="hero-card">
            <h5>Machine Learning</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut,
              totam facere quis libero illum cupiditate accusamus culpa iusto
              aperiam mollitia explicabo, quod perferendis perspiciatis dolore!
              Doloribus numquam enim ullam.
            </p>
            <div className="hero-card-button">
              <button>DISCUSS</button>
              <button>NOTES</button>
            </div>
          </div>
          <div className="hero-card">
            <h5>Machine Learning</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ut,
              totam facere quis libero illum cupiditate accusamus culpa iusto
              aperiam mollitia explicabo, quod perferendis perspiciatis dolore!
              Doloribus numquam enim ullam.
            </p>
            <div className="hero-card-button">
              <button>DISCUSS</button>
              <button>NOTES</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
