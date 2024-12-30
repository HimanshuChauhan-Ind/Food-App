import { useState } from "react";

const RestaurantCollapsableMenu = ({ data }) => {
  const { card } = data.card;
  const { itemCards } = card;
  console.log("Item Card", card);
  console.log("Item Cards", itemCards);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed((prev) => !prev);
  };

  return (
    <div className="text-left border-b-8 p-2">
      <div
        className="categotyInfo flex justify-between py-10 cursor-pointer"
        onClick={toggleCollapse}
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
            <div key={item.card.info.id} className="dish">
              <div className="name">{item.card.info.name}</div>
              <div className="price">
                ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}
              </div>
              {item.card.info.description && (
                <div className="description">{item.card.info.description}</div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantCollapsableMenu;
