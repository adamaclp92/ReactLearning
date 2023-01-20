import React, { useState } from "react"
import en from './assets/en.png'
import hun from './assets/hun.png'


import './home.style.scss'
import Navbar from "./components/Navbar/Navbar.component"

const languages = [
    {code: 'en', name: "English", asset: en},
    {code: 'hun', name: "Hungarian", asset: hun}
  ]

const Home = () =>{

    const [currentLanguage, setCurrentLanguage] = useState({code: 'en', name: "English", asset: en})

    const changeLanguage = () => {

    }

    const options = languages.map(language => {
        if(language.code != currentLanguage.code){
          return <li onClick={changeLanguage}><img src={language.asset}/></li>
        }  
      });
    
    return (
        <React.Fragment>
              <div className="lang"> 
                <div className="imageContainer">
                <img src={currentLanguage.asset}/>
                </div>
                <ul className="dropdown">
                {options}
                </ul>
            </div>
    
            <Navbar />
        </React.Fragment>
    )
}

export default Home