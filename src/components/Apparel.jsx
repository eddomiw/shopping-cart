import { useEffect, useState } from "react";

export default function LatestReleases() {
  const [clothing, setClothing] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [itemCounts, setItemCounts] = useState({}); // Track item counts

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

  // Function to increment item count
  const incrementCount = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  // Function to decrement item count
  const decrementCount = (itemId) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: Math.max((prevCounts[itemId] || 0) - 1, 0),
    }));
  };

  return (
    <div className="flex flex-col items-center my-2 gap-2">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
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
                  data-testId={`subtractButton ${clothingItem.id}`}
                  onClick={() => decrementCount(clothingItem.id)}
                >
                  -
                </button>
                <button
                  data-testId={`addButton ${clothingItem.id}`}
                  onClick={() => incrementCount(clothingItem.id)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => {
                  // Handle adding to cart here
                  // You can use the itemCounts state to determine the quantity to add
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
