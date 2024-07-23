import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Payment } from "./pages/Payment";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/pay" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;
