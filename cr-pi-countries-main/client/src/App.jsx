//*dependencias

import { Route, Routes } from "react-router-dom";

//*importaciones
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
