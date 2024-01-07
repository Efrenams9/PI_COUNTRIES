

//*denendencias
import {Link} from "react-router-dom";


//*archivos
import './SearchBar.css';
const SearchBar = ()=>{
    return (
        <div className="barraGeneral">
            <div>
                <Link to="/formulary"><button>Formulary</button></Link>
                <Link><button>Search Country</button></Link>
                <Link><input></input></Link>
                <Link to="about_me"><button>About me</button></Link>
                <Link><button>Log Out</button></Link>
                <Link><button>Contact</button></Link>
            </div>
        </div>
    );
};

export default SearchBar;