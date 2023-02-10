import React from 'react'
import LanguageModel from '../../models/languageModel'
import IntroImage from '../../assets/IMG_9851.jpg'

import './Introduction.style.scss'
import { Container } from 'semantic-ui-react'

const Introduction = (language:LanguageModel) => {
  return (
      <Container className='intro_container'>
        <img className='intro_img' src={IntroImage} />
        {language.code === 'en' ? <div className='text_div'>
            <h1 className='intro_name'>I'm Adam Rago</h1>
            <p className='intro_description'>I'm a frontend Javascript Developer. This is my portfolio website where I would like to introduce myself and my practicing projects.</p> </div>: 
             <div className='text_div'>
                <h1 className='intro_name'>A nevem Ragó Ádám</h1>
                <p className='intro_description'>Frontend Javascript fejlesztő vagyok. Ez a portfólió weboldalam, ahol szeretnék bemutatkozni, valamint bemutatni néhány gyakorló projektemet.</p>
             </div>
}
      </Container>
  )
}

export default Introduction