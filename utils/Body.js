import Header from "./Header";
import Carousel from "./Carousel";
import Line from "./Line";
import { useEffect, useState } from "react";

const Body = () => {
  const [carouselData, setCarouselData] = useState(null);

  const completeData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6870522&lng=77.4856126&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    setCarouselData(data);
    const cardData = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    setCarouselData(cardData);
  };

  useEffect(() => {
    completeData();
  }, []);

  return (
    <div className="app font-proxima">
      <Header />
      <div className="body mx-40 py-4 ">
        {carouselData !== null && <Carousel data={carouselData} />}
        <Line></Line>
      </div>
    </div>
  );
};

export default Body;
