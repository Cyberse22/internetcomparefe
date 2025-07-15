"use client";

import { InternetPackage } from "../data/mockPackages";

interface CardProps {
  data: InternetPackage;
  onClick: (pkg: InternetPackage) => void;
}

const InternetCard = ({data, onClick}: CardProps) => {

  return (
    <div className="w-[300px] h-[400px] bg-white shadow-md rounded-xl p-5 border hover:shadow-xl transition cursor-pointer" 
      onClick={() => onClick(data)}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Internet Card</h2>
      <p className="text-gray-600">{data.provider}</p>
      <p className="text-lg font-semibold mt-2">{data.name}</p>
      <p className="text-gray-500 mt-1">Price: {data.price.toLocaleString()} VND</p>
      <p className="text-gray-500 mt-1">Duration: {data.duration}</p>
      <p className="text-gray-500 mt-1">Data: {data.data}</p>
      <p className="text-gray-500 mt-1">Call: {data.call}</p>
    </div>
  );
}

export default InternetCard;