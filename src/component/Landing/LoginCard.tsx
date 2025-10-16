import React, { useState } from "react";

interface CardProps {
  onSubmit?: (nim: string, token: string) => void;
}

const Card: React.FC<CardProps> = ({ onSubmit }) => {
  const [nim, setNim] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nim || !token) {
      alert("Masukkan NIM dan TOKEN");
      return;
    }
    if (onSubmit) {
      onSubmit(nim, token);
    } else {
      // default behavior: navigate to vote page
      window.location.href = "/vote";
    }
  };

  return (
    <div className="max-w-lg h-[62vh] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 rounded-2xl border border-gray-200 shadow-lg p-6 md:p-8 mr-8 h-full flex flex-col"
        aria-label="Login PEMIRA"
      >
        <h2 className="font-league text-center text-3xl font-extrabold text-[#002a45] mb-6">
          Log-In PEMIRA
        </h2>

        <label className="block text-xl text-slate-600 mb-2">NIM</label>
        <input
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          className="font-poppins w-full rounded-md border border-gray-200 p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-sky-200"
          placeholder=""
          aria-label="NIM"
        />

        <label className="block text-xl text-slate-600 mb-2">TOKEN</label>
        <input
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="font-poppins w-full rounded-md border border-gray-200 p-3 mb-6 focus:outline-none focus:ring-2 focus:ring-sky-200"
          placeholder=""
          aria-label="TOKEN"
        />

        <button
          type="submit"
          className="text-lg mt-8 w-full bg-[#ffd358] hover:bg-[#002a45] hover:text-[#ffd358] text-[#002a45] font-bold py-3 rounded-lg shadow-inner"
          style={{ cursor: "pointer" }}
        >
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Card;
