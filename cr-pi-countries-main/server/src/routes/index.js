const { Router } = require("express");
const { Country } = require("../db");  // Importa el modelo Country

//*importacion de controladores "controllers"


//controllers de countries
const getCountries = require("../Controllers/getCountries");
const getCountriesById=require("../Controllers/getCountriesById");
const getCountriesByName=require("../Controllers/getCountriesByName");

//controllers de activities
const postActivities = require("../Controllers/postActitivities");
const getActivities = require("../Controllers/getActivities"); 

const router = Router();

//countries
router.get("/countries/name", getCountriesByName);//uso de jquery
router.get("/countries/:idPais", getCountriesById);
router.get("/countries", getCountries);
//activities
router.post("/activities", postActivities);
router.get("/activities",getActivities)



// Nueva ruta para obtener todos los países
router.get("/total_countries", async (req, res) => {
    try {
      // Utiliza Sequelize para obtener todos los países desde tu base de datos
      const countries = await Country.findAll();
  
      // Devuelve la lista de países como JSON
      res.json(countries);
    } catch (error) {
      // Manejo de errores
      console.error("Error fetching countries:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }});

module.exports = router;
