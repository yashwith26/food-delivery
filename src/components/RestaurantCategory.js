import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setShowIndex();
    setToggle(!toggle);
  };
  return (
    <div>
      {/* Accordian Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-md   p-4 rounded-lg ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems && toggle ? <span>⬆️</span> : <span>⬇️</span>}
        </div>

        {showItems && toggle && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordian body */}
    </div>
  );
};

export default RestaurantCategory;
