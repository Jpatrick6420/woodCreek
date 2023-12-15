import Nav from "../../ui/Nav";

import ShoppingBar from "./ShoppingBar";
import AboutSection from "./AboutSection";
import AvailabilitySection from "./AvailabilitySection";
import InfoSection from "./InfoSection";
import { useDispatch, useSelector } from "react-redux";
import { updateIsNavOpen } from "../../ui/uiSlice";

function Homepage() {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state) => state.ui.isNavOpen);
  const products = useSelector((state) => state.ui.productsOffered);

  // const [navIsOpen, setNavIsOpen] = useState(false);
  function onToggleNav() {
    // setNavIsOpen(!navIsOpen);
    dispatch(updateIsNavOpen());
  }

  return (
    <main className={`bg-stone-50 relative`}>
      {isNavOpen && <Nav onToggleNav={onToggleNav} products={products} />}
      <div>
        <InfoSection />
        <ShoppingBar products={products} />
        <AboutSection />
        <AvailabilitySection products={products} />
      </div>
    </main>
  );
}

export default Homepage;
