import React from 'react';
import Header from './components/Header'
import Form from './components/Form'
import User from './images/user.png'
import Count from './components/Count'
import Star from './components/Star'


export default function App(){
  const [user, setUser] = React.useState("Adam")

  //****Contact****
  /*
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "231432421",
    isFavorite: true
  })

  function toggleFavorite() {
    setContact(prevContact =>({
      ...prevContact, 
      isFavorite: !prevContact.isFavorite
    }))
  }

   return(

    <main>
      <article>
        <img src={User} className='card--image'/>
        <div>
          <Star 
            isFilled = {contact.isFavorite}
            onClick={toggleFavorite}
          />
          <h2>{contact.firstName} {contact.lastName}</h2>
          <p>{contact.phone}</p>
        </div>
      </article>
    </main>
    )
  */ 


  //****Add and Substract***
 /* 
  const [count, setCount] = React.useState(0)

  function add(){
    setCount(prevState => prevState + 1)
  }

  function substract(){
    setCount(prevState => prevState - 1)
  }

    return(
    
    <div>
      <button className='btn btn-primary' onClick={substract}>-</button>
      <Count number={count}/>
      <button className='btn btn-success' onClick={add}>+</button>
    </div>
    )
    */



  return(
    <div>
      <Header user = {user}/>
      <Form user = {user}/>
    </div>
 
  )


}