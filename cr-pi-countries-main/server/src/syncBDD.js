// syncBDD.js
// const axios = require("axios");
// const { conn, Country } = require('./db');

// async function syncContriesInDataBase() {
//   try {
//     const response = await axios.get('http://localhost:5000/countries');
//     const countriesFromAPI = response.data;

//     const allowedProperties = ['common', 'official', 'population', "id"/* otras propiedades */];
    
//     const filteredCountries = countriesFromAPI.map(country => {
//       const filteredCountry = {};
//       allowedProperties.forEach(prop => {
//         id: country.id
//         if (country[prop] !== undefined) {
//           filteredCountry[prop] = country[prop];
//         }
//       });
//       return filteredCountry;
//     });

//     await conn.sync({ force: true });
//     await Country.bulkCreate(filteredCountries);

//     console.log('Countries successfully fetched and saved to the database');
//   } catch (error) {
//     console.error('Error fetching and saving countries:', error.message);
//   }
// }

// module.exports = syncContriesInDataBase;

///////////////////////////////////////////////////////////////////////////////////

// // syncBDD.js
// const axios = require("axios");
// const { conn, Country } = require('./db');

// async function syncContriesInDataBase()  {
//   try {
//     const response = await axios.get('http://localhost:5000/countries');
//     const countriesFromAPI = response.data;

//     const allowedProperties = ['common', 'official', 'population', /* otras propiedades */, "id"];
    
//     const filteredCountries = countriesFromAPI.map(country => {
//       const filteredCountry = {};
//       allowedProperties.forEach(prop => {
//         if (country[prop] !== undefined) {
//           filteredCountry[prop] = country[prop];
//         }
//       });

//       // Asignar el valor de 'id' fuera del bucle forEach
//       filteredCountry.id = country.id;

//       return filteredCountry;
//     });

//     await conn.sync({ force: true });
//     await Country.bulkCreate(filteredCountries);

//     console.log('Countries successfully fetched and saved to the database');
//   } catch (error) {
//     console.error('Error fetching and saving countries:', error.message);
//   }
// }

// module.exports = syncContriesInDataBase;

/////////////////////////////////////////////////////////////////////////////////////

// // syncBDD.js
// const axios = require("axios");
// const { conn, Country } = require('./db');

// async function syncContriesInDataBase() {
//   try {
//     const response = await axios.get('http://localhost:5000/countries');
//     const countriesFromAPI = response.data;

//     const allowedProperties = ['common', 'official', 'population' /* otras propiedades */, 'id'];
    
//     const filteredCountries = countriesFromAPI.map(country => {
//       const filteredCountry = {};
//       allowedProperties.forEach(prop => {
//         if (country[prop] !== undefined) {
//           filteredCountry[prop] = country[prop];
//         }
//       });

//       // Asignar el valor de 'id' directamente a filteredCountry
//       filteredCountry.id = country.id;

//       return filteredCountry;
//     });

//     await conn.sync({ force: true });
//     await Country.bulkCreate(filteredCountries);

//     console.log('Countries successfully fetched and saved to the database');
//   } catch (error) {
//     console.error('Error fetching and saving countries:', error.message);
//   }
// }

// module.exports = syncContriesInDataBase;

// ////////////////////////////////////////////////////////////////


// syncBDD.js
const axios = require("axios");
const { conn, Country, Activity } = require('./db');

async function syncContriesInDataBase() {
  try {
    const response = await axios.get('http://localhost:5000/countries');
    const countriesFromAPI = response.data;

    const allowedProperties = ['common', 'official', 'population' /* otras propiedades */, 'id'];
    
    const filteredCountries = countriesFromAPI.map(country => {
      const filteredCountry = {};
      allowedProperties.forEach(prop => {
        if (country[prop] !== undefined) {
          filteredCountry[prop] = country[prop];
        }
      });

      // Asignar el valor de una propiedad de tres letras como 'id'
      filteredCountry.id = country.cioc ? country.cioc : country.cca3;
      filteredCountry.name = country.name.common;
      filteredCountry.nameEspañol = country.translations ? country.translations.spa.official : 'No tiene nombre en español';
      filteredCountry.nameEnglish = country.name.official ? country.name.official: 'within Enlish Name';
      filteredCountry.bandera = country.flags.png;
      filteredCountry.continente = country.continents[0];
      filteredCountry.capital = country.capital ? country.capital[0] : 'No tiene capital';
      filteredCountry.subregion = country.subregion ? country.subregion : 'No tiene subregión';
      filteredCountry.area = country.area;
      filteredCountry.poblacion = country.population;
      filteredCountry.fronteras = country.borders ? country.borders : 'No tiene fronteras';


      // const filteredActivities = activitiesFromAPI.map(activity => {
      //   const filteredActivity = {};
      //   allowedProperties.forEach(prop => {
      //     if (activity[prop] !== undefined) {
      //       // Asegúrate de que el ID sea una cadena
      //       filteredActivity[prop] = prop === 'id' ? activity[prop].toString() : activity[prop];
      //     }
      //   });
      
      //   return filteredActivity;
      // });

      return filteredCountry;

      
    });

    await conn.sync({ force: true });
    await Country.bulkCreate(filteredCountries);

    console.log('Countries successfully fetched and saved to the database');
  } catch (error) {
    console.error('Error fetching and saving countries:', error.message);
  }
}

module.exports = syncContriesInDataBase;


