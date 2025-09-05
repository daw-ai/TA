import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';

export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  return (
    <div>
      {/* Video thumbnail */}
      <div className="relative flex justify-center items-center" data-aos="zoom-y-out" data-aos-delay="450">
        <div className="flex flex-col justify-center">
          <Image src={thumb} width={thumbWidth} height={thumbHeight} alt={thumbAlt} />
          <button
            className="absolute top-full flex items-center transform -translate-y-1/2 bg-white rounded-full font-medium group p-4 shadow-lg"
            onClick={() => setIsOpen(true)}
            aria-label="Watch the video"
          >
            <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-20c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8zM11 16l6-4-6-4z" />
            </svg>
            <span className="ml-3">Watch the full video</span>
          </button>
        </div>
      </div>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />
        <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-4xl mx-auto">
          <button
            className="absolute top-0 right-0 mt-2 mr-2 text-white hover:text-gray-300"
            onClick={() => setIsOpen(false)}
          >
            &times;
          </button>
          <video
            ref={videoRef}
            width={videoWidth}
            height={videoHeight}
            loop
            controls
            className="w-full h-auto"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Dialog>
    </div>
  );
}

