import { useParams } from "react-router";
import { useSelector } from "react-redux";
import NavItem from "../ui/NavItem";
import Details from "../ui/Details";
function ItemPage() {
  const { id } = useParams();
  const products = useSelector((state) => state.ui.productsOffered);
  const item = products.find((product) => product.id === parseInt(id));
  return (
    <main className="flex justify-center items-center px-3">
      <div className="w-screen  sm:w-1/4">
        <div>
          <img src={item.image} alt={item.name} />
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <NavItem href="/" type="small-link">
              Home
            </NavItem>
            <NavItem href="/shop" type="small-link">
              Back
            </NavItem>
          </div>
          <div>
            <h4 className="text-md font-semibold">
              {item.name} Jerky {item.glutenFree ? "GF" : ""} {item.size}
            </h4>
          </div>
          <div className="flex gap-2">
            <p className={`${item.isOnSale ? "line-through" : ""}`}>
              ${item.price}
            </p>
            {item.isOnSale && <p className="text-red-500">${item.salePrice}</p>}
          </div>
          <p className="text-stone-400 text-xs">Category: {item.type}</p>
          <Details header="Description">Things about the product</Details>
        </div>
      </div>
    </main>
  );
}

export default ItemPage;
