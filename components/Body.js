import Carousel from "./Carousel";
import Line from "./Line";
import RestaurantList from "./RestaurantList";
import useCompleteData from "../utils/useCompleteData";

const Body = () => {
  const completeData = useCompleteData();
  const { carouselData, topRestaurant, restaurantList } = completeData;

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
