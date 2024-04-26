import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/f64e8d485894f9df206830063adbc400d85de711.jpg";
import Menu from "./Menu";

const Header = () => {
  return (
    <div>
      <header className="header">
        <section>
          <div className="banner">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist
            </p>
            <Link to="/booking">
              <button aria-label="On Click">Reserve A Table</button>
            </Link>
          </div>
          <div className="banner-img">
            <img src={banner} alt="banner" />
          </div>
        </section>
      </header>
      <Menu />
    </div>
  );
};

export default Header;
