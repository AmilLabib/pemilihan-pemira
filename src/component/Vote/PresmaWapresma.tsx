import React from "react";

type Candidate = {
  name: string;
  image?: string;
};

type Pair = {
  presma: Candidate;
  wapresma: Candidate;
};

// Dummy Data
const defaultPairs: Pair[] = [
  {
    presma: { name: "Muhammad Advaita Yudhapratidina Hermansyah" },
    wapresma: { name: "Arridho Rizki Ananda" },
  },
  {
    presma: { name: "Muhammad Naufal Prananda" },
    wapresma: { name: "Agustian Rafif Setya" },
  },
  {
    presma: { name: "Rally Al Farouq" },
    wapresma: { name: "Farid Wicaksono" },
  },
];

export interface PresmaWapresmaProps {
  pairs?: Pair[];
  title?: string;
}

const PresmaWapresma: React.FC<PresmaWapresmaProps> = ({
  pairs = defaultPairs,
  title = "Pilih Presma - Wapresma",
}) => {
  return (
    <div className="bg-white rounded-2xl py-2 px-7 shadow-sm w-[90vw] mx-auto">
      <h2 className="text-[#003b4f] text-2xl font-extrabold mb-2">{title}</h2>
      <hr className="border-t-2 border-gray-200 mb-4" />

      <div className="flex flex-col md:flex-row gap-5 items-stretch">
        {pairs.map((pair, idx) => (
          <div
            className="flex-1 bg-white hover:bg-[#eaf9ff] hover:border-[#102a71] rounded-lg p-4 relative hover:bottom-2 border-2 border-gray-200 min-w-[200px] transition-all duration-400"
            key={idx}
            style={{ cursor: "pointer" }}
          >
            <div className="absolute left-3 bg-[#123a73] text-white px-3 py-1 rounded-md font-bold text-base">
              No. {idx + 1}
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="w-full flex flex-col items-center">
                <div className="w-45 h-60 bg-gradient-to-b from-cyan-100 to-sky-100 rounded-lg shadow-inner" />
                <div className="mt-2 bg-white border border-gray-200 py-2 px-4 rounded-md w-[90%] text-center font-regular font-league text-[#0b2b3a] whitespace-normal">
                  {pair.presma.name}
                </div>
              </div>

              <div className="w-full flex flex-col items-center">
                <div className="w-45 h-60 bg-gradient-to-b from-cyan-100 to-sky-100 rounded-lg shadow-inner" />
                <div className="mt-2 bg-white border border-gray-200 py-2 px-4 rounded-md w-60 text-center font-regular font-league text-[#0b2b3a] whitespace-normal">
                  {pair.wapresma.name}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PresmaWapresma;
