// //*importaciones: 
// const { Country, Activity } = require('../db');

// const getCountriesById = async(req,res)=>{
//     const idPais = req.params.id;
//     console.log("el id del pais es: ",idPais);
//   try {
//     const country = await Country.findByPk(idPais, { include: Activity });
//     if (country) {
//       res.json(country);
//     } else {
//       res.status(404).json({ error: 'Country not found' });
//     }
//   } catch (error) {
//     console.error('Error getting country details:', error);
//     res.status(500).json({ error: 'Internal server error EN BUSCAR PAIS POR ID' });
//   }
// };

// module.exports= getCountriesById;

/////////////////////////////////////////////////////////


const { Country, Activity } = require('../db');

const getCountryById = async (req, res) => {
  const idPais = req.params.idPais;

  try {
    const country = await Country.findOne({
      where: { id: idPais },
      include: Activity
    });

    if (country) {
      res.json(country);
    } else {
      res.status(404).json({ error: 'Country not found by ID' });
    }
  } catch (error) {
    console.error('Error getting country details:', error);
    res.status(500).json({ error: 'Internal server error EN BUSCAR PAIS POR ID' });
  }
};

module.exports = getCountryById;
