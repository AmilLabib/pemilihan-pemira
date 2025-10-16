import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import logo from "../../assets/logo.webp";

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full text-white ${
        isHome
          ? scrolled
            ? "bg-[#102a71]/75 backdrop-blur"
            : "border-none bg-transparent"
          : "bg-[#102a71]"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between ${
          scrolled || !isHome ? "border-b border-blue-900/25" : ""
        } px-8 py-4`}
      >
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="size-8 rounded-full bg-white p-0.5 lg:size-10"
          />
          <div className="flex flex-col">
            <h1 className="font-league text-sm font-bold lg:text-lg">
              Pemilihan Raya
            </h1>
            <h1 className="font-poppins font-regular -mt-1 text-xs lg:text-sm">
              Politeknik Keuangan Negara STAN
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
