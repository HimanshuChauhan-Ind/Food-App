import { useRef, useState } from "react";

const Topcarousal = () => {
  const scrollObj = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const scrollleftClicked = () => {
    const obj = scrollObj.current;
    obj.scrollBy({ left: -200, behavior: "smooth" });
    setAtEnd(false);
    console.log(obj.scrollLeft);
    obj.scrollLeft <= 220 ? setAtStart(true) : setAtStart(false);
  };
  const scrollRightClicked = () => {
    const obj = scrollObj.current;
    obj.scrollBy({ left: 200, behavior: "smooth" });
    setAtStart(false);
    console.log(obj.scrollWidth, obj.clientWidth - obj.scrollLeft);
    obj.clientWidth - obj.scrollLeft < 200 ? setAtEnd(true) : setAtEnd(false);
  };

  return (
    <div className="dishes mx-40 py-4 ">
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
      <div ref={scrollObj} className="flex overflow-auto space-x-4 mt-4">
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 1
        </div>
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 2
        </div>
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 3
        </div>
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 4
        </div>
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 5
        </div>
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 6
        </div>
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 7
        </div>
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 8
        </div>
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 9
        </div>
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 10
        </div>
        <div className="min-w-[200px] h-[100px] bg-green-500 text-white flex items-center justify-center rounded-lg shadow-lg">
          Item 11
        </div>
      </div>
    </div>
  );
};

export default Topcarousal;
