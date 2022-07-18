import LandingPage from "./Pages/LandingPage";
import { Container } from "@mui/system";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
