import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export default function Apparel({
  itemCounts,
  decrementCount,
  incrementCount,
  addToCart,
}) {
  const [clothing, setClothing] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => {
        const clothingOnly = json.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        );
        setClothing(clothingOnly);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="flex flex-col items-center my-2 gap-2">
      {isLoading ? (
        <p>Loading...</p> //Displays loading indicator
      ) : error ? (
        <p>Error: {error.message}</p> //Displays error message if fetching failed
      ) : (
        <ul className="flex text-xs">
          {clothing.map((clothingItem) => (
            <li
              key={clothingItem.id}
              className="flex flex-col items-center gap-1 justify-center"
            >
              <img
                src={clothingItem.image}
                alt={`${clothingItem.title} Image`}
              />
              <div>{clothingItem.title}</div>
              <div>{clothingItem.price}</div>
              <div>Count: {itemCounts[clothingItem.id] || 0}</div>
              <div>
                <button
                  data-testid={`subtractButton ${clothingItem.id}`}
                  onClick={() => decrementCount(clothingItem.id)}
                >
                  -
                </button>
                <button
                  data-testid={`addButton ${clothingItem.id}`}
                  onClick={() => incrementCount(clothingItem.id)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  const quantity = itemCounts[clothingItem.id] || 0;
                  addToCart(
                    clothingItem.id,
                    clothingItem.image,
                    quantity,
                    clothingItem.price
                  );
                }}
              >
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

Apparel.propTypes = {
  decrementCount: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  itemCounts: PropTypes.any.isRequired,
  addToCart: PropTypes.func.isRequired,
};
