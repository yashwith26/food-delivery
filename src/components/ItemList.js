import { ITEMS_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            data-testid="foodItems"
            key={item.card.info.id}
            className="p-2 my-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2 font-bold">
                <span>{item.card.info.name}</span>
                <p>
                  ₹
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </p>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 relative ">
              {/* <div className="absolute"> */}
              <button
                className=" absolute p-2 bottom-1 left-16 rounded-lg bg-white shadow-lg font-bold text-teal-600 hover:bg-slate-300"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
              {/* </div> */}
              <img
                src={ITEMS_URL + item.card.info.imageId}
                className="w-full m-auto rounded-xl" //added m-auto
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
