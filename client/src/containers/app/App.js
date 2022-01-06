import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../template/index";
import ErrorPage from "../views/ErrorPage";

export default function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Fragment>
  );
}
