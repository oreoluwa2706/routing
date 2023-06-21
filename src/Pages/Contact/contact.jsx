import { React, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import ContactHeader from "../../images/Dark Green White Clean & Simple Infographic Information Instagram Story (1).png";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vzqjdma",
        "template_pyp9lxr",
        form.current,
        "wzeiehEd0JUuCY4ZR"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="about_header">
        <div>
          <img src={ContactHeader} alt="" />
        </div>
        <div className="Overlay"></div>
      </div>
      {/**Contact Form */}
      <div className="contact_form container">
        <div className="row">
          <div className="col-sm-9">
            <form ref={form} onSubmit={sendEmail}>
              <h6>Contact us Now</h6>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Your Name"
                  name="from_name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  required
                  className="form-control"
                  placeholder="Your Email"
                  name="your_email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Number</label>
                <input
                  type="number"
                  required
                  className="form-control"
                  placeholder="Your Contact Number"
                  name="your_contact"
                />
              </div>
              <div className="form-group">
                <label htmlFor="">How can we help You</label>
                <textarea
                  rows="6"
                  className="form-control"
                  required
                  placeholder="How can we help You"
                  name="message"
                ></textarea>
                <br />
                <input className="btn" type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
