import { useEffect, useState } from "react";

export default function LatestReleases() {
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
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <ul className="flex text-xs">
          {clothing.map((sweater) => (
            <li
              key={sweater.id}
              className="flex flex-col items-center gap-1 justify-center"
            >
              <img src={sweater.image} alt={`${sweater.title} Image`} />
              <div>{sweater.title} </div>
              <div>{sweater.price} </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
