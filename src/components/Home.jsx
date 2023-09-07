import ImageSlider from "./ImageSlider";
import LatestReleases from "./LatestReleases";

function Home() {
  const imageData = [
    "https://cdn.thewirecutter.com/wp-content/media/2020/12/cashmeresweaters-2048px-0924.jpg?auto=webp&quality=75&width=980&dpr=2",
    "https://cdn.thewirecutter.com/wp-content/media/2020/12/cashmeresweaters-2048px-0995-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=2",
  ];
  return (
    <div>
      <ImageSlider images={imageData} />
      <LatestReleases />;
    </div>
  );
}

export default Home;
