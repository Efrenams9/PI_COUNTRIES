const {Activity,Country} = require("../db");


const postActivities = async (req,res)=>{

    const {ID,nombre,dificultad,duracion,temporada,paises} = req.body;

    try {
        //*crear activodad en la BDD
        const newActivity = await Activity.create(
            {
                ID,nombre,dificultad,duracion,temporada,paises 
            }
        ) 
        
        //*Asocia la actividad con los países proporcionados
    if (paises && paises.length > 0) {
        const countries = await Country.findAll({
          where: {
            id: paises,
          },
        });
        // Asocia la actividad con los países encontrados
      await newActivity.addCountries(countries);
      console.log(req.body)
    }   

    res.status(201).json(newActivity);
        
    } catch (error){
        console.error('Error creating activity:', error);
        res.status(500).json({ error: 'Internal server error POST ACTIVITIES' });
    }

};

module.exports = postActivities;