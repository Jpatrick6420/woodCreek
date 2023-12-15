import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AvailabilityCard from "./AvailabilityCard";
function AvailabilitySection() {
  const products = useSelector((state) => state.ui.productsOffered);

  const beefJerkeyList = products.filter((items) => {
    return items.type === "beef jerky" && items.isInStock === true;
  });
  const baconJerkeyList = products.filter(
    (items) => items.type === "bacon jerky" && items.isInStock === true
  );
  const turkeyJerkeyList = products.filter(
    (items) => items.type === "turkey jerky" && items.isInStock === true
  );

  return (
    <div className="bg-orange-800 py-10 mt-6">
      <h1 className="text-center font-bold text-2xl mb-6 text-stone-300">
        We Offer
      </h1>
      <ul className="space-y-10 sm:space-y-0 sm:flex sm:justify-around sm:items-center ">
        <AvailabilityCard list={beefJerkeyList}>Beef Jerkey</AvailabilityCard>
        <AvailabilityCard list={turkeyJerkeyList}>
          Turkey Jerkey
        </AvailabilityCard>
        <AvailabilityCard list={baconJerkeyList}>Bacon Jerkey</AvailabilityCard>
      </ul>
      <p className="text-center my-4 text-stone-400">
        So what are you waiting for?
      </p>
      <div className="flex justify-center">
        <Link
          to="/store"
          className="bg-gray-800 py-1 mt-4 px-3 text-sm text-stone-200 uppercase hover:bg-stone-400 hover:text-gray-800 hover:scale-95 font-semibold"
        >
          Visit our store today
        </Link>
      </div>
    </div>
  );
}

export default AvailabilitySection;
