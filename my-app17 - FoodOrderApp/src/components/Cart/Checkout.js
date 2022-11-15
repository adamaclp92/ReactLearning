import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const nameInputRef = useRef();
  const zipCodeInputRef = useRef();
  const countryInputRef = useRef();
  const streetInputRef = useRef();
  const numberInputRef = useRef();

  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    zipCode: true,
    country: true,
    street: true,
    number: true,
  });

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredZipCode = zipCodeInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredNumber = numberInputRef.current.value;

    const isValidName = !isEmpty(enteredName);
    const isValidZipCode = !isEmpty(enteredZipCode);
    const isValiCountry = !isEmpty(enteredCountry);
    const isValidStreet = !isEmpty(enteredStreet);
    const isValidNumber = !isEmpty(enteredNumber);

    setFormInputsValidity({
      name: isValidName,
      zipCode: isValidZipCode,
      country: isValiCountry,
      street: isValidStreet,
      number: isValidNumber,
    });

    const formIsValid =
      isValidName &&
      isValidZipCode &&
      isValiCountry &&
      isValidStreet &&
      isValidNumber;

    if (!formIsValid) {
      return;
    }

    console.log("asd");

    props.onUserConfirm({
      name: enteredName,
      zipCode: enteredZipCode,
      country: enteredCountry,
      street: enteredStreet,
      number: enteredNumber,
    });
  };

  const nameInputClass = `${styles.control} ${
    formInputsValidity.name ? "" : styles.invalid
  }`;
  const zipInputClass = `${styles.control} ${
    formInputsValidity.zipCode ? "" : styles.invalid
  }`;
  const countryInputClass = `${styles.control} ${
    formInputsValidity.country ? "" : styles.invalid
  }`;
  const streetInputClass = `${styles.control} ${
    formInputsValidity.street ? "" : styles.invalid
  }`;
  const numberInputClass = `${styles.control} ${
    formInputsValidity.number ? "" : styles.invalid
  }`;

  return (
    <form onSubmit={confirmHandler}>
      <div className={styles.container}>
        <div className={nameInputClass}>
          <label htmlFor="name">Név:</label>
          <input
            className={styles.input}
            type="text"
            id="name"
            ref={nameInputRef}
          ></input>
          {!formInputsValidity.name && <p>A név nem lehet üres.</p>}
        </div>
        <div className={zipInputClass}>
          <label htmlFor="zipCode">Irányítószám:</label>
          <input type="text" id="zipCode" ref={zipCodeInputRef}></input>
          {!formInputsValidity.zipCode && (
            <p>Az irányítószám csak szám lehet.</p>
          )}
        </div>
        <div className={countryInputClass}>
          <label htmlFor="country">Város:</label>
          <input type="text" id="country" ref={countryInputRef}></input>
          {!formInputsValidity.country && <p>A város nem lehet üres.</p>}
        </div>
        <div className={streetInputClass}>
          <label htmlFor="street">Utca:</label>
          <input type="text" id="street" ref={streetInputRef}></input>
          {!formInputsValidity.street && <p>Az utca nem lehet üres.</p>}
        </div>
        <div className={numberInputClass}>
          <label htmlFor="number">Házszám:</label>
          <input type="text" id="number" ref={numberInputRef}></input>
          {!formInputsValidity.number && <p>A házszám nem lehet üres.</p>}
        </div>
        <div className={styles["actions"]}>
          <button
            className={styles["button--alt"]}
            type="button"
            onClick={props.hideCart}
          >
            Mégse
          </button>
          <button className={styles["button"]} type="submit">
            Megerősítés
          </button>
        </div>
      </div>
    </form>
  );
};

export default Checkout;
