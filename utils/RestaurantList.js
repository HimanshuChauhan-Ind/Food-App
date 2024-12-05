import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router";

const RestaurantList = ({ title, list }) => {
  return (
    <div className="restaurantList">
      <div className="font-bold">
        <h2>{title}</h2>
      </div>
      <div className="filters">Filters</div>
      <div className="RestaurantCards flex flex-wrap justify-start  mx-11 gap-10">
        {list.map((item) => (
          <Link key={item.info.id} to={"/restaurant/" + item.info.id}>
            <RestaurantCard data={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
