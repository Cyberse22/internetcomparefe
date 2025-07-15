export type InternetPackage = {
  id: string;
  name: string;
  provider: "Viettel" | "Mobifone" | "Vinaphone" | "FPT" | "VNPT";
  price: number;
  duration: string;
  data: string;
  speed: string; // Optional, as not all packages may specify speed
  call: string;
  url: string;
  note?: string;
};

export const internetPackages: InternetPackage[] = [
  // --- Viettel ---
  {
    id: "5GV3",
    name: "5GV3",
    provider: "Viettel",
    price: 600000,
    duration: "90 ngày",
    data: "810 GB",
    speed: "100 Mbps",
    call: "250 phút",
    url: "https://vietteltelecom.vn/5gv3",
  },
  {
    id: "ST150K",
    name: "ST150K",
    provider: "Viettel",
    price: 150000,
    duration: "30 ngày",
    data: "90 GB",
    speed: "50 Mbps",
    call: "Miễn phí nội mạng Viettel",
    url: "https://vietteltelecom.vn/st150k",
  },

  // --- Mobifone ---
  {
    id: "M120",
    name: "M120",
    provider: "Mobifone",
    price: 120000,
    duration: "30 ngày",
    data: "90 GB",
    speed: "50 Mbps",
    call: "Miễn phí nội mạng MobiFone",
    url: "https://mobifone.vn/m120",
  },
  {
    id: "HD70",
    name: "HD70",
    provider: "Mobifone",
    price: 70000,
    duration: "30 ngày",
    data: "3.8 GB",
    speed: "Tối đa 20 Mbps",
    call: "Không bao gồm phút gọi",
    url: "https://mobifone.vn/hd70",
  },

  // --- Vinaphone ---
  {
    id: "VD149",
    name: "VD149",
    provider: "Vinaphone",
    price: 149000,
    duration: "30 ngày",
    data: "30 GB",
    speed: "Tối đa 20 Mbps",
    call: "Miễn phí nội mạng + 100 phút ngoại mạng",
    url: "https://vinaphone.vn/vd149",
  },
  {
    id: "BIG90",
    name: "BIG90",
    provider: "Vinaphone",
    price: 90000,
    duration: "30 ngày",
    data: "60 GB",
    speed: "Tối đa 20 Mbps",
    call: "Không bao gồm phút gọi",
    url: "https://vinaphone.vn/big90",
  },

  // --- FPT Telecom ---
  {
    id: "F5G100",
    name: "F5G100",
    provider: "FPT",
    price: 220000,
    duration: "30 ngày",
    data: "100 GB tốc độ cao",
    call: "Không hỗ trợ gọi",
    speed: "Tối đa 100 Mbps",
    note: "Áp dụng cho sim data FPT",
    url: "https://fpttelecom.vn/f5g100",
  },

  // --- VNPT ---
  {
    id: "VD89",
    name: "VD89",
    provider: "VNPT",
    price: 89000,
    duration: "30 ngày",
    data: "60 GB",
    speed: "Tối đa 20 Mbps",
    call: "Miễn phí nội mạng + 50 phút ngoại mạng",
    url: "https://vnpt.vn/vd89",
  },
  {
    id: "MAX100",
    name: "MAX100",
    provider: "VNPT",
    price: 100000,
    duration: "30 ngày",
    data: "30 GB",
    speed: "Tối đa 20 Mbps",
    call: "Không bao gồm phút gọi",
    url: "https://vnpt.vn/max100",
  },
];
