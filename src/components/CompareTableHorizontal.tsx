import { InternetPackage } from "../data/mockPackages";

interface Props {
    packages: InternetPackage[];
}

const CompareTableHorizontal = ({ packages }: Props) => {
    return (
        <div className="overflow-x-auto bg-gray-50 rounded-xl shadow p-6">
            <table className="min-w-full bg-gray-400 border border-gray-200 text-sm text-left">
                <thead>
                    <tr>
                        <th className="text-base font-semibold px-4 py-3 w-40">Thuộc tính</th>
                        {packages.map((pkg) => (
                            <th key={pkg.id} className="text-base font-semibold px-4 py-3">
                                {pkg.name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t">
                        <td className="px-4 py-2 font-medium">Nhà mạng</td>
                        {packages.map((pkg) => (
                            <td key={pkg.id} className="px-4 py-2">{pkg.provider}</td>
                        ))}
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2 font-medium">Giá</td>
                        {packages.map((pkg) => (
                            <td key={pkg.id} className="px-4 py-2">{pkg.price} VND</td>
                        ))}
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2 font-medium">Thời gian</td>
                        {packages.map((pkg) => (
                            <td key={pkg.id} className="px-4 py-2">{pkg.duration}</td>
                        ))}
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2 font-medium">Data</td>
                        {packages.map((pkg) => (
                            <td key={pkg.id} className="px-4 py-2">{pkg.data}</td>
                        ))}
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2 font-medium">Tốc độ</td>
                        {packages.map((pkg) => (    
                            <td key={pkg.id} className="px-4 py-2">{pkg.speed}</td>
                        ))}
                    </tr>
                    <tr className="border-t">
                        <td className="px-4 py-2 font-medium">Gọi</td>
                        {packages.map((pkg) => (
                            <td key={pkg.id} className="px-4 py-2">{pkg.call}</td>
                        ))}
                    </tr>
                    {packages.some(pkg => pkg.note) && (
                        <tr className="border-t">
                            <td className="px-4 py-2 font-medium">Ghi chú</td>
                            {packages.map((pkg) => (
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