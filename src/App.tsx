import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import SaladProvider from "./contexts/SaladProvider";
import SaladPageLayout from "./pages/SaladPageLayout";

const App: React.FC = () => (
  <SaladProvider>
    <Router>
      <Routes>
        <Route path="/" element={<SaladPageLayout />} />
      </Routes>
    </Router>
  </SaladProvider>
);

export default App;
