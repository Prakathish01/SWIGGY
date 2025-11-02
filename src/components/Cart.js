import { useDispatch, useSelector } from "react-redux";
import { ItemsSlot } from "./ItemsSlot";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="mt-[74px] text-center ">
      <h1 className="font-bold text-3xl m-5">Cart</h1>
      <button
        className="search-Button ml-2 bg-[#ffa647] text-white px-3 py-1 rounded-xl cursor-pointer"
        onClick={handleClearItems}
      >
        Remove all
      </button>
      {cardItems && <ItemsSlot items={cardItems} />}
      {cardItems.length === 0 && (
        <h1>The cart is empty ,please add products</h1>
      )}
    </div>
  );
};
export default Cart;
