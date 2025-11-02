import { Shimmer } from "./Shimmer";
import { useParams } from "react-router";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";
import { useState } from "react";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(0);

  if (resMenu === null) return <Shimmer />;

  //const infoCard = resMenu?.cards?.find(
  //  (card) => card?.card?.card?.info
  //);
  const { itemCards } =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.card?.info?.name
  const infoCardPath = resMenu?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = infoCardPath || {};

  const categories =
    resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];
  // console.log(categories);

  return (
    <div className="mt-[75px] text-center">
      <h1 className="font-bold text-4xl m-2 ">{name}</h1>
      <p className="font-bold m-[15px]">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div>
        {categories.map((c, Index) => {
          return (
            <RestaurantCategory
              key={c?.card?.card?.categoryId}
              data={c?.card?.card}
              showItems={Index === showItems}
              setShowItems={() =>
                // setShowItems(Index)
                setShowItems((prev) => (prev === Index ? null : Index))
              }
            />
          );
        })}
      </div>
    </div>
  );
};
/* <h3>Menu</h3>
      <ul>
        {itemCards &&
          itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name} -{" Rs."}
              {item?.card?.info?.price / 100 ||
                item.card.info.defaultPrice / 100}
            </li>
          ))}
      </ul> */
