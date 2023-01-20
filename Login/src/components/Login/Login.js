import React, { useState, useEffect, useReducer, useContext, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../UI/Input/Input';

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.includes('@')}
  }
  if(action.type === 'INPUT_BLUR'){
    return{ value: state.value, isValid: state.value.includes('@')}
  }
  return {value: '', isValid: false}
}

const passwordReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
    return {value: action.val, isValid: action.val.trim().length > 6}
  }
  if(action.type === 'INPUT_BLUR'){
    return{ value: state.value, isValid: state.value.trim().length > 6}
  }
  return {value: '', isValid: false}
}

const Login = (props) => {

  //useReducer() akkor használatos, ha komplex lenne a useState(), mint lent is
  //Összefügg az email, pw, form, ezeket váltja ki a useReducer()

 
  const [formIsValid, setFormIsValid] = useState(false);

  //UseReducer megoldás
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: false
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: false
  })
  
  //UseEffect megoldás
/* 
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
 const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(); 
 */

  //így jól lehet hivatkozni az emailsState és passwordState property-jére
  //de lehetne használni emailState.isValid-ként is, de így szebb, meg így szokták
  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid} = passwordState

  const ctx = useContext(AuthContext)

  const emailInputRef = useRef()
  const passwordInputRef = useRef()

  useEffect(() => {
    //hogy ne renderelje újra minden egyes leütésnél a komponenst, várakoztatás
    //addig, amig a felhasználó folyamtosan gépel, ClearTimeout-tal megszüntetjük az identifiert
    //És csak akkor fut le a checking, ha abbahagyja a gépelést 500 ms-ig

    const identifier = setTimeout(() => {
      console.log("Checking")
      setFormIsValid(emailIsValid && passwordIsValid)
    }, 500)
   
    return () => {
      console.log('cleanup')
      clearTimeout(identifier)
    }

  }, [emailIsValid, passwordIsValid])
 

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value});

  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

  };

  const validateEmailHandler = () => {
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      ctx.onLogin(emailState.value, passwordState.value);
    }else if(!emailIsValid){
        emailInputRef.current.focus()
    }else{
      passwordInputRef.current.focus()
    }
  
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       <Input  
         ref={emailInputRef}
         id="email"
         label="Email"
         type="email"
         isValid={emailIsValid}
         value={emailState.value}
         onChange={emailChangeHandler}
         onBlur={validateEmailHandler}
       />
        <Input  
         ref={passwordInputRef}
         id="password"
         label="Password"
         type="password"
         isValid={passwordIsValid}
         value={passwordState.value}
         onChange={passwordChangeHandler}
         onBlur={validatePasswordHandler}
       />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
