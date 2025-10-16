import bg1 from "../assets/bg1.webp";
import cert from "../assets/sertif1.png";
import Header from "../component/Sertif/Header";

function Sertif() {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center justify-center py-4"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <Header />
      <div className="w-[65vw] bg-[#102a71]/60 py-6 px-24 items-center mx-auto mt-4">
        <h1 className="text-[#ffd358] text-3xl font-extrabold text-center font-league">
          Sertifikat E-Voting
        </h1>
        <p className="text-center text-white my-2 font-poppins">
          Terima Kasih atas partisipasi Anda dalam Pemilihan Raya 2025
        </p>

        <div className="w-full overflow-hidden relative rounded-md flex flex-col items-center justify-center">
          <img
            src={cert}
            alt="certificate"
            className=" inset-0 w-2/3 object-contain"
          />
          <p className="mt-4 text-sm text-white font-poppins">
            • Sertifikat akan dikirim ke email masing-masing mahasiswa pada
            pengumuman selanjutnya
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-yellow-300 text-[#102a71] px-6 py-3 rounded-full font-poppins font-bold shadow hover:brightness-80"
            style={{ cursor: "pointer" }}
          >
            Kembali ke Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sertif;
