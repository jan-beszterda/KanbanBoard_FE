import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import startImage from "../assets/Slice 1-2.png";
import logo from "../assets/colorfilter.svg";
import LoginForm from "./LoginForm";
import RegisForm from "../form_components/RegisForm";

function LandingPage() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="bg-white flex flex-col justify-center">
          <Routes>
            <Route path="/" element={<LoginForm logo={logo} />} />
            <Route path="/register" element={<RegisForm logo={logo} />} />
          </Routes>
        </div>
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={startImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
