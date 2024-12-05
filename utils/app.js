import { createRoot } from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { BrowserRouter, Routes, Route } from "react-router";
import Help from "./Help";
import RestaurantInfo from "./RestaurantInfo";

const app = document.getElementById("app");
const root = createRoot(app);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Body />}></Route>
        <Route path="/help" element={<Help />}></Route>
        <Route path="/restaurant/:resId" element={<RestaurantInfo />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
