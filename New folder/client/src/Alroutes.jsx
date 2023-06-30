import React from "react";
import { Routes, Route } from "react-router-dom";
// import Auth from "./pages/Auth/Auth";
import Auth from "../src/components/Auth/Auth"



const Alroutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Auth />} />
    </Routes>
  );
};

export default Alroutes;
