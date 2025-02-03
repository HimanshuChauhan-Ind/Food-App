import { useState } from "react";
import { DISH_IMG } from "../utils/constants";
import Line from "./Line";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantCollapsableMenu = ({ data, isCollapsed, isFocused }) => {
  const { card } = data.card;
  const { itemCards } = card;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="text-left border-b-8 p-2">
      <div
        className="categotyInfo flex justify-between py-10 cursor-pointer"
        onClick={isFocused}
      >
        <div className="category">{card.title}</div>
        <div className="arrow">
          <i
            className={`fa-solid ${
              isCollapsed ? "fa-angle-down" : "fa-angle-up"
            }`}
          ></i>
        </div>
      </div>
      <div className="rangeItems">
        {!isCollapsed &&
          itemCards.map((item) => (
            <div key={item.card.info.id}>
              <div className="dish flex justify-between m-2">
                <div className="content w-3/4">
                  <div className="name">{item.card.info.name}</div>
                  <div className="price">
                    ₹{" "}
                    {(item.card.info.price || item.card.info.defaultPrice) /
                      100}
                    <i className="fa-solid fa-tag fa-flip-horizontal text-green-500 mx-2"></i>
                  </div>
                  {item.card.info.description && (
                    <div className="description">
                      {item.card.info.description}
                    </div>
                  )}
                </div>
                <div className="dish-img relative">
                  <img
                    className="rounded-2xl h-44 w-44 object-cover"
                    src={DISH_IMG + item.card.info.imageId}
                  ></img>
                  <div className="btn absolute top-40 w-full text-center">
                    <button
                      className="bg-white border-solid border-[1px] border-gray-300 hover:bg-slate-300 px-5 py-1 rounded-md font-bold text-green-600"
                      onClick={() => handleAddItem(item)}
                    >
                      ADD
                    </button>
                  </div>
                </div>
              </div>

              <Line />
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantCollapsableMenu;
