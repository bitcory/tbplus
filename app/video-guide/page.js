'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentCard from '../components/ContentCard';
import { categories, getCategoryItems } from '../data/guideData';
import { Film } from 'lucide-react';

const videoCategory = categories.find(c => c.id === 'video');
const subcategories = videoCategory?.subcategories || [];

function VideoGuideContent() {
  const searchParams = useSearchParams();
  const subParam = searchParams.get('sub');
  const [activeSub, setActiveSub] = useState(subParam || subcategories[0]?.name || '');

  const allItems = getCategoryItems('video');
  const activeSc = subcategories.find(s => s.name === activeSub);
  const filteredItems = activeSc
    ? activeSc.items.map(key => allItems.find(i => i.slug === key)).filter(Boolean)
    : allItems;

  return (
    <div className="min-h-screen bg-white">
      <Header alwaysScrolled={true} />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[95%] mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              영상가이드
            </h1>
            <p className="text-gray-600 text-lg">
              카메라 무브먼트, 전환 효과, 모션 등 영상 제작 기법을 마스터하세요
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl px-8 md:px-12 py-8 text-white shadow-xl">
              <div className="max-w-3xl flex items-center gap-4">
                <Film className="w-10 h-10 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{activeSub || '영상가이드'}</h2>
                  <p className="text-lg opacity-90">
                    {getSubDescription(activeSub)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Subcategory Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {subcategories.map((sub) => (
              <button
                key={sub.name}
                onClick={() => setActiveSub(sub.name)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeSub === sub.name
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Film className="w-4 h-4" />
                {sub.name}
              </button>
            ))}
          </div>

          {/* Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <ContentCard
                key={item.slug}
                slug={item.slug}
                title={item.title}
                koreanTitle={item.koreanTitle}
                prompt={item.prompt}
                images={item.images}
                videos={item.videos}
                category="영상(VIDEO)"
              />
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p className="text-xl">아직 콘텐츠가 없습니다.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function VideoGuidePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    }>
      <VideoGuideContent />
    </Suspense>
  );
}

function getSubDescription(name) {
  const descriptions = {
    '카메라 무브먼트': '팬, 틸트, 달리, 트래킹 등 카메라 움직임 기법을 배워보세요.',
    '전환 효과': '컷, 페이드, 디졸브, 와이프 등 장면 전환 기법을 익혀보세요.',
    '모션 효과': '슬로모션, 타임랩스, 프리즈 프레임 등 모션 효과를 마스터하세요.',
  };
  return descriptions[name] || '영상 제작에 필요한 기법들을 카테고리별로 살펴보세요.';
}
