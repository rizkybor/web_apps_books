import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Books from "../views/Books";
import DetailAuthors from "../views/DetailAuthors";

export default function index() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/:id" element={<DetailAuthors />} />
      </Routes>
    </Fragment>
  );
}
