import { createRoot } from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import { BrowserRouter, Routes, Route } from "react-router";
import RestaurantInfo from "./RestaurantInfo";
import { lazy } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const app = document.getElementById("app");
const root = createRoot(app);

const Help = lazy(() => import("./Help"));

root.render(
  <Provider store={appStore}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Body />}></Route>
          <Route path="/help" element={<Help />}></Route>
          <Route path="/restaurant/:resId" element={<RestaurantInfo />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
