import { useState } from "react";
import bg2 from "../assets/bg2.webp";
import PresmaWapresma from "../component/Vote/PresmaWapresma";
import Blm from "../component/Vote/Blm";
import Popup from "../component/Vote/Popup";

function Vote() {
  const [confirmOpen, setConfirmOpen] = useState(false);
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat pt-12"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <div className="container mx-auto min-h-screen px-8 pt-12 flex items-center">
        <PresmaWapresma />
      </div>
      <div className="container mx-auto min-h-screen px-8 pt-8 flex items-center">
        <Blm />
      </div>
      <div className="container mx-auto px-8 pt-6 pb-20 flex justify-center">
        <button
          type="button"
          onClick={() => setConfirmOpen(true)}
          className="font-league font-bold text-2xl w-[90vw] bg-[#102a71] text-white px-6 py-4 rounded-xl shadow hover:bg-[#58a2bd] transition"
          style={{ cursor: "pointer" }}
        >
          Submit Vote
        </button>
      </div>

      <Popup
        open={confirmOpen}
        onConfirm={() => {
          setConfirmOpen(false);
          window.location.href = "/sertif";
        }}
        onCancel={() => setConfirmOpen(false)}
      />
    </div>
  );
}

export default Vote;
