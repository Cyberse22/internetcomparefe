"use client";

import { InternetPackage } from "../data/mockPackages";

interface CompareTableProps {
    packages: InternetPackage[];
}

const CompareTable = ({ packages }: CompareTableProps) => {
    if (packages.length === 0) {
        return <div className="text-center text-gray-500">Không có gói cước nào để so sánh.</div>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Tên gói</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Giá</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Thời gian</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Data</th>
                        <th className="px-6 py-3 border-b text-left text-sm font-medium text-gray-700">Tốc độ</th>
                    </tr>
                </thead>
                <tbody>
                    {packages.map((pkg) => (
                        <tr key={pkg.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 border-b">{pkg.name}</td>
                            <td className="px-6 py-4 border-b">{pkg.price} VND</td>
                            <td className="px-6 py-4 border-b">{pkg.speed}</td>
                            <td className="px-6 py-4 border-b">{pkg.duration} Time</td>
                            <td className="px-6 py-4 border-b">{pkg.data} GB</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CompareTable;