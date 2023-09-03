import { useEffect, useState } from "react";

export default function LatestReleases() {
  const [sweaters, setSweaters] = useState([]);
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
        const sweatersOnly = json.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        );
        setSweaters(sweatersOnly.slice(2, 6));
      })
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
  }, []);


  return (
    <div className="flex flex-col items-center my-2 gap-2">
      <h1 className="text-2xl">Latest Releases</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className="flex text-xs">
          {sweaters.map((sweater) => (
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
