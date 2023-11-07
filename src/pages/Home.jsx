import React from "react";
import "./Home.css";
import Lottie from "lottie-react";
import dev from "../animations/dev.json";

function Home(props) {
  return (
    <div className="home">
      <div className="intro">
        <h4>Hi, My Name is</h4>
        <h1>Vipin Kumar</h1>
        <h2> I code to build websites, mobile apps,</h2>
        <h2> Rest APIs.</h2>
        <button class="glowing-button">Download Resume</button>
      </div>
      <div>
        <Lottie animationData={dev} className="dev-animation" loop={true} />
      </div>
    </div>
  );
}

export default Home;
