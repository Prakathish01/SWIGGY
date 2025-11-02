import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
export const ItemsSlot = ({ items }) => {
  //const data = item?.itemcard
  const data = items; // itemcard?.item restarudant => itemcard.item ||| cart => item
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItems(item));
    console.log(item);
  };

  return (
    <div className="w-6/12 mx-auto">
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <div className="flex border-b justify-between p-1 shadow-lg m-1 min-h-[120px]">
              <div className="text-left w-9/12 px-1 py-0.5">
                {/* details */}
                <span className="font-bold text-base">
                  {item?.card?.info?.name} - ₹
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}
                </span>
                <p className="mt-0.5 text-sm">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className="relative w-3/12 flex items-center justify-center">
                {/* image */}
                <div className="relative flex flex-col items-center">
                  <img
                    className="w-[100px] h-[80px] object-cover rounded"
                    src={CDN_URL + item?.card?.info?.imageId}
                    alt={item?.card?.info?.name}
                  />
                  <button
                    className="absolute -bottom-3 bg-white text-[#ff4603] rounded-lg px-2.5 py-0.5 shadow-md cursor-pointer"
                    onClick={() => handleAddItems(item)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
