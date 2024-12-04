import { IMG_ADD } from "./constants";

const RestaurantCard = ({ data }) => {
  return (
    <div className="restaurantCard w-80 hover:scale-95 transition-transform cursor-pointer">
      <div className="cardImage">
        <img
          className="rounded-2xl p-2 h-52 w-full object-cover"
          src={IMG_ADD + data.info.cloudinaryImageId}
        ></img>
      </div>
      <div className="cardContent">
        <div className="mt-2">
          <div className="resName m-2 font-bold">{data.info.name}</div>
          <i className="w-fit rounded-full p-2 bg-green-600 text-white fa-solid fa-star"></i>
          <span className="ml-2">{data.info.avgRating} . </span>{" "}
          <span className="font-semibold">{data.info.sla.slaString}</span>
          <div className="cuisines mt-2 px-1 truncate">
            {data.info.cuisines.join(",")}
          </div>
          <div className="area m-2">{data.info.areaName}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
