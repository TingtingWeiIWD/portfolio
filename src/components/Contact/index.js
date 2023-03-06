import "./style.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Blob from "../../elements/Blob";
import Divider from "../../elements/Divider";

export default function Contact() {
  const form = useRef();
  const [alertVisible, setAlertVisible] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("aa");
    setAlertVisible(true);
    emailjs
      .sendForm(
        "service_lnklt1j",
        "template_28bjm8q",
        form.current,
        "JY__oOxBpIzgf0ztE"
      )
      .then(
        (result) => {
          console.log(result.text);
          setTimeout(setAlertVisible(false), 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact" onSubmit={sendEmail}>
      <form ref={form}>
        <Divider text="Contact Me" />

        <div className="inputArea">
          <div className="inputName">
            <label id="contactBlobParent">
              Hi I'm *
              <Blob />{" "}
            </label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="inputEmail">
            <label>Email *</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email for Reply"
              required
            />
          </div>
        </div>
        <div className="inputSubject">
          <label>Contacting with me Regarding to *</label>
          <input
            type="text"
            name="user_subject"
            placeholder="Subject"
            required
          />
        </div>

        <div className="inputMessage">
          <label>Message</label>
          <textarea name="message" placeholder="Tell About Something..." />
        </div>

        <div className="borderBtn">
          <input type="submit" value="Submit  " />
          {alertVisible && (
            <span className="alert">
              <AiOutlineCheckCircle /> Message Sent!
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
