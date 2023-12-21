const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    

//     ID (Código de tres letras). *
// Nombre. *
// Imagen de la bandera. *
// Continente. *
// Capital. *
// Subregión.
// Área.
// Población. *
// Fronteras. *
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bandera:{
      type: DataTypes.TEXT,//puede que la url mas larga de 250 caracteres
      allowNull: false,
    },
    continente:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    Capital:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    Subregion:{
      type: DataTypes.STRING,
      allowNull:true,//puee ser nulos
    },
    area:{
      type: DataTypes.DOUBLE,
      allowNull:true,//se puede poner este valor en nulo
    },
    poblacion:{
      type: DataTypes.DOUBLE,//poblacion en decimales?
      allowNull:false,
    },
    fronteras:{
      type: DataTypes.STRING,
      allowNull:false,
    }
  });
};