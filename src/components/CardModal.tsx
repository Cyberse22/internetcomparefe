"use client";

import { InternetPackage } from "../data/mockPackages";

interface ModalProps {
  data: InternetPackage | null;
  onClose: () => void;
}

const CardModal = ({ data, onClose }: ModalProps) => {
  if (!data) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
      onClick={onClose} // Click ngoài modal => tắt
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[400px] p-6 relative"
        onClick={(e) => e.stopPropagation()} // Chặn tắt modal khi click vào trong
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-black">{data.name}</h2>
        <p className="text-black">
          <strong>Nhà mạng:</strong> {data.provider}
        </p>
        <p className="text-black">
          <strong>Giá:</strong> {data.price.toLocaleString()} VND
        </p>
        <p className="text-black">
          <strong>Thời gian sử dụng:</strong> {data.duration}
        </p>
        <p className="text-black">
          <strong>Dung lượng:</strong> {data.data}
        </p>
        <p className="text-black">
          <strong>Gọi:</strong> {data.call}
        </p>
        {data.note && (
          <p className="text-black mt-2">
            <strong>Ghi chú:</strong> {data.note}
          </p>
        )}

        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Xem chi tiết
        </a>
      </div>
    </div>
  );
};

export default CardModal;
