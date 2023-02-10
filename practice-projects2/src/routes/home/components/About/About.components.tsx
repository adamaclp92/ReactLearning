import React, { ReactNode } from 'react'
import LanguageModel from '../../models/languageModel'
import './About.style.scss'

import CssLogo from '../../assets/css.png'
import HtmlLogo from '../../assets/html.png'
import JavaLogo from '../../assets/java.png'
import JavascriptLogo from '../../assets/javascript.png'
import ReactLogo from '../../assets/react.png'
import SqlLogo from '../../assets/sql.png'
import TypeScriptLogo from '../../assets/typescript.png'
import { Container } from 'semantic-ui-react'

const About = (language:LanguageModel) => {

    const logos = [
        {text: 'HTML', logo: HtmlLogo},
        {text: 'CSS', logo: CssLogo},
        {text: 'JAVASCRIPT', logo: JavascriptLogo},
        {text: 'REACT', logo: ReactLogo},
        {text: 'TYPESCRIPT', logo: TypeScriptLogo},
        {text: 'SQL', logo: SqlLogo},
        {text: 'JAVA', logo: JavaLogo},
    ]

    const logosMapping = logos.map(logo => {
        return (
            <div key={logo.text} className='column'>
                <div className='overlay_img'>
                    <img src={logo.logo}/>
                </div>
                <div className='overlay'>
                    <div className='text'>{logo.text}</div>
                </div>
            </div>
        )

    })

  return (
      <Container id="about" className='about_container'>
        <h1 className='about_title'>{language.code=='en' ? <p>About</p> : <p>Rólam</p>}</h1>
        <hr/>
        {language.code == 'en' ? <p className='about_text'> I started learning programming at the university in 2018. I got to know many technologies in here and beside the university I also have improving my developing skills continuously.</p>
        : <p className='about_text'>2018-ban kezdtem el foglalkozni a programozással az egyetemen. Sok technológiával megismerkedtem itt és egyetem mellett azóta is folyamatosan fejlesztem magam. </p>}

        <div className='main'>
            {language.code == 'en' ? <h3 className='about_dev_skills'>Technologies</h3> : <h3 className='about_dev_skills'>Technológiák</h3>}
            <div className='about_dev_logos'>

            {logosMapping}
        </div>


        </div>

        <div className='others'>
            {language.code == 'en' ? <h3 className='other_dev_skills'>Other skills</h3> : <h3 className='other_dev_skills'>Egyéb skillek</h3>}
            <div className='other_overlay'>
                        <p className='text'>Git</p>
                        <p className='text'>Jira</p>
                        <p className='text'>Confluence</p>
                        <p className='text'>XML</p>
                        <p className='text'>JSON</p>
                        <p className='text'>Middleware</p>
                        <p className='text'>Integration Patterns</p>
                        <p className='text'>Basic Unix Commands</p>
                    </div>
            </div>

      </Container>

  )
}

export default About