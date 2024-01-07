//*dependencias

import { Route, Routes, useLocation } from "react-router-dom";

//*importaciones
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import Formulary from "./Components/Formulary/Formulary.jsx";
import AboutMe from "./Components/AboutMe/AboutMe.jsx";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
function App() {

  //*para manejo de rutas:

  // const location = useNavigate();//?recordar bien como usarla
  // const navigate = useLocation();//?recordar bien como usarla

 const{pathname}=useLocation();
  
  return (

    <div className="App">

      {/*CREACION DE LAS DIFERENTES RUTAS DENTRO DE LA APP*/}
      {pathname !== "/" && <SearchBar/>} {/*la barra será visible siempre a excepcion de la landing page*/}
        <Routes>
          <Route path="/" element={<LandingPage />} />{/*ruta de landing page*/}
          <Route path="/home" element={<HomePage />} />
          <Route path="/formulary" element={<Formulary/>}/>{/*POST activity*/}
          <Route path="/about_me" element={<AboutMe/>}/>{/*checar posibilidad de enlazar a link externo*/}
        </Routes>
    </div>
  );
}

export default App;
