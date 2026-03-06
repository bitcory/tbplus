'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProtectedContent from '../components/ProtectedContent';
import ContentCard from '../components/ContentCard';
import { categories, getCategoryItems } from '../data/guideData';
import { BookOpen, GraduationCap, Palette, Brush, Aperture, Sun, Film, User } from 'lucide-react';

const iconMap = {
  BookOpen, GraduationCap, Palette, Brush, Aperture, Sun, Film, User,
};

// 이미지가이드 페이지에 표시할 카테고리만 필터
const imageGuideIds = ['style', 'medium', 'camera', 'lighting'];
const guideCategories = categories.filter(c => imageGuideIds.includes(c.id));

function GuideContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || 'style');

  useEffect(() => {
    if (tabParam && guideCategories.some(c => c.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const activeCategory = guideCategories.find(c => c.id === activeTab);
  const items = getCategoryItems(activeTab);
  const isExpert = activeTab === 'expert';

  const cardGrid = (
    <>
      {activeCategory?.subcategories ? (
        <div className="space-y-12">
          {activeCategory.subcategories.map((sub) => {
            const subItems = sub.items
              .map(key => {
                const data = getCategoryItems(activeTab).find(i => i.slug === key);
                return data;
              })
              .filter(Boolean);

            return (
              <div key={sub.name}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-orange-500 pl-4">
                  {sub.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {subItems.map((item) => (
                    <ContentCard
                      key={item.slug}
                      slug={item.slug}
                      title={item.title}
                      koreanTitle={item.koreanTitle}
                      prompt={item.prompt}
                      images={item.images}
                      category={activeCategory.name}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <ContentCard
              key={item.slug}
              slug={item.slug}
              title={item.title}
              koreanTitle={item.koreanTitle}
              prompt={item.prompt}
              images={item.images}
              category={activeCategory?.name}
            />
          ))}
        </div>
      )}

      {items.length === 0 && (
        <div className="text-center py-20 text-gray-500">
          <p className="text-xl">이 카테고리에는 아직 콘텐츠가 없습니다.</p>
        </div>
      )}
    </>
  );

  const mainBlock = (
    <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[95%] mx-auto">
        {/* Page title */}
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            {activeCategory?.name || '가이드'}
          </h1>
          <p className="text-gray-600 text-lg">
            AI 이미지/영상 생성에 필요한 기법들을 카테고리별로 살펴보세요
          </p>
        </div>

        {/* Banner */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl px-8 md:px-12 py-8 text-white shadow-xl">
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {activeCategory?.name || '전체 가이드'}
              </h2>
              <p className="text-lg opacity-90">
                {getCategoryDescription(activeTab)}
              </p>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {guideCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {Icon && <Icon className="w-4 h-4" />}
                {cat.name}
                {cat.protected && <span className="text-xs opacity-75">🔒</span>}
              </button>
            );
          })}
        </div>

        {cardGrid}
      </div>
    </main>
  );

  return (
    <div className="min-h-screen bg-white">
      <Header alwaysScrolled={true} />

      {isExpert ? (
        <ProtectedContent>{mainBlock}</ProtectedContent>
      ) : (
        mainBlock
      )}

      <Footer />
    </div>
  );
}

export default function GuidePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    }>
      <GuideContent />
    </Suspense>
  );
}

function getCategoryDescription(tabId) {
  const descriptions = {
    tutorial: 'AI 이미지/영상 생성의 기본부터 고급 기법까지 단계별 학습 가이드입니다.',
    expert: '전문가 수준의 프롬프트 작성법과 고급 테크닉을 배워보세요.',
    style: '디지털 페인팅, 애니메, 수채화 등 다양한 아트 스타일의 특징과 프롬프트를 학습하세요.',
    medium: '유화, 연필화, 사진 등 다양한 매체의 질감과 특성을 프롬프트로 표현하는 방법을 알아보세요.',
    camera: '클로즈업, 앵글, 구도 등 카메라 기법으로 이미지의 시각적 임팩트를 극대화하세요.',
    lighting: '자연광, 스튜디오 조명, 분위기 조명 등 빛의 마법으로 작품에 생동감을 불어넣으세요.',
    video: '카메라 무브먼트, 전환 효과, 모션 등 영상 제작 기법을 마스터하세요.',
    practice: '실습 과제를 통해 배운 기법들을 직접 적용해보세요.',
    library: 'AI 이미지/영상 생성 관련 유용한 자료와 블로그 포스트를 확인하세요.',
    'prompt-restaurant': '엄선된 프롬프트 레시피로 AI 창작의 맛을 더해보세요.',
  };
  return descriptions[tabId] || '';
}
