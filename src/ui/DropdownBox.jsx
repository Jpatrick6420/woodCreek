import { useSelector } from "react-redux";
import Card from "./Card";

function DropdownBox({ type }) {
  const products = useSelector((state) => state.ui.productsOffered);
  const list = products.filter((item) => item.type === type);

  return (
    <div>
      <ul className="space-y-4">
        {list.map((item) => {
          console.log(item);
          return <Card key={item.name} item={item} size="small" />;
        })}
      </ul>
    </div>
  );
}

export default DropdownBox;
