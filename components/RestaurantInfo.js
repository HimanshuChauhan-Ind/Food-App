import { useParams } from "react-router";
import Carousel from "./Carousel";
import Line from "./Line";
import RestaurantCollapsableMenu from "./RestaurantColllapsableMenu.";
import RestaurantCollapsableMenuNested from "./RestaurantCollapsabelMenuNested";
import useGetRestaurantData from "../utils/useGetRestaurantData";
import { useState } from "react";

const RestaurantInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { resId } = useParams();
  const restaurantData = useGetRestaurantData(resId);

  const restaurantInfo = restaurantData?.data?.cards[2]?.card?.card?.info;
  const offersData =
    restaurantData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
      ?.offers;

  const completeMenuList = restaurantData?.data?.cards.at(-1);

  let topPicks =
    completeMenuList?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (type) =>
        type.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.MenuCarousel"
    );
  topPicks = topPicks && topPicks[0]?.card?.card?.carousel;

  let menuCard =
    completeMenuList?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (type) =>
        type.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
        type.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

  return (
    restaurantInfo && (
      <div className="restaurantInfo m-auto py-4 w-3/4 2xl:w-1/2 text-center">
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
        <div className="dishesFilterList mt-11">
          {menuCard &&
            menuCard.map((item, index) =>
              item.card.card["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
                <RestaurantCollapsableMenu
                  key={item.card.card.type}
                  data={item}
                  isCollapsed={currentIndex === index ? false : true}
                  isFocused={() =>
                    setCurrentIndex((prev) => (prev === index ? null : index))
                  }
                />
              ) : (
                <RestaurantCollapsableMenuNested
                  key={item.card.card.type}
                  data={item}
                />
              )
            )}
        </div>
      </div>
    )
  );
};

export default RestaurantInfo;
