import { Link } from "react-router-dom";
function InfoSection() {
  return (
    <div className="sm:flex sm:justify-center sm:items-center">
      <div className="md:w-7/12 p-5 py-10 ">
        <p className="text-xs">PREMIUM BEEF JERKY AT RIDICULOUS PRICES</p>
        <p className="text-xl font-semibold leading-8 mt-2 ">
          <span className="text-orange-700">Wood Creek </span>BBQ has some of
          the best tasting jerky around and we would love to prove it to you!
        </p>
        <div className="flex gap-2  items-center pt-10">
          <Link
            to="/AboutSection"
            className="rounded-lg border-2 border-stone-950 px-2 py-1 text-sm bg-stone-100  hover:bg-orange-500 hover:scale-120"
          >
            Learn More
          </Link>
          <Link
            to="/shop"
            className="rounded-lg font-semibold border px-2 py-1 text-sm bg-orange-400 hover:bg-orange-500 hover:scale-120"
          >
            SHOP NOW ➡️
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
