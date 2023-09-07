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
    <div>
      <div className="md:flex hidden md:w-screen">
        <div className="flex flex-row-reverse w-screen  ">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-1/2 h-[500px]  object-cover"
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="flex w-screen md:hidden ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${
              index === currentIndex ? "active" : "hidden"
            }  w-screen`}
          >
            <img
              className="w-full h-[500px] object-cover"
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
