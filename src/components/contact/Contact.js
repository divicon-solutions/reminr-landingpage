import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact({ bgColor }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState("");

  const checkValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const onChange = (value) => {
    if (value) setCaptchaValue(value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      alert("Please verify captcha");
      return;
    }

    if (!name) {
      alert("Please enter name");
      return;
    }

    if (checkValidEmail(email) === false) {
      alert("Please enter valid email");
      return;
    }

    const formData = {
      firstName: name,
      lastName: name,
      phoneNumber: phone,
      email: email,
      message: message,
      captchaValue: captchaValue,
      isResolved: false,
    };

    fetch("https://reminr-api-qeiqwj6yua-uc.a.run.app/api/v1/contact-request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((data) => {
        if (data.statusCode !== 200) {
          setName("");
          setPhone("");
          setEmail("");
          setMessage("");
          setCaptchaValue("");
          alert("Message sent successfully");
        } else {
          alert("Error sending message, please try again");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error sending message, please try again");
      });
  };

  return (
    <>
      <section
        id="contact"
        className={`contact-us ptb-100 ${bgColor ? "gray-light-bg" : ""}`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 pb-3 message-box d-none">
              <div className="alert alert-danger"></div>
            </div>
            <div className="col-md-5">
              <div className="section-heading">
                <h2>Contact With Us</h2>
                <p>
                  It's very easy to get in touch with us. Just use the contact
                  form.
                </p>
              </div>
              {/* <div className="footer-address">
                <h6>
                  <strong>Head Office</strong>
                </h6>
                <p>121 King St, Melbourne VIC 3000, Australia</p>
                <ul>
                  <li>
                    <span>Phone: +61 2 8376 6284</span>
                  </li>
                  <li>
                    <span>
                      Email :
                      <a href="mailto:hello@yourdomain.com">
                        hello@yourdomain.com
                      </a>
                    </span>
                  </li>
                </ul>
              </div> */}
            </div>
            <div className="col-md-7">
              <form
                id="contactForm"
                className="contact-us-form"
                onSubmit={submitForm}
              >
                <h5>Reach us quickly</h5>
                <div className="row">
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Enter name *"
                        onChange={(e) => setName(e.target.value)}
                        required="required"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        defaultValue=""
                        className="form-control"
                        id="phone"
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Your Phone *"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Enter email *"
                        onChange={(e) => setEmail(e.target.value)}
                        required="required"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        className="form-control"
                        rows="7"
                        cols="25"
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <ReCAPTCHA
                    sitekey="6LcwbqYpAAAAAI1DFw8-V4bnMZd8mU-7QsKunB8C"
                    onChange={onChange}
                    style={{ marginLeft: "15px" }}
                  />
                </div>
                <div className="row">
                  <div className="col-sm-12 mt-3">
                    <button
                      type="submit"
                      className="btn solid-btn"
                      id="btnContactUs"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <p className="form-message"></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
