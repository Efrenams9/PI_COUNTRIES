// //*importacion de su modelo correspondiente: 
// const { Country } = require('../db');

// const getCountries = async (req,res)=>{
//     try {
//       console.log("OBTENIENDO PAISES CON EL CONTROLADOR");
//         const countries = await Country.findAll();
//         res.json(countries);
//       } catch (error) {
//         console.error('Error fetching countries:', error.message);
//         res.status(500).json({ error: 'Internal Server Error ERROR EN CONTROLLER getCountries' });
//     }
// };

// module.exports = getCountries;


// Importa el modelo Country
const { Country,Activity } = require('../db');

const getCountries = async (req, res) => {
  // try {
  //   // Obtén solo los campos deseados de la base de datos
  //   const countries = await Country.findAll({
  //     attributes: ['id', 'name', 'bandera', 'continente', 'capital', 'subregion', 'area', 'poblacion', 'fronteras'],
  //   });
  //   console.log("OBTENIENDO PAISES CON EL CONTROLADOR");
  //   res.json(countries);
  // } catch (error) {
  //   console.error('Error fetching countries:', error.message);
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }
  try {
    console.log("OBTENIENDO PAISES CON EL CONTROLADOR");
    const countries = await Country.findAll({ include: Activity });
    res.json(countries);
  } catch (error) {
    console.error('Error getting countries:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getCountries;
