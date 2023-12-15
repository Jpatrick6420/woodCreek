import { Link } from "react-router-dom";

import { month, today } from "../helpers/helpers";
import Tag from "./Tag";

function Card({ item, size, list, backgroundColor }) {
  if (size === "small")
    return (
      <li className="relative  ml-3 px-2">
        <div>
          <p className=" text-sm italic ">
            {item.name} {item.glutenFree ? "GF" : ""} {item.size}{" "}
            <span className="text-red-500">
              {today - new Date(item.releaseDate) < month ? "new" : ""}
            </span>
          </p>
          {/* <div className="flex gap-2">
            <p className="text-sm">{item.size}</p>
            <p className="text-red-500 text-sm">
              {today - item.releaseDate.getTime() < month ? "new" : ""}
            </p>
          </div> */}

          {/* <p className="text-orange-500">{newItem ? "NEW" : ""}</p> */}
        </div>
      </li>
    );

  if (size === "medium") {
    const descriptions = [
      "Hickory Smoked beef jerky with the best ingredients and the highest quality brisket out of beef. It is sure to have you wanting more.",
      `Bacon Jerky. Bringing home town comfort food to you anywhere, on the go. It's melt in your mouth flavor makes it irresistable. `,
      `Turkey jerky has all the flavor but in a leaner protein . Give it a try.`,
    ];

    return (
      <li
        className={`w-full px-6 py-6  border-t border-b grid grid-rows-[auto, 1fr, auto] gap-4 ${backgroundColor}`}
      >
        <div className="flex justify-center flex-col items-center">
          {list === "beef" && <p className="text-6xl">🐄</p>}
          {list === "bacon" && <p className="text-6xl ">🐖</p>}
          {list === "turkey" && <p className="text-6xl">🦃</p>}

          {list === "beef" && (
            <p className="font-semibold text-lg uppercase py-2">Beef Jerky</p>
          )}
          {list === "bacon" && (
            <p className="font-semibold text-lg uppercase py-2">Bacon Jerky</p>
          )}
          {list === "turkey" && (
            <p className="font-semibold text-lg uppercase py-2">Turkey Jerky</p>
          )}
        </div>
        <div className="h-32">
          {list === "beef" && <p>{descriptions[0]}</p>}
          {list === "bacon" && <p>{descriptions[1]}</p>}
          {list === "turkey" && <p className="">{descriptions[2]}</p>}
        </div>
        <div className="flex justify-center items-center">
          <Link
            className="bg-orange-400 py-0.5 mt-4 px-2 text-sm text-stone-900 hover:bg-orange-500 font-semibold"
            to="/shop"
          >
            Shop
          </Link>
        </div>
      </li>
    );
  }

  if (size === "large") {
    return (
      <li className="border border-stone-900  p-2 w-72 h-72 relative sm:w-64  sm:mx-4 my-3 grid grid-rows-[2fr_1fr]">
        <div className="flex justify-center items-center  py-2 ">
          <img className="w-5/12" src={item.image} alt={item.name} />
        </div>

        <div className="p-1">
          <h3 className="text-sm font-semibold">{item.name}</h3>
          <div className="flex gap-2 items-center">
            <p className="text-sm border-1 border-stone-800 bg-neutral-300 px-1 py-0.5">
              {item.size}
            </p>
            {item.glutenFree && (
              <Tag color="stone">{item.glutenFree ? "GF" : ""}</Tag>
            )}
          </div>
          <div className="flex gap-2">
            <p className="text-red-500 font-bold">
              {item.isOnSale ? item.salePrice : ""}
            </p>
            <p className={`${item.isOnSale ? "line-through" : ""}`}>
              {item.price}
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <Link
              className="z-100 cursor-pointer bg-blue-400 px-1 py-0.5 mt-1 rounded-md hover:bg-blue-500 hover:scale-95  text-sm"
              to={`/shop/${item.id}`}
            >
              Info
            </Link>

            <button className="text-sm">Add To Favorites</button>
          </div>
        </div>
      </li>
    );
  }
  if (size === "xl") {
    return (
      <li className="border-2  border-gray-950 w-72 h-44 grid grid-cols-[3fr_9fr] relative m-2">
        <div className="flex justify-center items-center">
          <img src={item.image} className="h-2/3" />
        </div>
        <div className="p-2 flex flex-col justify-between">
          <p className="font-bold mb-2 uppercase text-md">{item.name}</p>
          <div className="flex gap-1 mb-1">
            <Tag color={"stone"}>GF</Tag>
            <Tag color={"green"}>Low Sodium</Tag>
          </div>
          <p className="text-sm">description</p>
          <div className="flex gap-2 justify-between items-center my-1">
            <div className="flex justify-center gap-1 items-center">
              {item.isOnSale && (
                <p className="text-red-500 font-bold text-lg">
                  {item.salePrice}
                </p>
              )}
              <p className={`${item.isOnSale ? "line-through" : ""}`}>
                {item.price}
              </p>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
