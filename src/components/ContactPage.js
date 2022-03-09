import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/midwestern-logo.png";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  // const h1 = document.querySelector('.heading-one');
  const [h1, setH1] = useState([]);
  const [h2, setH2] = useState([]);
  const [p, setP] = useState([]);
  const getHeadingOnes = async () => {
    try {
      const response = await fetch("http://localhost:5000/headingOne");
      const jsonData = await response.json();
      console.log(jsonData);

      setH1(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getHeadingOnes();
  }, []);

  const getHeadingTwos = async () => {
    try {
      const response = await fetch("http://localhost:5000/headingTwo");
      const jsonData = await response.json();
      console.log(jsonData);

      setH2(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getHeadingTwos();
  }, []);

  const getParagraphs = async () => {
    try {
      const response = await fetch("http://localhost:5000/paragraph");
      const jsonData = await response.json();
      console.log(jsonData);

      setP(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getParagraphs();
  }, []);

  return (
    <Fragment>
      <div className="sections-container">
        {/* SECTION-BLACK */}
        <section className="section-black">
          <div className="section-black-logo">
            <img src={navLogo} alt="midwestern logo" />
          </div>
          <div className="heading-one">
            {/* <h1><span>Heading</span> One</h1> */}
            <h1>
              {h1.map((h1) => (
                <span key={h1.lorem_id}>{h1.lorem_heading_one}</span>
              ))}
            </h1>
            {/* <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
              perspiciatis saepe, maiores totam animi accusantium. Hic inventore
              doloremque ipsam sit!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda laudantium voluptas molestias atque architecto at?
            </p> */}
            {p.map((p) => (
              <p key={p.lorem_id}>{p.lorem_paragraph}</p>
            ))}
            {p.map((p) => (
              <p key={p.lorem_id}>{p.lorem_paragraph}</p>
            ))}
          </div>
        </section>
        {/* SECTION-WHITE */}
        <section className="section-white">
          <div className="form-links">
            <Link to="/" className="form-link">
              home
            </Link>
          </div>

          <div className="form-container">
            {/* <h2>Heading Two</h2> */}
            {h2.map((h2) => (
              <h2 key={h2.lorem_id}>{h2.lorem_heading_two}</h2>
            ))}
            <ContactForm />
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default ContactPage;
