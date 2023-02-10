import React from 'react'
import LanguageModel from '../../models/languageModel'
import { Form, Input, TextArea, Button, Container } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

import './Message.style.scss'

const SERVICE_ID = "service_iatmhno";
const TEMPLATE_ID = "template_mtvuynw";
const USER_ID = "adamaclp92";

const Contact = (language:LanguageModel) => {
    const handleSubmit = (e:any) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: `${language.code === 'en' ? 'Message Sent Successfully' : 'Üzenet sikeresen elküldve'}` 
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: `${language.code === 'en' ? 'Ooops Something Went Wrong!' : 'Ajjaj, valami nem sikerült!'}` ,
              text: error.text,
            })
          });
        e.target.reset()
    }
    
  return (
    <Container id="message" className='contact_container'>
        <h1 className='copntact_title'>{language.code=='en' ? <p>Message</p> : <p>Üzenet</p>}</h1>
        <hr/>
        <div className='contact_form'>
        <Form onSubmit={handleSubmit}>
            <Form.Field
                id='form.input-control-email'
                control={Input}
                label={language.code=='en' ? 'Email' : 'Email cím'}
                name='user_email'
                placeholder={language.code=='en' ? 'Email' : 'Email cím...'}
                required
                icon='mail'
                iconPosition='left'
                className='email'
                />
            <Form.Field
                id='form-input-control-last-name'
                control={Input}
                label={language.code=='en' ? 'Name' : 'Név'}
                name='user_name'
                placeholder={language.code=='en' ? 'Name...' : 'Név...'}
                required
                icon='user'
                iconPosition='left'
                />
            <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label={language.code=='en' ? 'Message' : 'Üzenet'}
                name='user_message'
                placeholder={language.code=='en' ? 'Message...' : 'Üzenet szövege...'}
                required
                />
            <Button type='submit' color='green'>{language.code=='en' ? 'Send Message' : 'Üzenet küldése'}</Button>
        </Form>
    </div>
    </Container>
   
  )
}

export default Contact