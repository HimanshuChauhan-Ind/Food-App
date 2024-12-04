import Header from "./Header";
import Carousel from "./Carousel";
import Line from "./Line";
import { useEffect, useState } from "react";
import { ENTRY_API } from "./constants";

const Body = () => {
  const [carouselData, setCarouselData] = useState(null);
  const [topRestaurant, setTopRestaurant] = useState(null);
  const completeData = async () => {
    const response = await fetch(ENTRY_API);
    const data = await response.json();
    setCarouselData(data);
    const cardData = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    const topRestaurantData =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setCarouselData(cardData);
    setTopRestaurant(topRestaurantData);
    console.log(topRestaurantData);
  };

  useEffect(() => {
    completeData();
  }, []);

  return (
    <div className="app font-proxima">
      <Header />
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
      </div>
    </div>
  );
};

export default Body;
