import { useEffect, useRef, useState } from "react";
import { IMG_ADD } from "./constants";

const Carousel = ({ data }) => {
  const scrollObj = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollState = () => {
    const obj = scrollObj.current;
    setAtStart(obj.scrollLeft <= 0);
    setAtEnd(obj.scrollLeft + obj.clientWidth >= obj.scrollWidth);
  };
  useEffect(() => {
    const obj = scrollObj.current;
    obj.addEventListener("scroll", updateScrollState);
    return () => {
      obj.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  const scrollleftClicked = () => {
    const obj = scrollObj.current;
    obj.scrollBy({ left: -200, behavior: "smooth" });
  };
  const scrollRightClicked = () => {
    const obj = scrollObj.current;
    obj.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="dishes ">
      <div className="upper flex justify-between">
        <div className="font-bold">
          <h2>What's on your mind?</h2>
        </div>
        <div className="buttons">
          <button className="scrollLeft" onClick={scrollleftClicked}>
            <i
              className={`fa-solid fa-arrow-left p-2 mx-4 ${
                atStart ? "bg-slate-200" : "bg-slate-300"
              } rounded-full`}
            ></i>
          </button>
          <button className="scrollRight" onClick={scrollRightClicked}>
            <i
              className={`fa-solid fa-arrow-right p-2 ${
                atEnd ? "bg-slate-200" : "bg-slate-300"
              } rounded-full`}
            ></i>
          </button>
        </div>
      </div>
      <div ref={scrollObj} className="flex overflow-hidden space-x-4 mt-4">
        {data.map(({ id, imageId }) => (
          <div key={id}>
            <img
              className="min-w-[144px] h-[180px]"
              src={IMG_ADD + imageId}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
