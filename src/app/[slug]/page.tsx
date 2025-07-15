"use client";

import InternetCard from "@/src/components/Card";
import CardModal from "@/src/components/CardModal";
import { InternetPackage, internetPackages } from "@/src/data/mockPackages";
import { use, useState } from "react";

type Params = {
    params: {
        slug: string;
    };
};

const mockData = {
    viettel: "Viettel là nhà mạng lớn nhất Việt Nam...",
    mobifone: "MobiFone cung cấp dịch vụ ổn định...",
    vinaphone: "VinaPhone với gói 4G và 5G linh hoạt...",
    fpt: "FPT Telecom nổi tiếng với dịch vụ internet cáp quang...",
    vnpt: "VNPT cung cấp dịch vụ internet và truyền hình chất lượng cao...",
};

const ProviderPage = ({params}: {params: Promise<{ slug: string}>}) => {

    const { slug } = use(params);
    const [selected, setSelected] = useState<InternetPackage | null>(null);
    const providerInfo = mockData[slug as keyof typeof mockData]; // Replace with dynamic data fetching based on slug

    const providerPackages = internetPackages.filter(
        (pkg) => pkg.provider.toLowerCase() === slug.toLowerCase()
    );

    if (!providerInfo) {
        return <div className="text-red-500">Thông tin không có sẵn cho nhà mạng này.</div>;
    }

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 p-10">
            <h1 className="text-3xl font-bold mb-4 capitalize">{slug}</h1>
            <p className="mb-8 text-lg">{providerInfo}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {providerPackages.length > 0 ? (
                    providerPackages.map((pkg) => (
                        <InternetCard key={pkg.id} data={pkg} onClick={() => setSelected(pkg)}/>
                    ))
                ) : (
                    <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-center text-gray-500">
                        Không có gói cước nào cho nhà mạng này.
                    </div>
                )}
            </div>

            <CardModal data={selected} onClose={() => setSelected(null)} />
        </div>
    );
}

export default ProviderPage;