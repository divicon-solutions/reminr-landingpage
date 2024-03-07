import React from "react";

export default function TermsAndConditions() {
  return (
    <>
      <section id="terms-conditions" className="video-promo ptb-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-12">
              <div className="download-content">
                <h2>Terms and Conditions</h2>
                <p>
                  By accessing and using the RemINR app, you agree to comply
                  with and be bound by the following terms and conditions of
                  use. If you do not agree to these terms, please do not use the
                  app.
                </p>
                <h4>Use of the App</h4>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>You must be at least 18 years old to use the app.</li>
                  <li>
                    You agree to provide accurate and complete information when
                    using the app.
                  </li>
                  <li>
                    You agree not to use the app for any illegal or unauthorized
                    purpose.
                  </li>
                </ul>
                <h4>Privacy</h4>
                <ol style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>
                    Your use of the app is also governed by our Privacy Policy,
                    which can be found here.
                  </li>
                  <li>
                    By using the app, you consent to the collection and use of
                    your information as outlined in the Privacy Policy.
                  </li>
                </ol>
                <h4>Intellectual Property</h4>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>
                    All content and materials available in the app, including
                    but not limited to text, graphics, logos, images, and
                    software, are the property of RemINR or its licensors and
                    are protected by copyright and other intellectual property
                    laws.
                  </li>
                  <li>
                    You may not reproduce, modify, distribute, or republish any
                    content from the app without the express consent of RemINR.
                  </li>
                </ul>
                <h4>Disclaimer of Warranties</h4>
                <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                  <li>
                    The app is provided "as is" and "as available" without any
                    warranties of any kind, either express or implied.
                  </li>
                  <li>
                    RemINR does not warrant that the app will be error-free or
                    uninterrupted, or that any defects will be corrected.
                  </li>
                </ul>
                <h4>Limitation of Liability</h4>
                <ul>
                  <li>
                    RemINR shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages, including but
                    not limited to lost profits, arising out of or in connection
                    with your use of the app.
                  </li>
                </ul>
                <h4>Changes to Terms</h4>
                <ul>
                  <li>
                    RemINR reserves the right to modify or revise these terms at
                    any time. Your continued use of the app following the
                    posting of any changes constitutes acceptance of those
                    changes.
                  </li>
                </ul>
                <h4> Contact Us</h4>
                <p>
                  {" "}
                  If you have any questions about these terms and conditions,
                  please contact us at here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
