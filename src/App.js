import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./components/HomePage";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
