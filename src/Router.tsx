import Event from "pages/Event";
import React from "react";
import { Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello World</h1>} />
      <Route path="/event" element={<Event />} />
    </Routes>
  );
}
