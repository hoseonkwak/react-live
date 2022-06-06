import React from "react";
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import SignUp from "./SignUp";
import SignComplete from "./SignComplete";

export default function YuHyo() {
  const Home = () => {
    return <Link to="/asdf">go to /asdf</Link>;
  };

  const Page2 = () => {
    return <div>Hello i'm page2</div>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signin/:id" element={<SignComplete />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/page" element={<Page2 />} />
        <Route path="*" element={<Navigate to="/page" replace={false} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
