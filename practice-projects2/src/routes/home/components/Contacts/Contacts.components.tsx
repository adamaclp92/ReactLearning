import React from 'react'

import './Contacts.style.scss'
import LanguageModel from '../../models/languageModel'

const Contacts  = (language:LanguageModel) => {
  return (
    <ul id="contact" className='footer_container'>
    <div className='column'>
      <div className='row'>
        <li>{language.code === 'en' ? <p>E-mail</p> : <p>E-mail cím</p>}</li>
        <li><p className='email'>adamaclp92@gmail.com</p></li>
      </div>
      <div className='row'>
        <li><p>Github</p></li>
        <li><a href='https://github.com/adamaclp92' target="_blank"><i className="github icon"></i></a></li>
      </div>
      <div className='row'>
        <li><p>LinkedIn</p></li>
        <li><a href='https://www.linkedin.com/in/%C3%A1d%C3%A1m-rag%C3%B3-b2a2b61a1' target="_blank"><i className="linkedin icon"></i></a></li>
      </div>

    </div>
    <li className='last_item'><p>Copyright @ 2023 Adam Rago. All rights reserved.</p></li>
   
    <li></li>
  </ul>
  )
}

export default Contacts