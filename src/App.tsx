import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Payment } from "./pages/payment/Payment";
import { NotFound } from "./pages/not-found/NotFound";
import { Home } from "./pages/home/Home";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
