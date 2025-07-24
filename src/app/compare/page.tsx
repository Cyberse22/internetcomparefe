"use client";

import InternetCard from "@/src/components/Card";
import CompareTable from "@/src/components/CompareTable";
import CompareTableHorizontal from "@/src/components/CompareTableHorizontal";
import { InternetPackage, internetPackages } from "@/src/data/mockPackages";
import { useState } from "react";

const ComparePage = () => {
    const [selected, setSelected] = useState<InternetPackage []>([]);

    const toggleSelect = (pkg: InternetPackage) => {
        setSelected((prev) => 
            prev.find((p) => p.id === pkg.id)
                ? prev.filter((p) => p.id !== pkg.id)
                : [...prev, pkg]
        );
    };

    return (
        <main className="p-10 min-h-screen bg-white justify-center items-center text-black rounded-2xl">
        <h1 className="text-3xl font-bold mb-6">Chọn các gói để so sánh</h1>

        {/* So sánh nếu có ít nhất 2 gói */}
        {selected.length >= 2 && (
            <>
            <h2 className="text-2xl font-bold mb-4">So sánh các gói đã chọn</h2>
            <CompareTableHorizontal packages={selected} />
            </>
        )}

        {/* Card hiển thị */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 mt-5 justify-items-center">
            {internetPackages.map((pkg) => (
            <InternetCard key={pkg.id} data={pkg} onClick={toggleSelect} />
            ))}
        </div>

        </main>
    )

};

export default ComparePage;