import React, { Fragment, useState } from "react";

const ContactForm = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { first_name, last_name, title, email, message };
      const response = await fetch("http://localhost:5000/contactForms", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("title").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  };

  return (
    <Fragment>
      <form id="form" onSubmit={onSubmitForm}>
        <div className="form-row">
          <div className="input-box">
            <input
              id="first"
              type="text"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              id="last"
              type="text"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-box">
            <input
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="textarea">
          <div className="input-box">
            <textarea
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="form-row">
          <div className="input-box">
            <button className="form-btn">Submit</button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default ContactForm;
