import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import PriceCalculator from "./components/PriceCalculator";
import TipCalculator from "./components/TipCalculator";
import EmiCalculator from "./components/EmiCalculator";
import BookViewer from "./components/BookViewer";
import DocContainer from "./components/DocEditor/DocContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />}>
            <Route index element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
        </Route>
        <Route path="/book" element={<BookViewer />} />
        <Route path="/doc" element={<DocContainer />} />
        <Route path="/price-calculator" element={<PriceCalculator />} />
        <Route path="/tip-calculator" element={<TipCalculator />} />
        <Route path="/emi-calculator" element={<EmiCalculator />} />
      </Routes>
    </div>
  );
}

export default App;
