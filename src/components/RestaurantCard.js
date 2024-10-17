import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[200px] rounded-xl bg-gray-200 hover:bg-gray-400">
      <img
        className="res-logo rounded-xl h-[150px] w-[250px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating + " stars"}</h4>
      <h4>{costForTwo}</h4>
      <h4 className="pb-4">{deliveryTime + " mins"}</h4>
    </div>
  );
};

export default RestaurantCard;
