// const getCountriesByName = async (req,res)=>{
//     const nameQuery = req.query.name;
//   try {
//     const countries = await Country.findAll({
//       where: {
//         name: {
//           [Op.iLike]: `%${nameQuery}%`,  // Case-insensitive search
//         },
//       },
//     });
//     if (countries.length > 0) {
//       res.json(countries);
//     } else {
//       res.status(404).json({ error: 'No countries found with the given name' });
//     }
//   } catch (error) {
//     console.error('Error searching countries by name:', error);
//     res.status(500).json({ error: 'Internal server error BY NAME' });
//   }
// };

// module.exports = getCountriesByName;

/////////////////////////////////////////////////////////

const { Country } = require('../db'); // Asegúrate de que la ruta sea correcta
const { Op } = require('sequelize');

const getCountriesByName = async (req, res) => {
  console.log("consiguiendo por nombre");
  const nameQuery = req.query.name;
  try {
    const country = await Country.findOne({
      where: {
        name: {
          [Op.iLike]: `%${nameQuery}%`,  // Case-insensitive search
        },
      },
    });
    if (country) {
      res.json(country);
    } else {
      res.status(404).json({ error: 'No country found with the given name' });
    }
  } catch (error) {
    console.error('Error searching country by name:', error);
    res.status(500).json({ error: 'Internal server error BY NAME' });
  }
};

module.exports = getCountriesByName;
