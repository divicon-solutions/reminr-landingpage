import React from "react";
import { GiMedicinePills } from "react-icons/gi";
import { BiInjection } from "react-icons/bi";

const Services = () => {
  return (
    <>
      <section id="services" className="promo-section ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>Our services</h2>
                <p className="lead">We want you to get the care you deserve.</p>
              </div>
            </div>
          </div>
          <div className="row equal">
            <div className="col-md-6 col-lg-6">
              <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                <div className="circle-icon mb-5">
                  <span className=" text-white">
                    <BiInjection />
                  </span>
                </div>
                <h5>Home INR Monitoring</h5>
                <p>
                  Our app offers convenient home INR monitoring, allowing you to
                  check your INR levels from the comfort of your home. Say
                  goodbye to frequent visits to the clinic and hello to
                  hassle-free monitoring
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="single-promo single-promo-hover single-promo-1 rounded text-center white-bg p-5 h-100">
                <div className="circle-icon mb-5">
                  <span className="text-white">
                    <GiMedicinePills />
                  </span>
                </div>
                <h5>Medications Management</h5>
                <p>
                  Managing your medications can be challenging, but with our
                  app, it's easier than ever. Keep track of your medications,
                  set reminders, and ensure you never miss a dose again. Our app
                  helps you stay on top of your health with ease, including
                  options for phone call reminders to ensure you never miss a
                  dose.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
