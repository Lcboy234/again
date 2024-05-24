export const updateCart = (state) => {
  // calculate item price
  state.itemsPrice = state.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // calculate shipping price, add $10 if its less than $100
  state.shippingPrice = state.itemsPrice > 100 ? 0 : 10;

  // tax for item
  state.taxPrice = Number(0.15 * state.itemsPrice);

  // total price

  state.totalPrice =
    Number(state.itemsPrice) +
    Number(state.shippingPrice) +
    Number(state.taxPrice);

  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};
