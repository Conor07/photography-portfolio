import React from "react";

import PageTitle from "../components/PageTitle";
import FormItem from "../components/FormItem";

const Contact = () => {
  return (
    <div className="page-container">
      <div id="contact-me-container">
        <PageTitle text="contact me" />

        <div className="page-subcontainer" id="contact-me-form-container">
          <div id="contact-me-warning-title" className="contact-me-warning">
            WARNING:
          </div>
          <div id="contact-me-warning-text" className="contact-me-warning">
            Please do not enter any personal/private information into the form
            below as this is just a test website.
          </div>

          <form id="contact-me-form">
            <div className="form-item-container">
              <FormItem
                htmlFor="fullName"
                labelName="Full Name *"
                id="fullName"
                name="fullName"
                type="text"
              />
            </div>

            <div className="form-item-container">
              <FormItem
                htmlFor="email"
                labelName="Email *"
                id="email"
                name="email"
                type="email"
              />
            </div>

            <div className="form-item-container">
              <FormItem
                htmlFor="subject"
                labelName="Subject"
                id="subject"
                name="subject"
                type="text"
              />
            </div>

            <div className="form-item-container">
              <FormItem
                htmlFor="message"
                labelName="Message *"
                id="message"
                name="fullName"
                type="text"
              />
            </div>
          </form>

          <p id="contact-me-form-details">(* Required Field)</p>

          <button id="contact-me-send-btn" className="btn">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
