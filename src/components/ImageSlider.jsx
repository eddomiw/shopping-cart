import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);
  //TODO: DESKTOP VERSION FOR DISPLAYING TWO IMAGES
  return (
    <div className="slider-container w-full overflow-hidden">
      <div className="flex w-screen transition-all duration-500 ease-in-out">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${
              index === currentIndex ? "active" : "hidden"
            }  w-screen`}
          >
            <img
              className="w-max-screen h-[500px] object-cover"
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ImageSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};
