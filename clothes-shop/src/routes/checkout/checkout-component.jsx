import { useContext } from "react";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { CartContext } from "../../contexts/cart.context";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total} from "./checkout.styles";

const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>Product</HeaderBlock>
        <HeaderBlock>Description</HeaderBlock>
        <HeaderBlock>Quantity</HeaderBlock>
        <HeaderBlock>Price</HeaderBlock>
        <HeaderBlock>Remove</HeaderBlock>
      </CheckoutHeader>
      <div>
        {cartItems.map((item) => (
          <CheckOutItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Total>Total: ${totalAmount}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
