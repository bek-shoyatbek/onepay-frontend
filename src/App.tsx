import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BillingPage from "./pages/BillingPage";
import { Payment } from "./components/Payment/Payment";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/pay" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default App;
