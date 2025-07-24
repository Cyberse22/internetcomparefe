"use client";

import { InternetPackage } from "../data/mockPackages";

interface ModalProps {
  data: InternetPackage | null; // Allow data to be null if no package is selected
  onClose: () => void;
}

const CardModal = ({data, onClose}: ModalProps) => {

  if (!data ) {
    return null; // If no data is provided, do not render the modal
  }

  return (
    <div className="fixed inset-0 bg-gray-300  bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[400px] p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          x
        </button>

        <h2 className="text-2xl font-bold mb-4 text-gray-800">{data.name}</h2>
        <p><strong>Nhà mạng:</strong>{data.provider}</p>
        <p><strong>Giá:</strong> {data.price.toLocaleString()} VND</p>
        <p><strong>Thời gian sử dụng:</strong> {data.duration}</p>
        <p><strong>Dung lượng:</strong> {data.data}</p>
        <p><strong>Gọi:</strong> {data.call}</p>
        {data.note && <p className="text-gray-500 mt-2"><strong>Ghi chú:</strong> {data.note}</p>}

        <a href={data.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Xem chi tiết
        </a>
      </div>
    </div>
  );
}

export default CardModal;