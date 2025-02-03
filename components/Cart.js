import { useDispatch, useSelector } from "react-redux";
import { DISH_IMG } from "../utils/constants";
import Line from "./Line";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div className="p-2 m-2 text-center font-bold">
      Cart
      <div className="border-2 cursor-pointer" onClick={handleClear}>
        Clear Cart
      </div>
      {cartItems.length === 0 ? (
        <div>Sheesh.... you must be hungry... </div>
      ) : (
        cartItems.map((item) => (
          <div key={item.card.info.id}>
            <div className="dish flex justify-between m-2">
              <div className="content w-3/4">
                <div className="name">{item.card.info.name}</div>
                <div className="price">
                  ₹{" "}
                  {(item.card.info.price || item.card.info.defaultPrice) / 100}
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
              </div>
            </div>

            <Line />
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
