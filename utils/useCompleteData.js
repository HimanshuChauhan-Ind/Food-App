import { useEffect, useState } from "react";
import { ENTRY_API } from "./constants";

const useCompleteData = () => {
  const [carouselData, setCarouselData] = useState(null);
  const [topRestaurant, setTopRestaurant] = useState(null);
  const [restaurantList, setRestaurantList] = useState(null);
  const completeData = async () => {
    const response = await fetch(ENTRY_API);
    const data = await response.json();

    const cardData = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    const topRestaurantData =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const activeRestaurantList =
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setCarouselData(cardData);
    setTopRestaurant(topRestaurantData);
    setRestaurantList(activeRestaurantList);
  };

  useEffect(() => {
    completeData();
  }, []);

  return {
    carouselData,
    topRestaurant,
    restaurantList,
  };
};

export default useCompleteData;
