import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../template/index";

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </Fragment>
  );
}
