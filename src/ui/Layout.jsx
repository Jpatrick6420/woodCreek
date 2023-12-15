import { Outlet } from "react-router";
import Footer from "./Footer";
import Heading from "./Heading";
import Nav from "./Nav";
import { useSelector } from "react-redux";
function Layout() {
  const isNavOpen = useSelector((state) => state.ui.isNavOpen);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-[100dvh] w-screen">
      <div>
        <Heading />
        {isNavOpen && <Nav />}
      </div>

      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
