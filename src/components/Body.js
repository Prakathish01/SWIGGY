import { RestaurantCard, WithPromotedLabel } from "./RestaurantCard";
import { SideSpaceRight, SideSpaceLeft } from "./SideSpace";
import { useState, useEffect, useContext } from "react";
import { CDN_URL, SWIGGY_API } from "../utils/constants";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";
import { useOnlineStatus } from "../utils/useOnlineStatus";
// import { UserContext } from "../utils/UserContext";

export const Body = () => {
  const [listOFRestaurant, setListOFRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const onlineStatus = useOnlineStatus();
  const [image, setImage] = useState([]);

  // const { loggedInId, setUserName } = useContext(UserContext);

  const RestaurantPromoted = WithPromotedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchImage = async () => {};
  const fetchData = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    const restaurantPath =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    const imagePath = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
    setImage(imagePath);
    console.log(imagePath);
    setFilteredRestaurant(restaurantPath);
    setListOFRestaurant(restaurantPath);
  };
  if (listOFRestaurant.length === 0) {
    return (
      <div>
        <Shimmer />
        <SideSpaceRight />
        <SideSpaceLeft />
      </div>
    );
  }
  if (!onlineStatus) {
    return (
      <>
        <SideSpaceRight />
        <SideSpaceLeft />
        <h1
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Check your internet connection
        </h1>
      </>
    );
  }
  return (
    <div className="pt-[100px] pl-[134px] pr-[134px]">
      <div className="flex justify-center mt-2 items-center h-5 w-auto ">
        <input
          className="rounded-xl px-3 py-1 border"
          type="text"
          placeholder="Search"
          value={searchResult}
          onChange={(e) => {
            setSearchResult(e.target.value);
          }}
        />
        <button
          className="search-Button ml-2 bg-[#ffa647] text-white px-3 py-1 rounded-xl cursor-pointer"
          onClick={() => {
            const filteredList = listOFRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchResult.toLowerCase())
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Search
        </button>
        <button
          className="ml-2 bg-[#ffa647] text-white px-3 py-1 rounded-xl cursor-pointer"
          onClick={() => {
            const filteredList = listOFRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          {" "}
          Top Rated Restaurant{" "}
        </button>
        {/* <label>User :</label> */}
        {/* <input type="text" className="p-1 cursor-pointer border border-[#c6c6c6] " value={loggedInId} onChange={(e) => (e.target.value)} /> */}
      </div>
      <div>
        <h2 className="font-sans font-bold text-2xl mt-4 pt-[30px]">
          What we have for you
        </h2>
      </div>
      <div className="flex flex-row overflow-x-scroll pt-[20px] scrollbar-hide">
        {image &&
          image.map((img) => {
            return (
              <div key={img.id} className="flex flex-row space-x-3">
                <img className=" " src={`${CDN_URL}${img?.imageId}`} />
              </div>
            );
          })}
      </div>
      <div className="mt-6">
        <h2 className="font-sans font-bold text-2xl mt-6 ">
          Top restaurant chains in Chennai
        </h2>
      </div>
      <div className="flex justify-evenly flex-row-reverse overflow-x-scroll pt-[20px] scrollbar-hide mr-4.5">
        <>
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
          <SideSpaceRight />
          <SideSpaceLeft />
        </>
      </div>
      <div>
        <h2 className="font-sans font-bold text-2xl mt-4">
          Restaurants in your area
        </h2>
      </div>
      <div className="flex justify-evenly flex-wrap pt-[20px] ">
        <>
          {filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
              {restaurant.info.aggregatedDiscountInfoV3 ? (
                <RestaurantPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
          <SideSpaceRight />
          <SideSpaceLeft />
        </>
      </div>
    </div>
  );
};
