//*dependencias

import { Route, Routes } from "react-router-dom";

//*importaciones
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import Formulary from "./Components/Formulary/Formulary.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="formulary" element={Formulary}/>
        <Route path="/about_me" element={AboutMe}/>
        
      </Routes>
    </div>
  );
}

export default App;
