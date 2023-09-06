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
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((res) => {
        if (res.status >= 400) {
          throw new Error("server error");
        }
        return res.json();
      })
      .then((json) => {
        const clothingOnly = json
          .filter(
            (item) =>
              item.category === "men's clothing" ||
              item.category === "women's clothing"
          )
          .slice(1);
        setClothing(clothingOnly);
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="flex  flex-col items-center gap-2">
      <div className="mt-8 text-3xl">Apparel</div>
      {isLoading ? (
        <p>Loading...</p> //Displays loading indicator
      ) : error ? (
        <p>Error: {error.message}</p> //Displays error message if fetching failed
      ) : (
        <ul className=" my-16 gap-11 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-10 text-xs">
          {clothing.map((clothingItem) => (
            <li
              key={clothingItem.id}
              className=" my-10  flex flex-col items-center gap-2 justify-center"
            >
              <img
                className="max-w-[350px] min-w-[170px] w-4/6 min-h-[170px] max-h-[275px] h-5/6 "
                src={clothingItem.image}
                alt={`${clothingItem.title} Image`}
              />
              <div className="h-8 flex justify-center items-center ">
                {clothingItem.title}
              </div>
              <div>{`$${clothingItem.price.toFixed(2)}`}</div>

              <div className="flex flex-col gap-4  items-center w-1/2">
                <div className="flex border w-full border-l-black text-base">
                  <button
                    className="w-1/3"
                    data-testid={`subtractButton ${clothingItem.id}`}
                    onClick={() => decrementCount(clothingItem.id)}
                  >
                    -
                  </button>
                  <div className=" w-5/6 text-center">
                    {itemCounts[clothingItem.id] || 0}
                  </div>
                  <button
                    className="w-1/3"
                    data-testid={`addButton ${clothingItem.id}`}
                    onClick={() => incrementCount(clothingItem.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="bg-black w-full md:w-2/3 text-white p-2 rounded-lg focus:outline-none"
                  onClick={() => {
                    const quantity = itemCounts[clothingItem.id] || 0;
                    addToCart(
                      clothingItem.id,
                      clothingItem.image,
                      quantity,
                      clothingItem.price,
                      clothingItem.title
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
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
