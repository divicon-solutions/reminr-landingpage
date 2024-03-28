import React from "react";

export default function Footer({ space }) {
  return (
    <>
      <footer className="footer-section">
        <div
          className={`footer-top background-img-2 ${space ? "pt-150" : "pt-60"
            }`}
          style={{
            background:
              "url('assets/img/footer-bg.png') no-repeat center top / cover",
          }}
        >
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-12 col-lg-4 mb-4 mb-md-4 mb-sm-4 mb-lg-0">
                <div className="footer-nav-wrap text-white">
                  <img
                    src="assets/img/reminr-logo.png"
                    alt="footer logo"
                    width="120"
                    className="img-fluid mb-3"
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#fff",
                      padding: "5px",
                    }}
                  />
                  <p>
                    Your Remote Companion for INR monitoring and Smart Medication Reminders.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom border-gray-light mt-5 py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-7">
                  <div className="copyright-wrap small-text">
                    <p className="mb-0 text-white">
                      © RemINR, All rights reserved
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-5">
                  <div className="terms-policy-wrap text-lg-right text-md-right text-left">
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        <a className="small-text" href="/terms-conditions">
                          Terms and conditions
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="small-text" href="/privacy-policy">
                          Privacy Policy
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
