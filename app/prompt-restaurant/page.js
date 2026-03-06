'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContentCard from '../components/ContentCard';
import { getCategoryItems } from '../data/guideData';
import { Sparkles } from 'lucide-react';

export default function PromptRestaurantPage() {
  const items = getCategoryItems('prompt-restaurant');

  return (
    <div className="min-h-screen bg-white">
      <Header alwaysScrolled={true} />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
        <div className="max-w-[95%] mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              프롬프트맛집
            </h1>
            <p className="text-gray-600 text-lg">
              엄선된 프롬프트 레시피로 AI 창작의 맛을 더해보세요
            </p>
          </div>

          <div className="mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl px-8 md:px-12 py-8 text-white shadow-xl">
              <div className="max-w-3xl flex items-center gap-4">
                <Sparkles className="w-10 h-10 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">프롬프트맛집</h2>
                  <p className="text-lg opacity-90">
                    엄선된 프롬프트 레시피로 AI 창작의 맛을 더해보세요.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <ContentCard
                key={item.slug}
                slug={item.slug}
                title={item.title}
                koreanTitle={item.koreanTitle}
                prompt={item.prompt}
                images={item.images}
                category="프롬프트맛집"
              />
            ))}
          </div>

          {items.length === 0 && (
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
