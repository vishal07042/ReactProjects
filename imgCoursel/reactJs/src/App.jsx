import { useState } from "react";

import "./App.css";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

function App() {
  const [count, setCount] = useState(0);
  let [current, setCurrent] = useState(3);
  function prevSlide() {
    // setCurrent( current>4?  current+1 :current = 0);
    console.log(current);
    setCurrent(current < images.length -1? current + 1 : (current = 1));

    console.log(current);
  }
  function nextSlide() {
    setCurrent(current > 0 ? current - 1 : (current = 4));
  }

  {console.log(images.length)};

  return (
    <>
      <div>
        hello world;
        <h1>Project 1: Carousel</h1>
        <div className="slider">
          <div className="left-arrow" onClick={prevSlide}>
            ⬅
          </div>
          <div className="right-arrow" onClick={nextSlide}>
            ⮕
          </div>

          {images.map(
            (e, i) =>
            current == i && (
                <div className="slide" key={i}>
                  <img src={e} alt="" />
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
