import React from "react";
import {
  Home,
  Buy,
  Sell,
  MyAuctions,
  AboutUs,
  SignIn,
  SignUp,
  ListingDetails,
} from "./pages";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="h-14 bg-primary" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/MyAuctions" element={<MyAuctions />} />
        <Route path="/AboutUS" element={<AboutUs />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ListingDetails" element={<ListingDetails />} />
      </Routes>
    </div>
  );
};

export default App;
