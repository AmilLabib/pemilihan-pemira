import logo from "../../assets/logo.webp";

const Header: React.FC = () => {
  return (
    <header className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="logo"
          className="w-8 h-8 object-contain rounded-full"
        />
        <h1 className="text-base font-extrabold text-[#102a71] text-shadow-lg">
          Pemilihan Raya
        </h1>
        <p className="text-xs text-[#102a71] text-shadow-lg -mt-1">
          Politeknik Keuangan Negara STAN 2025
        </p>
      </div>
    </header>
  );
};

export default Header;
