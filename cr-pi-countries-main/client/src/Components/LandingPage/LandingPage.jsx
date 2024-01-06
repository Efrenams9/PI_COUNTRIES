//*dependencias

import './LandingPage.css';
import landPage2 from "../../Images/landPage2.jpg"

const LandingPage = ()=>{
    return(
        <div className='general'>
            <h2>WELCOME TO MY APP</h2>
            <h2>COUNTRIES</h2>
            <img src={landPage2}></img>
            <button>click here to enter</button>
        </div>
    )
};

export default LandingPage;