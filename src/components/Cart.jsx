import PropTypes from "prop-types";

export default function Cart({ cartItems }) {
  console.log(cartItems);

  return (
    <div>
      <h1>Cart</h1>
      <div>
        {Object.keys(cartItems).map((itemId) => (
          <div key={itemId}>
            Item ID: {itemId},{" "}
            <img className=" w-28 " src={cartItems[itemId].image}></img>{" "}
            Quantity: {cartItems[itemId].quantity}, Price: $
            {cartItems[itemId].price}
          </div>
        ))}
      </div>
    </div>
  );
}

Cart.propTypes = {
  cartItems: PropTypes.any.isRequired,
};
