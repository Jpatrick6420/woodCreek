import { useSelector } from "react-redux";
import Card from "../ui/Card";

function ShoppingPage() {
  const searchQuery = useSelector((state) => state.ui.searchQuery);

  return (
    <main className="z-10">
      <div className="sm:flex sm:justify-center sm:items-center sm:gap-4 ">
        <ul className="flex flex-col items-center my-5 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-4">
          {searchQuery.map((item) => (
            <Card item={item} size="large" key={item.id} />
          ))}
        </ul>
      </div>
    </main>
  );
}

export default ShoppingPage;
