import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "./constants";
import Carousel from "./Carousel";
import Line from "./Line";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const [restautantData, setREstaurantData] = useState(null);

  const getData = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setREstaurantData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const restaurantInfo = restautantData?.data?.cards[2]?.card?.card?.info;
  const offersData =
    restautantData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
      ?.offers;
  const topPicks =
    restautantData?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1]
      ?.card?.card?.carousel;
  console.log(topPicks);
  return (
    restaurantInfo && (
      <div className="restaurantInfo mx-64 py-4">
        <div className="restaurantName font-bold text-2xl">
          {restaurantInfo.name}
        </div>
        {/* Card Section */}
        <div className="border rounded-3xl shadow-lg  mt-8 p-8">
          <div className="">
            <i className=" rounded-full p-1 bg-green-600 text-white fa-solid fa-star text-xs"></i>
            <span className="ml-2 font-bold">
              {restaurantInfo.avgRatingString}
            </span>
            <span className="font-medium">
              ({restaurantInfo.totalRatingsString}) .
            </span>
            <span className="ml-2 font-medium">
              {restaurantInfo.costForTwoMessage}
            </span>
          </div>
          <div className="cussines mt-2">
            {restaurantInfo.cuisines.map((item, index) =>
              index === 0 ? (
                <span
                  key={index}
                  className="underline ml-1 text-[#fc8019] cursor-pointer"
                >
                  {item}
                </span>
              ) : (
                <span
                  key={index}
                  className="underline ml-1 text-[#fc8019] cursor-pointer"
                >
                  ,{item}
                </span>
              )
            )}
          </div>
          <div className="text-sm">
            <div>
              <span className="ml-1 mt-2 font-bold">Outlet</span>
              <span className="ml-4 text-gray-400">
                {restaurantInfo.areaName}
              </span>
            </div>
            <div className="ml-1">
              {restaurantInfo.sla.slaString.toLowerCase()}
            </div>
          </div>
        </div>
        <div className="mt-4 p-2">
          <Carousel
            title={"Deals for you"}
            offerCard={true}
            data={offersData}
          />
        </div>
        <div className="text-center mt-11 text-sm text-gray-500 tracking-widest">
          MENU
        </div>
        <div className="text-center mt-4 bg-gray-300 p-4 rounded-lg text-gray-600 text-sm">
          Search for dishes
        </div>
        <Line />
        {topPicks && <Carousel data={topPicks} topPicks={true} />}
      </div>
    )
    // <div>Test</div>
  );
};

export default RestaurantInfo;
