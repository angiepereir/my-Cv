import { useState } from "react";
import "./App.css";
import { CV } from "./cv.js/Cv";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Education from "./components/educacion/Educacion ";
import Experience from "./components/experiencie/Experience";
import More from "./components/more/More";

const { hero, education, experience, languages, habilities, } = CV;

function App() {

  const [showEducation, setEducation] = useState(true);
  return(
    <div class="app-stilos">
      <Hero hero={hero} />
        <About hero={hero.aboutMe} />
        {/* <Education education={education} />
        <Experience experience={experience} /> */}
	    


<div className="botones">
   <button onClick={()=>setEducation(true)}>Educacion</button>
   <button onClick={()=>setEducation(false)}>Experiencia</button>

</div>

  



   
      {showEducation ?(
        <Education education={education}/>
      ) : (
        <Experience experience={experience}/>
      )
      
      }
     <More
        languages={languages}
        habilities={habilities}/>

    </div>
  )




  
}

export default App;
