import React from "react";
import { Link } from "react-router-dom";

const HeroOne = () => {
  return (
    <>
      <section
        className="hero-section pt-100"
        style={{
          background:
            "url('assets/img/background.jpg')no-repeat center center / cover",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          opacity: "0.9",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-between py-5">
            <div className="col-md-7 col-lg-6">
              <div className="hero-content-left text-white">
                <h1 className="text-white">
                  <span>RemINR</span>
                </h1>
                <p className="lead">
                  Your Remote Companion for INR monitoring and Smart Medication
                  Reminders.
                </p>
              </div>
              {/* <div className="d-flex">
                <Link to="/">
                  <img
                    src="assets/img/android-link.png"
                    alt="google-play"
                    style={{ height: "60px" }}
                  />
                </Link>
                <Link to="/">
                  <img
                    src="assets/img/ios-link.png"
                    alt="app-store"
                    style={{ height: "60px" }}
                  />
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroOne;
