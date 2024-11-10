import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { listOfRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useBody();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // let listOfRestaurantsJS = [
  //   {
  //     info: {
  //       id: "407808",
  //       name: "Pizza Hut",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/294967f4-ba2a-459c-88f8-8f1f102039e9_407808.jpg",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 3.8,
  //       sla: {
  //         deliveryTime: 30,
  //         slaString: "25-30 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "407809",
  //       name: "Dominos",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/294967f4-ba2a-459c-88f8-8f1f102039e9_407808.jpg",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.3,
  //       sla: {
  //         deliveryTime: 30,
  //         slaString: "25-30 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "407810",
  //       name: "McDonald's",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/294967f4-ba2a-459c-88f8-8f1f102039e9_407808.jpg",
  //       costForTwo: "₹350 for two",
  //       cuisines: ["Pizzas"],
  //       avgRating: 4.1,
  //       sla: {
  //         deliveryTime: 30,
  //         slaString: "25-30 mins",
  //       },
  //     },
  //   },
  // ];

  // const [listOfRestaurants, setListOfRestaurants] = useState([]);
  // const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0009342&lng=77.7631425&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();

  //   console.log(json);
  //   setListOfRestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setFilteredRestaurants(
  //     json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Opps! Looks like you are offline!! Please check your Internet conection
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className=" search m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className=" border border-gray-500 p-1 rounded-xl "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-3  py-1 bg-gray-100 m-4 rounded-lg border border-gray-500  "
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className=" search m-4 p-4 flex items-center">
          <button
            className="px-3 py-1 bg-gray-100 m-4 rounded-lg border border-gray-500"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.3
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        {/* <div className=" search m-4 p-4 flex items-center">
          <label>User Name</label>
          <input
            className="border border-black p-2 ml-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div> */}
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4.3 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

{
  /* Promoted is not present in Swiggy's API hence I will use the avgRating field to show promoted */
}
