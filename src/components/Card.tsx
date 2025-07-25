"use client";

import { InternetPackage } from "../data/mockPackages";

interface CardProps {
  data: InternetPackage;
  onClick: (pkg: InternetPackage) => void;
}

const InternetCard = ({data, onClick}: CardProps) => {

  return (
    <div className="w-[300px] h-[400px] bg-white/80 shadow-md rounded-xl p-5 border-2 border-cyan-300 hover:shadow-xl transition cursor-pointer flex flex-col items-center justify-between text-center" 
      onClick={() => onClick(data)}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Internet Card</h2>
      <p className="text-gray-600">{data.provider}</p>
      <p className="text-lg font-semibold">{data.name}</p>
      <p className="text-gray-500">Price: {data.price.toLocaleString()} VND</p>
      <p className="text-gray-500">Duration: {data.duration}</p>
      <p className="text-gray-500">Data: {data.data}</p>
      <p className="text-gray-500">Call: {data.call}</p>
    </div>
  );
}

export default InternetCard;