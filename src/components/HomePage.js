import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import navLogo from "../assets/midwestern-logo.png";
import talkie from "../assets/talkie.png";
import rabbit from "../assets/rabbit.png";
import shield from "../assets/shield.png";

const HomePage = (props) => {
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

  const obj1 = {
    names: [
      "Matt Johnson",
      "Matt Johnson",
      "Bart Paden",
      "Ryan Doss",
      "Jared Malcolm",
    ],
  };
  const obj2 = {
    names: [
      "Matt Johnson",
      "Bart Paden",
      "Bart Paden",
      "Jordan Heigle",
      "Jordan Heigle",
      "Tyler Viles",
    ],
  };
  //Create empty array
  let distinctNames = [];

  //Iterate over objects to pass in non-duplicate names into distinctNames array
  obj1.names.forEach((name) => {
    if (!distinctNames.includes(name)) {
      distinctNames.push(name);
    }
  });

  obj2.names.forEach((name) => {
    if (!distinctNames.includes(name)) {
      distinctNames.push(name);
    }
  });

  //Function that maps over array and creates ul
  const showPeople = () => {
    const nameList = document.querySelector(".name-list");
    if (nameList.innerHTML === "") {
      const ul = distinctNames
        .map((name) => {
          return `<ul><li>${name}</li></ul>`;
        })
        .join("");
      nameList.innerHTML = ul;
    } else {
      alert("The distinct list of names has already been displayed.");
    }
  };

  return (
    <Fragment>
      {/* NAVBAR */}
      <nav className="navbar">
        <img className="nav-logo" src={navLogo} alt="midwestern logo" />
        <div className="nav-links">
          <Link to="/contact" className="nav-link">
            contact
          </Link>
        </div>
      </nav>
      {/* CARD SECTION */}
      <section>
        <div className="card-container">
          <div className="card">
            <div className="img-container">
              <img src={talkie} alt="" />
            </div>
            {/* Heading Two content from db */}
            {h2.map((h2) => (
              <h2 key={h2.lorem_id}>{h2.lorem_heading_two}</h2>
            ))}
            {/* Paragraph content from db */}
            {p.map((p) => (
              <p key={p.lorem_id}>{p.lorem_paragraph}</p>
            ))}
            <button className="card-btn">Learn More</button>
          </div>
          <div className="card">
            <div className="img-container">
              <img src={rabbit} alt="" />
            </div>
            {/* <h2 className="card-title">Heading Two</h2> */}
            {h2.map((h2) => (
              <h2 key={h2.lorem_id}>{h2.lorem_heading_two}</h2>
            ))}
            {p.map((p) => (
              <p key={p.lorem_id}>{p.lorem_paragraph}</p>
            ))}
            <button className="card-btn">Learn More</button>
          </div>
          <div className="card">
            <div className="img-container">
              <img src={shield} alt="" />
            </div>
            {/* <h2 className="card-title">Heading Two</h2> */}
            {h2.map((h2) => (
              <h2 key={h2.lorem_id}>{h2.lorem_heading_two}</h2>
            ))}
            {p.map((p) => (
              <p key={p.lorem_id}>{p.lorem_paragraph}</p>
            ))}
            <button className="card-btn">Learn More</button>
          </div>
        </div>
      </section>
      {/* HEADING SECTION */}
      <section>
        <div className="names-container">
          {/* <h1>Heading One</h1> */}
          <h1>
            {h1.map((h1) => (
              <span key={h1.lorem_id}>{h1.lorem_heading_one}</span>
            ))}
          </h1>
          <p>
            Remove the duplicates in 2 Javascript objects (found in readme), add
            the results to an array and output the list of distinct names in an
            unordered list below this paragraph when{" "}
            <button id="listLink" onClick={showPeople}>
              this link
            </button>{" "}
            is clicked. If the operation has been completed already, notify the
            user that this has already been done.
          </p>
          <ul className="name-list"></ul>
        </div>
      </section>
    </Fragment>
  );
};

export default HomePage;
