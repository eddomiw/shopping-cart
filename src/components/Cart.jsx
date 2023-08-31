import PropTypes from "prop-types";

export default function Cart({ cartItems }) {
  const totalItemCount = Object.keys(cartItems).length;

  return (
    <div>
      <h1>Cart</h1>
      <div>{totalItemCount}</div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.any.isRequired,
};
