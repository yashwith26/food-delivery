import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId); //Custom Hook

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info; // for Restaurants cards

  var items = null;
  if (
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card
      ?.itemCards
  ) {
    item =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
        ?.card;
  } else if (
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card
      ?.itemCards
  ) {
    item =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
        ?.card;
  } else {
    item =
      resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.categories[0];
  }

  const { itemCards } = item;
  // console.log(itemCards);

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
