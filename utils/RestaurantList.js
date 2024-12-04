import RestaurantCard from "./RestaurantCard";

const RestaurantList = ({ title, list }) => {
  return (
    <div className="restaurantList">
      <div className="font-bold">
        <h2>{title}</h2>
      </div>
      <div className="filters">Filters</div>
      <div className="RestaurantCards flex flex-wrap justify-start  mx-11 gap-10">
        {list.map((item) => (
          <RestaurantCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
