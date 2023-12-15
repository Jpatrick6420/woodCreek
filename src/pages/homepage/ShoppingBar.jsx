// import { useSelector } from "react-redux";
import Card from "../../ui/Card";

function ShoppingBar() {
  // const products = useSelector((state) => state.ui.productsOffered);
  // const beefList = products.filter((item) => item.type === "beef jerky");
  // const baconList = products.filter((item) => item.type === "bacon jerky");
  // const turkeyList = products.filter((item) => item.type === "turkey jerky");

  return (
    <div className="flex items-center justify-center">
      <div>
        <ul className="sm:flex max-w-[800px] mb-6 items-start">
          <Card size="medium" list="beef"></Card>
          <Card size="medium" list="bacon"></Card>
          <Card size="medium" list="turkey"></Card>
        </ul>
      </div>
    </div>
  );
}

export default ShoppingBar;
