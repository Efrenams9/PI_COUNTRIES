const {DataTypes} =  require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define("Activity",{
        // ID*
        // Nombre*
        // Dificultad (número del 1 al 5) *
        // Duración (en horas)
        // Temporada (Verano, Otoño, Invierno o Primavera)*
        ID:{
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        nombre:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad:{
            type: DataTypes.FLOAT,
            allowNull: false, 
        },
        duracion:{
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        temporada:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    })

};