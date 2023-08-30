import PropTypes from "prop-types";

export default function Cart({ itemCounts }) {
  const totalItemCount = Object.keys(itemCounts).length;

  return (
    <div>
      <h1>Cart</h1>
      <div>{totalItemCount}</div>
    </div>
  );
}

Cart.propTypes = {
  itemCounts: PropTypes.any.isRequired,
};

