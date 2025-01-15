import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useGetRestaurantData = (resId) => {
  const [restaurantData, setRestaurantData] = useState(null);

  const getData = async () => {
    const response = await fetch(MENU_API + resId);
    const data = await response.json();
    setRestaurantData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return restaurantData;
};

export default useGetRestaurantData;
