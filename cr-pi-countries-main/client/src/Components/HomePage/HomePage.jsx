//*dependencias
// import { useState } from "react";

//*importaciones
import './HomePage.css';
import SearchBar from '../SearchBar/SearchBar.jsx';

const HomePage = () => {

    // const [count, setCount] = useState(0);
  return (
    <div className="homeGeneral">
      {/* <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button> */}
      <SearchBar/>
    </div>
  );
};

export default HomePage;
