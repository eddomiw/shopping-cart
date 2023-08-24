import Header from "./components/Header";
// import Home from "./components/Home";
// import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import LatestReleases from "./components/LatestReleases";

function App() {
  const imageData = [
    "https://s7d1.scene7.com/is/image/scom/207_24_CTK_HPR_xl?$1500w$",
    "https://s7d1.scene7.com/is/image/scom/207_HPR_24_OBK_xl?$1500w$",
  ];

  return (
    <div>
      <Header />
      <ImageSlider images={imageData} />
      <LatestReleases />
    </div>
  );
}

export default App;
