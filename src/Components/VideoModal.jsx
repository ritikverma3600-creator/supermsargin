import { FaTimes } from "react-icons/fa";

function VideoModal({ onClose, videoUrl }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white text-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 shadow"
        >
          <FaTimes />
        </button>

        {/* VIDEO */}
        <iframe
          src={videoUrl}
          className="w-full aspect-video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default VideoModal;