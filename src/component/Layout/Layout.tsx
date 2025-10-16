import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Common/Nav";

const Layout: React.FC = () => {
  const { pathname } = useLocation();
  const hideNav = pathname === "/sertif" || pathname.startsWith("/sertif/");

  return (
    <>
      {!hideNav && <Nav />}
      <Outlet />
    </>
  );
};

export default Layout;
