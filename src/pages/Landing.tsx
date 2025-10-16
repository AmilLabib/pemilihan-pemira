import bg1 from "../assets/bg1.webp";
import Card from "../component/Landing/LoginCard";

function Landing() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="container mx-auto min-h-screen px-8 py-12 flex items-center">
        {/* Left: large heading */}
        <div className="flex-1 text-left">
          <h1 className="font-league text-white tracking-tight font-extrabold text-4xl leading-tight text-shadow-xl">
            Selamat Datang di
          </h1>
          <h2 className="font-league text-[#ffd358] text-5xl font-extrabold leading-tight text-shadow-lg whitespace-nowrap">
            Website Pemilihan Raya 2025
          </h2>
        </div>

        {/* Right: card positioned to the right with fixed width */}
        <div className="w-1/2 ml-8 h-full ">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Landing;
