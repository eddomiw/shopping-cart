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
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:grid-cols-4  text-xs">
          {sweaters.map((sweater) => (
            <li
              key={sweater.id}
              className="my-10 mx-5 flex flex-col items-center justify-center"
            >
              <img
                className="max-w-[350px] min-w-[170px] w-4/6 min-h-[170px] max-h-[275px] h-5/6 "
                src={sweater.image}
                alt={`${sweater.title} Image`}
              />
              <div className="mt-auto text-center text-m">
                <div className=" h-8 flex items-center justify-center">
                  {sweater.title}{" "}
                </div>
                <div className="mt-2">{`$${sweater.price}`} </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
