"use client";

import { useState } from "react";
import { InternetPackage } from "../data/mockPackages";

interface Props {
  packages: InternetPackage[];
}

const CompareTableHorizontal = ({ packages }: Props) => {
  const [selectedPackages, setSelectedPackages] = useState(packages);

  const handleRemove = (id: string) => {
    setSelectedPackages((prev) => prev.filter((pkg) => pkg.id !== id));
  };

  if (selectedPackages.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-4">
        Không có gói nào để so sánh.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto bg-gray-50 rounded-xl shadow p-6">
      <table className="min-w-full bg-gray-400 border border-gray-200 text-sm text-left">
        <thead>
          <tr>
            <th className="text-base font-semibold px-4 py-3 w-40">Thuộc tính</th>
            {selectedPackages.map((pkg) => (
              <th key={pkg.id} className="text-base font-semibold px-4 py-3 relative group">
                {pkg.name}
                <button
                  onClick={() => handleRemove(pkg.id)}
                  className="absolute top-1 right-2 text-red-600 font-bold opacity-70 hover:opacity-100"
                  title="Bỏ gói này"
                >
                  ❌
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="px-4 py-2 font-medium">Nhà mạng</td>
            {selectedPackages.map((pkg) => (
              <td key={pkg.id} className="px-4 py-2">{pkg.provider}</td>
            ))}
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 font-medium">Giá</td>
            {selectedPackages.map((pkg) => (
              <td key={pkg.id} className="px-4 py-2">{pkg.price.toLocaleString()} VND</td>
            ))}
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 font-medium">Thời gian</td>
            {selectedPackages.map((pkg) => (
              <td key={pkg.id} className="px-4 py-2">{pkg.duration}</td>
            ))}
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 font-medium">Data</td>
            {selectedPackages.map((pkg) => (
              <td key={pkg.id} className="px-4 py-2">{pkg.data}</td>
            ))}
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 font-medium">Tốc độ</td>
            {selectedPackages.map((pkg) => (
              <td key={pkg.id} className="px-4 py-2">{pkg.speed}</td>
            ))}
          </tr>
          <tr className="border-t">
            <td className="px-4 py-2 font-medium">Gọi</td>
            {selectedPackages.map((pkg) => (
              <td key={pkg.id} className="px-4 py-2">{pkg.call}</td>
            ))}
          </tr>
          {selectedPackages.some(pkg => pkg.note) && (
            <tr className="border-t">
              <td className="px-4 py-2 font-medium">Ghi chú</td>
              {selectedPackages.map((pkg) => (
                <td key={pkg.id} className="px-4 py-2">{pkg.note || "Không có"}</td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CompareTableHorizontal;
