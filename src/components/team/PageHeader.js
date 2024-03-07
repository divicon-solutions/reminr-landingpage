import React from "react";

export default function PageHeader({ PageTitle, HeaderTitle, Parent }) {
  return (
    <>
      <section
        className="hero-section ptb-100"
        style={{
          background:
            " url('assets/img/background.jpg')no-repeat center center / cover",
          opacity: "0.9",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-9 col-lg-7">
              <div className="page-header-content text-white text-center pt-sm-5 pt-md-5 pt-lg-0">
                <h1 className="text-white mb-0">{HeaderTitle}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
