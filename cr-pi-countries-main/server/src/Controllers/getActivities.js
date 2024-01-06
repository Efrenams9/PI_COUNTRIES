// const getActivities = async (req,res) => {
//     try {
        
//     } catch (error) {
        
//     }
// };

// module.exports = getActivities;

                        //resolver
// const getActivities = async ()=>{
//                                 //rechazo

//     try {
//     const activities = await Activity.findAll();
//     res.json(activities);
//   } catch (error) {
//     console.error('Error getting activities:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };

// // console.log(getActivities());
// module.exports = getActivities;

////////////////////////////////////////////////////////////////////////////////////

const {Country, Activity} = require('../db');
const getActivities = async (req, res) => {
  const countryId = req.params.idPais;

  try {
    const country = await Country.findOne({
      where: {
        id: countryId,
      },
      include: {model: Activity},
    });

    if (!country) {
      res.status(404).json({ error: 'Country not found' });
      return;
    }

    const activities = country.Activities;

    res.json(activities);
  } catch (error) {
    console.error('Error getting activities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = getActivities;
