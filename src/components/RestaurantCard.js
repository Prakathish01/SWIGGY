import { CDN_URL } from "../utils/constants";

export const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    aggregatedDiscountInfoV3,
    sla: { slaString } = {},
  } = resData?.info || {};
  // console.log(resData);
  const commonTextStyle = "font-sans";
  return (
    <div className="relative w-[200px] h-[250px]  p-1.5 m-2.5 transition-all duration-300 ease-in-out hover:shadow-[0_0_5px_black] hover:cursor-pointer">
      <div className="relative">
        <img
          className="w-full h-[125px] justify-self-center object-cover object-center rounded-3xl"
          src={CDN_URL + cloudinaryImageId}
        />

        {aggregatedDiscountInfoV3 && (
          <label className="absolute bottom-0 left-0 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-tr-lg">
            {[
              aggregatedDiscountInfoV3?.header,
              aggregatedDiscountInfoV3?.subHeader,
            ]
              .filter(Boolean)
              .join(" ")}
          </label>
        )}
      </div>
      <p className="italic font-bold line-clamp-1">{name}</p>
      <p className={`${commonTextStyle} line-clamp-1`}>{cuisines.join(", ")}</p>
      <p className={commonTextStyle}>
        ⭐{avgRating} · {slaString}
      </p>
      <p className={commonTextStyle}>{costForTwo}</p>
      <p className={commonTextStyle}>{deliveryTime}</p>
    </div>
  );
};
export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <RestaurantCard {...props} />
      </div>
    );
  };
};
