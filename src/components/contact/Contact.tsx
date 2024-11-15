import React from "react";
import { SectionTitle } from "@/components";
import "../../styles/contact/contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <SectionTitle first="Contact" second="Us" />
            <p className="contact-description">
              We’d love to hear from you! Whether you have questions about our
              services, want to schedule a consultation, or need assistance, our
              team is here to help. Reach out to us today!
            </p>
          </div>
          <div className="contact-form-wrapper">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input-field"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input-field"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea-field"
              ></textarea>
            </div>
            <div className="submit-button-wrapper">
              <button className="submit-button">Submit</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
