import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;

  const { loggedInUser } = useContext(UserContext);
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { slaString },
  } = resData?.info;

  return (
    <div
      data-testid="rescard"
      className="m-4 p-4 w-[220px] rounded-xl bg-gray-200 hover:bg-gray-400"
    >
      <div className="flex justify-center">
        <img
          className="res-logo rounded-xl h-[140px] w-[200px]  "
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <h3 className="font-bold pt-3 px-1 text-lg">{name}</h3>
      <h4 className="font-semibold px-1">{avgRating + " • " + slaString}</h4>

      <h4 className="text-xs px-1">{cuisines.join(", ")}</h4>
      {/* <h4 className="pb-4">{costForTwo}</h4> */}
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black opacity-80 text-white ml-4 p-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
