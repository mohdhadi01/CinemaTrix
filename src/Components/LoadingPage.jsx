import React from "react";
import bg from "../Assets/footer-bg.jpg";
import "./LoadingPage.css";

function LoadingPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="loading-page">
        <div className="container">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
        </div>

        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                result="blur"
                stdDeviation="10"
                in="SourceGraphic"
              ></feGaussianBlur>
              <feColorMatrix
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                mode="matrix"
                in="blur"
              ></feColorMatrix>
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default LoadingPage;
