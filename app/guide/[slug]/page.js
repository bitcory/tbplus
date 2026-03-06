'use client';

import { use } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProtectedContent from '../../components/ProtectedContent';
import ContentDetail from '../../components/ContentDetail';
import { getGuideItem, getCategoryForSlug, getAdjacentItems } from '../../data/guideData';

export default function GuideDetailPage({ params }) {
  const { slug } = use(params);
  const item = getGuideItem(slug);
  const category = getCategoryForSlug(slug);
  const { prev, next } = getAdjacentItems(slug);

  if (!item) {
    return (
      <div className="min-h-screen bg-white">
        <Header alwaysScrolled={true} />
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
          <div className="max-w-5xl mx-auto text-center py-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">콘텐츠를 찾을 수 없습니다</h1>
            <p className="text-gray-600 mb-8">요청하신 가이드 콘텐츠가 존재하지 않습니다.</p>
            <a
              href="/guide"
              className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:scale-105 transition-all"
            >
              가이드 목록으로 돌아가기
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header alwaysScrolled={true} />

      {category?.id === 'expert' ? (
        <ProtectedContent>
          <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
            <ContentDetail
              item={{ ...item, slug }}
              category={category}
              prevItem={prev}
              nextItem={next}
            />
          </main>
        </ProtectedContent>
      ) : (
        <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-10">
          <ContentDetail
            item={{ ...item, slug }}
            category={category}
            prevItem={prev}
            nextItem={next}
          />
        </main>
      )}

      <Footer />
    </div>
  );
}
