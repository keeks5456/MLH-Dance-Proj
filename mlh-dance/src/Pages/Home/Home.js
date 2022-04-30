import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-title-container">
        <h1 id="h1-title">Like No-One's Watching</h1>
      </div>
      <div className="dance-image-container">
        <img
          className="dance-image"
          src="https://d1hjkbq40fs2x4.cloudfront.net/2018-10-22/files/dance-photography-hero-image_1801-t.jpg "
          alt="two people dancing"
        ></img>
      </div>
      <div className="button-container">
        <div className="home-button" onClick={() => navigate("/options")}>
        Explore Different Styles Here <div class="arrow-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
