import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = ({ darkBg, classOption }) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const stickyheader = document.querySelector(".header");
    setHeaderTop(stickyheader.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
    <>
      <header className={`header ${classOption}`}>
        <nav
          className={`navbar navbar-expand-lg fixed-top custom-nav white-bg affix`}
        >
          <div className="container">
            <Link to="/" className="navbar-brand">
              <img
                src="assets/img/reminr-logo.png"
                width="120"
                alt="logo"
                className="img-fluid"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="ti-menu"></span>
            </button>
            <div
              className="collapse navbar-collapse main-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to="/#services">
                    Services
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link" smooth to="/#contact">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
