import React from "react";
import InfiniteCarousel from "./InfiniteCarousel.jsx"

function App() {
  const CAROUSEL_IMAGES = [
    "https://images.unsplash.com/photo-1713390110946-2a966eebd346?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1713341207125-c745927e08de?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1712246437466-fedea86a99f5?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="App">
      <InfiniteCarousel carouselList={ CAROUSEL_IMAGES }></InfiniteCarousel>
    </div>
  );
}

export default App;
