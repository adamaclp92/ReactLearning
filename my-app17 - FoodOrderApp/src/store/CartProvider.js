import { useReducer, useState } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const reducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existintCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existintCartItem = state.items[existintCartItemIndex];

    let updatedItems;

    if (existintCartItem) {
      const item = {
        ...existintCartItem,
        amount: existintCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existintCartItemIndex] = item;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const deletingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    let updatedItems = [...state.items];

    let totalAmount = state.totalAmount - updatedItems[deletingItemIndex].price;

    if (totalAmount < 0) {
      totalAmount = 0;
    }

    if (updatedItems[deletingItemIndex].amount > 1) {
      updatedItems[deletingItemIndex].amount -= 1;
    } else {
      updatedItems.splice(deletingItemIndex, 1);
    }

    return {
      items: updatedItems,
      totalAmount: totalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return {
    defaultCartState,
  };
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(reducer, defaultCartState);

  //useState alternatíva a useReducer helyett
  //useReducer a useState alternatívája, ha sok mezővel kell dolgozni
  // const [cartState, setCartState] = useState(defaultCartState)

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    /* const updatedItems = cartState.items.concat(item)
        const updatedTotalAmount = cartState.totalAmount + item.price * item.amount
        setCartState((prevState) => {
            return {
                ...prevState,
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
            

        })*/
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    amount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
