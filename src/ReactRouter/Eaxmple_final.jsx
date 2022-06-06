import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function YuHyo() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/hello/:id" element={<Hello />} />
      </Routes>
    </BrowserRouter>
  );
}
