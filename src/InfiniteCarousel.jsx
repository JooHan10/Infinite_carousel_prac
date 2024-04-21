// import React, { useState, useEffect } from "react";
// import "./styles.css"; // 스타일 파일 임포트

// const Carousel = () => {
//   const SOUL_DATA = [
//     {
//       src: "https://images.unsplash.com/photo-1713390110946-2a966eebd346?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "1번 이미지",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1713341207125-c745927e08de?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "2번 이미지",
//     },
//     {
//       src: "https://images.unsplash.com/photo-1712246437466-fedea86a99f5?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       alt: "3번 이미지",
//     },
//   ];

//   const [currCarousel, setCurrCarousel] = useState(1);
//   const [carouselTransition, setCarouselTransition] = useState(
//     "transform 500ms ease-in-out"
//   );

//   const makeNewDataArray = (arr) => {
//     const dataStart = arr[0];
//     const dataEnd = arr[arr.length - 1];
//     const modifiedArray = [dataEnd, ...arr, dataStart];
//     return modifiedArray;
//   };

//   const slideNextSoulsCarousel = () => {
//     const soulSliderLength = SOUL_DATA.length;
//     const newCurr = currCarousel + 1;
//     setCurrCarousel(newCurr);

//     if (newCurr === soulSliderLength + 1) {
//       moveToNthSlide(1);
//     }

//     setCarouselTransition("transform 500ms ease-in-out");
//   };

//   const slidePrevSoulsCarousel = () => {
//     const soulSliderLength = SOUL_DATA.length;
//     const newCurr = currCarousel - 1;
//     setCurrCarousel(newCurr);

//     if (newCurr === 0) {
//       moveToNthSlide(soulSliderLength);
//       // console.log(`soulSliderLength: ${soulSliderLength}`);
//     }

//     setCarouselTransition("transform 500ms ease-in-out");
//   };

//   const moveToNthSlide = (n) => {
//     setCarouselTransition("");
//     setCurrCarousel(n);
//   };

//   useEffect(() => {
//     // console.log(makeNewDataArray(SOUL_DATA));
//     console.log(currCarousel);
//   }, [currCarousel]);

//   const renderImages = () => {
//     const imageData = makeNewDataArray(SOUL_DATA);
//     // console.log(imageData);
//     return imageData.map((image, index) => {
//       return (
//         <div
//           className="carouselImageWrap"
//           key={index}
//           style={{
//             paddingLeft: "30px",
//             transform: `translateX(-${(currCarousel * 100) - 10}%)`,
//             transition: `${carouselTransition}`,
//           }}
//         >
//           <img src={image.src} alt={image.alt} />
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="carouselContainer">
//       {/* <div className="img-container">{renderImages()}</div> */}
//       {renderImages()}
//       <button onClick={slidePrevSoulsCarousel} className="prev-btn">
//         Previous
//       </button>
//       <button onClick={slideNextSoulsCarousel} className="next-btn">
//         Next
//       </button>
//     </div>
//   );
// };

// export default Carousel;



// -----------------------------------------------------------------


import { useEffect, useRef, useState } from "react";
import { GrPrevious, GrNext } from "react-icons/gr";
import "./styles.css";

const InfiniteCarousel = ({ carouselList }) => {
  const [currIndex, setCurrIndex] = useState(1);
  const [currList, setCurrList] = useState([]);

  const carouselRef = useRef(null);

  useEffect(() => {
    if (carouselList.length !== 0) {
      const startData = carouselList[0];
      const endData = carouselList[carouselList.length - 1];
      const newList = [endData, ...carouselList, startData];

      setCurrList(newList);
    }
  }, [carouselList]);

  useEffect(() => {
    if (carouselRef.current !== null) {
      carouselRef.current.style.transform = `translateX(-${
        (currIndex * 100)
      }%)`;
    }
  }, [currIndex]);

  const moveToNthSlide = (index) => {
    setTimeout(() => {
      setCurrIndex(index);
      if (carouselRef.current !== null) {
        carouselRef.current.style.transition = "";
      }
    }, 500);
  };

  const handleSwipe = (direction) => {
    const newIndex = currIndex + direction;

    if (newIndex === carouselList.length + 1) {
      moveToNthSlide(1);
    } else if (newIndex === 0) {
      moveToNthSlide(carouselList.length);
    }

    setCurrIndex((prev) => prev + direction);
    if (carouselRef.current !== null) {
      carouselRef.current.style.transition = "all 0.5s ease-in-out";
    }
  };

  // let touchStartX;
  // let touchEndX;

  // const handleTouchStart = (e) => {
  //   touchStartX = e.touches[0].clientX;
  // };

  // const handleTouchMove = (e) => {
  //   const currTouchX = e.changedTouches[0].clientX;

  //   if (carouselRef.current !== null) {
  //     carouselRef.current.style.transform = `translateX(calc(-${currIndex}00% - ${
  //       (touchStartX - currTouchX) * 2 || 0
  //     }px))`;
  //   }
  // };

  // const handleTouchEnd = (e) => {
  //   touchEndX = e.changedTouches[0].clientX;

  //   if (touchStartX >= touchEndX) {
  //     handleSwipe(1);
  //   } else {
  //     handleSwipe(-1);
  //   }
  // };

  return (
    <div className={"container"}>
      <div
        className={"carouselWrapper"}
        // onTouchStart={handleTouchStart}
        // onTouchMove={handleTouchMove}
        // onTouchEnd={handleTouchEnd}
      >
        <button
          type="button"
          className={"swipeLeft"}
          onClick={() => {
            handleSwipe(-1)
            console.log(currIndex)
          }}
        >
          <GrPrevious />
        </button>
        <button
          type="button"
          className={"swipeRight"}
          onClick={() => {
            handleSwipe(1)
            console.log(currIndex)
          }}
        >
          <GrNext />
        </button>
        <ul className={"carousel"} ref={carouselRef}>
          {currList.map((image, idx) => {
            const key = `${image}-${idx}`;

            return (
              <li key={key} className={"carouselItem"}>
                <img src={image} alt="carousel-img" />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteCarousel;
