import ImageSlider from "./ImageSlider";
import LatestReleases from "./LatestReleases";

function Home() {
  const imageData = [
    "https://s7d1.scene7.com/is/image/scom/207_24_CTK_HPR_xl?$1500w$",
    "https://s7d1.scene7.com/is/image/scom/207_HPR_24_OBK_xl?$1500w$",
  ];
  return (
    <>
      <ImageSlider images={imageData} />
      <LatestReleases />;
    </>
  );
}

export default Home;
