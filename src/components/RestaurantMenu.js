import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    https: setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info; // Name

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card; //Restaurant Menu
  // console.log(itemCards);

  // console.log(
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card
  // );

  //Some menu cards have itemCards at REGULAR.cards[1] and some at REGULAR.cards[2]
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card ||
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ||
    {};

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs. "}
            {item.card.info.price / 100 ||
              item.card.info.finalPrice / 100 ||
              item.card.info.variantsV2.pricingModels[0].price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
