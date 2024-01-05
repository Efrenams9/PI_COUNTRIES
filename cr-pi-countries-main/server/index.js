// const axios = require("axios");
// const server = require("./src/server");
// const { conn } = require('./src/db.js');
// const PORT = 3001;

// conn.sync({ force: true }).then(() => {
// server.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// })
// }).catch(error => console.error(error))

///////////////////////////////////////////////////////


////////////7
//!cuidado con esto, si no regresa

// // cr-pi-countries-main\server\index.js
// const axios = require("axios");
// const server = require("./src/server");
// const { conn, Country } = require('./src/db.js');
// const PORT = 3001;

// // Función para obtener los países de la API y guardarlos en la base de datos
// async function fetchAndSaveCountries() {
//   try {
//     // Realizar la petición a la API para obtener los países
//     const response = await axios.get('http://localhost:5000/countries');

//     // Obtener la lista de países desde la respuesta
//     const countries = response.data;

//     // Sincronizar los países con la base de datos
//     await conn.sync({ force: true });

//     // Crear o actualizar los registros de países en la base de datos
    
//     //**DATOS A INSERTAR */
//     // console.log('Datos a insertar:', countries);
    
//     await Country.bulkCreate(countries);

    
//     console.log('Countries successfully fetched and saved to the database');
//   } catch (error) {
    
//     console.error('Error en el index PRINCIPAL Error buscando y guardando paises:', error.message);
//   }
// }

// // Inicializar el servidor después de sincronizar la base de datos
// conn.sync({ force: true })
//   .then(() => fetchAndSaveCountries())
//   .then(() => {
//     server.listen(PORT, () => {
//       console.log(`Server listening on port ${PORT}`);
//     });
//   })
//   .catch(error => console.error(error));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// index.js
const server = require("./src/server");
const { conn } = require('./src/db.js');
const syncCountriesInDataBase = require('./src/syncBDD.js');
const PORT = 3001;

conn.sync({ force: true })
  .then(() => syncCountriesInDataBase())
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(error => console.error(error));
