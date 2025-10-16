import React from "react";

type Candidate = {
  id: number;
  number: number;
  name: string;
  kelas?: string;
  image?: string;
};

const defaultCandidates: Candidate[] = [
  { id: 1, number: 1, name: "NAMA CALON 1", kelas: "Kelas 1A" },
  { id: 2, number: 2, name: "NAMA CALON 2", kelas: "Kelas 1B" },
  { id: 3, number: 3, name: "NAMA CALON 3", kelas: "Kelas 2A" },
  { id: 4, number: 4, name: "NAMA CALON 4", kelas: "Kelas 2B" },
  { id: 5, number: 5, name: "NAMA CALON 5", kelas: "Kelas 3A" },
  { id: 6, number: 6, name: "NAMA CALON 6", kelas: "Kelas 3B" },
  { id: 7, number: 7, name: "NAMA CALON 7", kelas: "Kelas 4A" },
  { id: 8, number: 8, name: "NAMA CALON 8", kelas: "Kelas 4B" },
  { id: 9, number: 9, name: "NAMA CALON 9", kelas: "Kelas 5A" },
  { id: 10, number: 10, name: "NAMA CALON 10", kelas: "Kelas 5B" },
  { id: 11, number: 11, name: "NAMA CALON 11", kelas: "Kelas 6A" },
  { id: 12, number: 12, name: "NAMA CALON 12", kelas: "Kelas 6B" },
];
export interface BlmProps {
  candidates?: Candidate[];
  title?: string;
}

const Blm: React.FC<BlmProps> = ({
  candidates = defaultCandidates,
  title = "Pilih Badan Legislatif Mahasiswa",
}) => {
  return (
    <div className="bg-white rounded-2xl py-3 px-7 shadow-sm w-[90vw] mx-auto">
      <h2 className="text-[#003b4f] text-2xl font-extrabold mb-2">{title}</h2>
      <hr className="border-t-2 border-gray-200 mb-4" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {candidates.map((candidate) => (
          <div
            className="bg-white hover:bg-[#eaf9ff] hover:border-[#102a71] rounded-lg p-4 relative transform hover:-translate-y-1 border-2 border-gray-200 transition duration-200"
            key={candidate.id}
            style={{ cursor: "pointer" }}
          >
            <div className="absolute left-3  bg-[#123a73] text-white px-3 py-1 rounded-md font-bold text-sm">
              No. {candidate.number}
            </div>

            <div className="flex flex-col gap-4 items-center">
              <div className="w-full flex flex-col items-center">
                <div className="mt-8 w-45 h-60 bg-gradient-to-b from-cyan-100 to-sky-100 rounded-lg shadow-inner" />
                <div className="mt-2 bg-white border border-gray-200 py-2 px-4 rounded-md w-3/4 text-center font-semibold text-[#0b2b3a] whitespace-normal">
                  {candidate.name}
                  <div className="text-sm text-gray-500 mt-1">
                    {candidate.kelas}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blm;
