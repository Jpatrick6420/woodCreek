import NavItem from "./NavItem";
import { useState } from "react";

import DropdownBox from "./DropdownBox";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBaconJerkySelected,
  updateBeefJerkySelected,
  updateTurkeyJerkySelected,
  updateSearchQuery,
  onCloseNav,
} from "./uiSlice";

function Nav() {
  // const [beefJerkeySelected, setBeefJerkeySelected] = useState(false);
  // const [baconJerkeySelected, setBaconJerkeySelected] = useState(false);
  // const [turkeyJerkeySelected, setTurkeyJerkeySelected] = useState(false);

  // const products = useSelector((state) => state.ui.productsOffered);
  const [query, setQuery] = useState("");
  const beefJerkySelected = useSelector((state) => state.ui.beefJerkySelected);
  const turkeyJerkySelected = useSelector(
    (state) => state.ui.turkeyJerkySelected
  );
  const products = useSelector((state) => state.ui.productsOffered);

  const baconJerkySelected = useSelector(
    (state) => state.ui.baconJerkySelected
  );
  const dispatch = useDispatch();
  // function handleJerkySelection(type) {
  //   if (type === "beefJerky") setBeefJerkeySelected(!beefJerkeySelected);
  //   if (type === "baconJerky") setBaconJerkeySelected(!baconJerkeySelected);
  //   if (type === "turkeyJerky") setTurkeyJerkeySelected(!turkeyJerkeySelected);
  // }
  function onToggleNav() {
    dispatch(onCloseNav());
  }

  function handleBeefJerkyClick() {
    dispatch(updateBeefJerkySelected());
  }
  function handleInputChange(e) {
    setQuery(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (query === "") return;
    const formattedQuery = query.toLowerCase();
    const newSearchQuery = products.filter(
      (item) =>
        item.name.toLowerCase().includes(formattedQuery) ||
        item.type.toLowerCase().includes(formattedQuery)
    );

    dispatch(updateSearchQuery(newSearchQuery));
  }
  return (
    <div className="absolute z-10n">
      <div
        className={`fixed w-screen h-screen bg-stone-900 opacity-30 `}
        onClick={() => onToggleNav()}
      ></div>
      <nav className="w-[70dvw] md:w-[50dvh] min-h-screen bg-stone-300  sticky">
        <h1 className="text-center font-bold text-xl pt-4">Wood Creek Jerky</h1>

        <form
          className="relative flex items-center pt-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search"
            className="relative rounded-lg w-full mx-4 px-2 py-0.5 placeholder:text-gray-200"
            value={query}
            onChange={handleInputChange}
          />
          <span className="absolute right-5">🔍</span>
        </form>

        <div className="pt-2">
          <ul className="  py-5">
            <NavItem href="/" type="link">
              HOME
            </NavItem>
            <NavItem href="/shop" type="link">
              SHOP
            </NavItem>
            <NavItem onClick={handleBeefJerkyClick} className="relative">
              BEEF JERKY {beefJerkySelected ? <span>⬆</span> : <span>⬇</span>}
            </NavItem>
            {beefJerkySelected === true && <DropdownBox type="beef jerky" />}
            <NavItem
              href="./bacon-jerkey"
              onClick={() => dispatch(updateBaconJerkySelected())}
            >
              BACON JERKY
              {baconJerkySelected ? <span>⬆</span> : <span>⬇</span>}
            </NavItem>
            {baconJerkySelected === true && <DropdownBox type="bacon jerky" />}
            <NavItem
              href="./turkey-jerkey"
              onClick={() => dispatch(updateTurkeyJerkySelected())}
            >
              TURKEY JERKY
              {turkeyJerkySelected ? <span>⬆</span> : <span>⬇</span>}
            </NavItem>
            {turkeyJerkySelected && <DropdownBox type="turkey jerky" />}
            <NavItem type="link" href="/subscription">
              SUBSCRIPTION
            </NavItem>
            <NavItem type="link" href="/login">
              LOGIN
            </NavItem>
            <NavItem type="link" href="/newsletter">
              NEWSLETTER
            </NavItem>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
