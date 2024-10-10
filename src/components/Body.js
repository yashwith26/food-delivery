import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
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

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0009342&lng=77.7631425&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // console.log(json);
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restuarant) => (
          <Link
            key={restuarant.info.id}
            to={"/restaurants/" + restuarant.info.id}
          >
            <RestaurantCard resData={restuarant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
