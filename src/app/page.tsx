"use client";

import { useState  } from "react";
import InternetCard from "../components/Card";
import { InternetPackage, internetPackages } from "../data/mockPackages";
import CardModal from "../components/CardModal";
import CompareTableHorizontal from "../components/CompareTableHorizontal";

const HomePage = () => {
  const [selectedPackage, setSelectedPackage] = useState<InternetPackage | null>(null);

  return (
    <main className="min-h-screen bg-black text-white p-10 rounded-2xl">
      <h1 className="text-3xl font-bold mb-8">So sánh gói mạng</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {internetPackages.map((pkg) => (
          <InternetCard 
            key={pkg.id} 
            data={pkg} 
            onClick={(data) => setSelectedPackage(data)} 
          />
        ))}
      </div>

      <CardModal data={selectedPackage} onClose={() => setSelectedPackage(null)}/>
    </main>
  );
}

export default HomePage;