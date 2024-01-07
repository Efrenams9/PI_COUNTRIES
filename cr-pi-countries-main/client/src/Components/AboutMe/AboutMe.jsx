import  "./AboutMe.css";
import yo from "../../Images/Efren_presentacion.jpg";

const AboutMe = ()=>{
    return (
        <div className="styleAbout">
            <h1>ABOUT ME</h1>
            <p>Hello, my name is Efren Marín. I am 20 years old and I am a student with the goal of becoming a Full Stack programmer at Soy Henry. Currently, I am studying the bootcamp and, at the same time, learning German independently from my home country, Mexico.
            </p>
            <div className="horizontal">
              <img src={yo} alt="No se puede mostrar la imagen" className="yop"></img>
              <div className="vertical-container">
                <li className="styleAbout">
                  <h2>MY HOBBIES</h2>
                  <h3>Language Learning</h3>
                  <h3>Reading</h3>
                  <h3>Programming</h3>
                </li>
                
              </div>
                
            </div>
            <p>I consider myself an inherently curious person, with an insatiable thirst for knowledge. In addition to my focus on technology and programming, I also have a deep interest in areas such as politics, philosophy, psychology, and physics.</p>
            <h2>TECHNOLOGIES I WORK WITH</h2>
            <div>
              <img src="./imagenesAbout/react_icono.png" alt="error"></img>
              <img src="./imagenesAbout/" alt="error"></img>
              <img src="./imagenesAbout/" alt="error"></img>
              {/* <img src="../../imagenes/" alt="error"></img>
              <img src="../../imagenes/" alt="error"></img>
              <img src="../../imagenes/" alt="error"></img> */}
            </div>
        </div>
    )
};

export default AboutMe;