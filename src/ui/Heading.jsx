import { useDispatch } from "react-redux";
import { updateIsNavOpen } from "./uiSlice";

function Heading() {
  const dispatch = useDispatch();
  function handleToggleNav() {
    dispatch(updateIsNavOpen());
  }

  return (
    <div className="flex justify-between items-center px-2 bg-gray-800">
      <div
        className="w-4 h-4 flex justify-between flex-col m-2 cursor-pointer"
        onClick={handleToggleNav}
      >
        <div className=" border border-stone-50"></div>
        <div className=" border border-stone-50"></div>
        <div className=" border border-stone-50"></div>
      </div>
      <div>
        <p className="text-stone-50">Wood Creek</p>
      </div>
      <div>
        <p>
          <i
            className="fa-solid fa-cart-shopping fa-lg text-stone-50 hover:text-orange-700"
            // style={{ color: "#ffffff" }}
          ></i>
        </p>
      </div>
    </div>
  );
}

export default Heading;
