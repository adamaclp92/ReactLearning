
import './Navbar.style.scss'

import LanguageModel from '../../models/languageModel'

const Navbar = (language:LanguageModel) => {

  return (
    <ul className='navbar_container'> 
    <li className='nav_title'><h2>FrontEnd Portfolio</h2></li>
    <li><a href="#contact">{language.code === 'en' ? <p>Contacts</p> : <p>Elérhetőség</p>}</a></li>
    <li><a href="#message">{language.code === 'en' ? <p>Message</p> : <p>Üzenet</p>}</a></li>
    <li><a href="#projects">{language.code === 'en' ? <p>My Recently Projects</p> : <p>Projektjeim</p>}</a></li>
    <li><a href="#about">{language.code === 'en' ? <p>About</p> : <p>Rólam</p>}</a></li>

    <li></li>
  </ul>
  )
}

export default Navbar