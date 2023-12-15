import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { onCloseNav } from "./uiSlice";
function NavItem({ href, children, onClick, type }) {
  const dispatch = useDispatch();

  function handleClick() {
    // e.preventDefault();
    if (onClick) {
      onClick();
    }
  }

  function handleNavClick() {
    dispatch(onCloseNav());
  }

  if (type === "link") {
    return (
      <li className="border-t border-b py-4 hover:bg-stone-400 hover:text-blue-800 hover:scale-y-110 cursor-pointer">
        <Link
          to={href}
          className="block w-full px-2"
          onClick={() => {
            handleNavClick();
          }}
        >
          {children}
        </Link>
      </li>
    );
  }

  if (type === "small-link") {
    return (
      <Link
        to={href}
        className="text-blue-700 hover:underline hover:text-blue-800 hover:scale-105 cursor-pointer "
        onClick={() => {
          handleNavClick();
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <li className="border-t border-b py-4 hover:bg-stone-400 hover:text-blue-800 hover:scale-y-110 cursor-pointer">
      <a
        className="hover:text-blue-800   block w-full  hover:scale-y-110 px-2"
        onClick={() => {
          handleClick();
        }}
      >
        {children}
      </a>
    </li>
  );
}

export default NavItem;
