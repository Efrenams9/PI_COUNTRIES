// const getActivities = async (req,res) => {
//     try {
        
//     } catch (error) {
        
//     }
// };

// module.exports = getActivities;

                        //resolver
const getActivities = async ()=>{
                                //rechazo

    try {
    const activities = await Activity.findAll();
    res.json(activities);
  } catch (error) {
    console.error('Error getting activities:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// console.log(getActivities());
module.exports = getActivities;