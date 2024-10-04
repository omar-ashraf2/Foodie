import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SaladProvider } from "./contexts/SaladContext";
import SaladPageLayout from "./components/SaladPageLayout";

const App: React.FC = () => {
  return (
    <SaladProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SaladPageLayout />} />
        </Routes>
      </Router>
    </SaladProvider>
  );
};

export default App;
