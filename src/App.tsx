import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BillingPage from "./pages/BillingPage";
import { TestComponent } from "./components/Test/Test";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/billing" element={<BillingPage />} />
        <Route path="/test" element={<TestComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
