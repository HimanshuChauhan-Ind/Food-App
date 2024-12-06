import Carousel from "./Carousel";
import Line from "./Line";
import RestaurantList from "./RestaurantList";
import { useEffect, useState } from "react";
import { ENTRY_API } from "./constants";

const Body = () => {
  const [carouselData, setCarouselData] = useState(null);
  const [topRestaurant, setTopRestaurant] = useState(null);
  const [restaurantList, setRestaurantList] = useState(null);

  const completeData = async () => {
    const response = await fetch(ENTRY_API);
    const data = await response.json();
    setCarouselData(data);
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

  return (
    <div className="app font-proxima">
      <div className="body mx-40 py-4 ">
        {carouselData !== null && (
          <Carousel title={"What's on your mind?"} data={carouselData} />
        )}
        <Line></Line>
        {topRestaurant !== null && (
          <Carousel
            title={"Top restaurant chains in Noida"}
            data={topRestaurant}
            textBody={true}
          />
        )}
        <Line></Line>
        {restaurantList !== null && (
          <RestaurantList
            title={"Restaurants with online food delivery in Noida"}
            list={restaurantList}
          />
        )}
      </div>
    </div>
  );
};

export default Body;
