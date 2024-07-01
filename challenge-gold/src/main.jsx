import React from "react";
import ReactDOM from "react-dom/client";
import LandingPage from "./landing-page";
import "bootstrap/dist/css/bootstrap.min.css";
import DetailNew from "./Detail-New";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DummyCariMobil from "./Dummy-CariMobil";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="search" element={<DummyCariMobil />} />
      <Route path="detail/:no" element={<DetailNew />} />
    </Routes>
  </BrowserRouter>
);
