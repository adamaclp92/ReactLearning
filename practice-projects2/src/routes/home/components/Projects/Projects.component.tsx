import React from "react";
import { Link } from "react-router-dom";
import { Container, Image} from "semantic-ui-react";
import circleimage from "../../../../assets/circle-drawer.png";
import colorchooser from "../../../../assets/color-chooser.png";
import synonymapi from "../../../../assets/synonym-api.png"
import tenzies from "../../../../assets/tenzies.png"

import "./Projects.style.scss";
import LanguageModel from "../../models/languageModel";

const Navigation = (language: LanguageModel) => {
  return (
    <Container id="projects" className="projects-container">
      {language.code === "en" ? <h1>My Recently Projets</h1> : <h1>Projektjeim</h1>}
      <hr/>
      <div className="navigation-container">
        <div className="project">
            <Image className="image" src={circleimage} />
            <div className="project_description">
              {language.code === "en" ? <h5 className="title">CircleDrawer App</h5> : <h5 className="title">Kör rajzolós app</h5>}
              <Link className="nav-link" to="circledrawer"><button className="button1 ui primary button mini"><i className="angellist icon"></i>Live Demo</button></Link>
              <a href="https://github.com/adamaclp92/ReactLearning/tree/main/practice-projects2/src/projects/circle-drawer" target="_blank"><button className="button2 ui secondary mini button"><i className="github icon"></i>View Source</button></a>
            </div>
           
        </div>

        <div className="project">
            <Image className="image" src={colorchooser} />
            <div className="project_description">
            {language.code === "en" ? <h5 className="title">Color Finder App</h5> : <h5 className="title">Szín kitaláló app</h5>}
              <Link className="nav-link" to="colorchooser"><button className="button1 ui primary button mini"><i className="angellist icon"></i>Live Demo</button></Link>
              <a href="https://github.com/adamaclp92/ReactLearning/tree/main/practice-projects2/src/projects/color-chooser" target="_blank"><button className="button2 ui secondary mini button"><i className="github icon"></i>View Source</button></a>
            </div>
           
        </div>

        <div className="project">
            <Image className="image" src={synonymapi} />
            <div className="project_description">
            {language.code === "en" ? <h5 className="title">Synonym API</h5> : <h5 className="title">Szinoníma API</h5>}
              <Link className="nav-link" to="synonymapi"><button className="button1 ui primary button mini"><i className="angellist icon"></i>Live Demo</button></Link>
              <a href="https://github.com/adamaclp92/ReactLearning/tree/main/practice-projects2/src/projects/synonym-api" target="_blank"><button className="button2 ui secondary mini button"><i className="github icon"></i>View Source</button></a>
            </div>
           
        </div>

        <div className="project">
            <Image className="image" src={tenzies} />
            <div className="project_description">
            {language.code === "en" ? <h5 className="title">Tenzies</h5> : <h5 className="title">Tenzies</h5>}
              <Link className="nav-link" to="tenzies"><button className="button1 ui primary button mini"><i className="angellist icon"></i>Live Demo</button></Link>
              <a href="https://github.com/adamaclp92/ReactLearning/tree/main/my-app11%20-%20Tenzies" target="_blank"><button className="button2 ui secondary mini button"><i className="github icon"></i>View Source</button></a>
            </div>
           
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
