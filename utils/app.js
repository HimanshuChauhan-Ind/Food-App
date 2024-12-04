import react from "react";
import { createRoot } from "react-dom/client";
import Body from "./Body";
import { BrowserRouter, Routes, Route } from "react-router";
import Help from "./Help";
const app = document.getElementById("app");
const root = createRoot(app);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body />}></Route>
      <Route path="/help" element={<Help />}></Route>
    </Routes>
  </BrowserRouter>
);
