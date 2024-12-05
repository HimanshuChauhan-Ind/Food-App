import { useEffect, useRef, useState } from "react";
import { IMG_ADD } from "./constants";

const Carousel = ({ data, title, textBody, offerCard }) => {
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
          <h2>{title}</h2>
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
        {textBody
          ? data.map((res) => (
              <div
                key={res.info.id}
                className="cursor-pointer min-w-[300px] h-[550px] hover:scale-95 transition-transform"
                id={res.info.id}
              >
                <img
                  className="rounded-2xl p-2 w-fit"
                  src={IMG_ADD + res.info.cloudinaryImageId}
                ></img>
                <div className="info p-2">
                  <div className="mt-2">
                    <div className="resName m-2 font-bold">{res.info.name}</div>
                    <i className=" rounded-full p-2 bg-green-600 text-white fa-solid fa-star"></i>
                    <span className="ml-2">{res.info.avgRating} . </span>{" "}
                    <span className="font-semibold">
                      {res.info.sla.slaString}
                    </span>
                    <div className="cuisines m-2 w-max-[300px] truncate">
                      {res.info.cuisines.join(",")}
                    </div>
                    <div className="area m-2">{res.info.areaName}</div>
                  </div>
                </div>
              </div>
            ))
          : offerCard
          ? data.map(({ info, index }) => (
              <div className="min-w-80 border rounded-xl p-4" key={index}>
                <div>
                  <div className="offerHeader font-bold">{info.header}</div>
                  <div className="offerDescription truncate text-sm text-gray-500 font-bold">
                    {info.description}
                  </div>
                </div>
              </div>
            ))
          : data.map(({ id, imageId }) => (
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
