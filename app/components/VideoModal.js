'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!video) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full mx-4 animate-modalFadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        <video
          src={video.src}
          controls
          autoPlay
          className="w-full max-h-[80vh] rounded-2xl"
        />

        {video.caption && (
          <p className="text-center text-white/90 mt-4 text-lg">{video.caption}</p>
        )}
      </div>
    </div>
  );
}
