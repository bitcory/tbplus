'use client';

import Link from 'next/link';
import { BookOpen, GraduationCap, Palette, Brush, Camera, Sun, Film, ClipboardList, FileText, FolderOpen, Sparkles } from 'lucide-react';

const categoryIconMap = {
  '튜토리얼': BookOpen,
  '전문가 과정': GraduationCap,
  '스타일(STYLE)': Palette,
  '매체(MEDIUM)': Brush,
  '카메라(CAMERA)': Camera,
  '조명(LIGHTING)': Sun,
  '영상(VIDEO)': Film,
  '실습과제': ClipboardList,
  'TOOLB': FileText,
  '자료실': FolderOpen,
  '프롬프트맛집': Sparkles,
};

export default function ContentCard({ slug, title, koreanTitle, prompt, images, videos, category }) {
  const isVideo = category === '영상(VIDEO)';
  const thumbnail = isVideo
    ? (videos && videos.length > 0 ? videos[0].src : null)
    : (images && images.length > 0 ? images[0].src : null);
  const IconComp = categoryIconMap[category] || FileText;

  return (
    <Link
      href={`/guide/${slug}`}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
    >
      {/* Image area */}
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center overflow-hidden">
        {isVideo && thumbnail ? (
          <video
            src={thumbnail}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            muted
            playsInline
            onMouseEnter={(e) => e.target.play()}
            onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }}
          />
        ) : thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <IconComp className="w-16 h-16 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
        )}
      </div>

      {/* Content area */}
      <div className="p-6">
        <h3 className="text-lg font-bold mb-1 text-black group-hover:text-orange-500 transition-colors line-clamp-2">
          {title}
        </h3>
        {koreanTitle && koreanTitle !== title && (
          <p className="text-sm text-gray-600 mb-3">{koreanTitle}</p>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {category && (
            <span className="px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
              {category}
            </span>
          )}
          {prompt && (
            <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium truncate max-w-[200px]">
              {prompt}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
