import React, { useContext, useState } from "react";
import UseHttpRequests from "../../hooks/useHttpRequest.";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";

import styles from "./Cart.module.css";
import Checkout from "./Checkout";

const Cart = (props) => {
  const { error, isLoading, httpRequest: confirmOrder } = UseHttpRequests();
  const [didSubmitted, setDidSubmitted] = useState(false);
  const cartContext = useContext(CartContext);
  const totalAmount = `$${cartContext.amount.toFixed(2)}`;

  const [isCheckout, setIsCheckout] = useState(false);

  const haveAnItem = cartContext.items.length > 0;

  const addItem = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const removeItem = (id) => {
    cartContext.removeItem(id);
  };

  const setToCheck = () => {
    setIsCheckout(true);
  };

  const cartItems = (
    <ul>
      {cartContext.items.map((item) => (
        <div key={item.id + Math.random()}>
          <li className={styles["cart-item"]}>
            <div>
              <h2>{item.name}</h2>
              <div className={styles.summary}>
                <span className={styles.price}>${item.price.toFixed(2)}</span>
                <span className={styles.amount}>x {item.amount}</span>
              </div>
            </div>
            <div className={styles.actions}>
              <button onClick={() => removeItem(item.id)}>−</button>
              <button onClick={() => addItem(item)}>+</button>
            </div>
          </li>
        </div>
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles["actions"]}>
      <button className={styles["button--alt"]} onClick={props.hideCart}>
        Close
      </button>
      {haveAnItem && (
        <button className={`${styles["button"]}`} onClick={setToCheck}>
          Order
        </button>
      )}
    </div>
  );

  const confirmUserData = (userData) => {
    confirmOrder({
      url: "https://react-http-34ef6-default-rtdb.firebaseio.com/orders.json",
      method: "POST",
      body: {
        user: userData,
        order: cartContext.items,
      },
    });

    setDidSubmitted(true);
    cartContext.clearCart();
  };

  let modalContent = (
    <React.Fragment>
      {cartItems}

      <div className={styles["total"]}>
        <h3>Total Amount:</h3>
        <span className={styles["totalAmount"]}>{totalAmount}</span>
      </div>

      {isCheckout && (
        <Checkout onUserConfirm={confirmUserData} hideCart={props.hideCart} />
      )}

      {!isCheckout && modalActions}
    </React.Fragment>
  );

  if (isLoading) {
    modalContent = <p>Kérem várjon...</p>;
  }

  if (didSubmitted) {
    modalContent = (
      <React.Fragment>
        <p>A rendelés sikeresen leadva.</p>
        <div className={styles["actions"]}>
          <button className={styles["button--alt"]} onClick={props.hideCart}>
            Close
          </button>
        </div>
      </React.Fragment>
    );
  }

  return <Modal hideCart={props.hideCart}>{modalContent}</Modal>;
};

export default Cart;
