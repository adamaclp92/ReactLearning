import { useState, useContext } from "react";

import {
  postUser,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button from "../UI/button/button";
import FormInput from "../UI/form-input/form-input";
import "./sign-in-form.style.scss";

import { UserContext } from '../../contexts/user.context'

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser} = useContext(UserContext)

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const user = await signInWithGooglePopup();

    try {
      //const userDocRef = await createUserDocumentFromAuth(user)

      const userAdd = await postUser(user.user);
    } catch (error) {
      console.log(error.message);
    }

    setCurrentUser(user)
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setCurrentUser(user)
      resetFormFields();
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;
        case "auth/user-not-found":
          alert("Email does not exists.");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="buttons-container">
          <Button type="submit" onClick={signInAuthUserWithEmailAndPassword}>
            Sign In
          </Button>
          <Button
            onClick={signInWithGoogle}
            type="button"
            buttonType={"google"}
          >
            Google sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
