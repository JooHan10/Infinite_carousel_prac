import React, { useState } from "react";
import "./styles.css"; // 스타일 파일 임포트

const SOUL_DATA = [
  "https://images.unsplash.com/photo-1713390110946-2a966eebd346?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1713341207125-c745927e08de?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1712246437466-fedea86a99f5?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Carousel = () => {
  const [currCarousel, setCurrCarousel] = useState(1);
  const [carouselTransition, setCarouselTransition] = useState(
    "transform 500ms ease-in-out"
  );

  const makeNewDataArray = (arr) => {
    const dataStart = arr[0];
    const dataEnd = arr[arr.length - 1];
    const modifiedArray = [dataEnd, ...arr, dataStart];
    return modifiedArray;
  };

  const slideNextSoulsCarousel = () => {
    const soulSliderLength = SOUL_DATA.length;
    const newCurr = currCarousel + 1;
    setCurrCarousel(newCurr);

    if (newCurr === soulSliderLength + 1) {
      moveToNthSlide(1);
    }

    setCarouselTransition("transform 500ms ease-in-out");
  };

  const slidePrevSoulsCarousel = () => {
    const soulSliderLength = SOUL_DATA.length;
    const newCurr = currCarousel - 1;
    setCurrCarousel(newCurr);

    if (newCurr === 0) {
      moveToNthSlide(soulSliderLength);
    }

    setCarouselTransition("transform 500ms ease-in-out");
  };

  const moveToNthSlide = (n) => {
    setTimeout(() => {
      setCarouselTransition("");
      setCurrCarousel(n);
    }, 500);
  };

  const renderImages = () => {
    const imageData = makeNewDataArray(SOUL_DATA);
    return imageData.map((image, index) => {
      console.log(image);
      return(
        <div
          className="carouselImageWrap"
          key={index}
          style={{
            transform: `translateX(-${currCarousel * 100}%)`,
            transition: `${carouselTransition}`,
          }}
        >
          <img src={image} alt={image} />
        </div>
      )
    });
  };

  return (
    <div className="carouselContainer">
      <div className="img-container">{renderImages()}</div>
      <div className="btn-container">
        <button onClick={slidePrevSoulsCarousel}>Previous</button>
        <button onClick={slideNextSoulsCarousel}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
