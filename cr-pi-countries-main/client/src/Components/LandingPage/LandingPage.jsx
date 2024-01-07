//*dependencias
import {Link} from "react-router-dom";

import './LandingPage.css';
import landPage3 from "../../Images/landPage3.jpg"

const LandingPage = ()=>{
    return(
        <div className='general'>
            <h2>WELCOME TO MY APP</h2>
            <h2>COUNTRIES</h2>
            <img src={landPage3}></img>
            <Link to="/home"><button>click here to enter</button></Link>
            
        </div>
    )
};

export default LandingPage;