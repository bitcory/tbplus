'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    name: '김수현',
    job: '디자이너',
    service: '카메라 가이드',
    serviceColor: 'text-orange-600',
    title: '카메라 앵글의 차이를 확실히 이해했어요',
    description: '로우앵글과 하이앵글의 차이, 클로즈업의 감정 전달 효과 등 직접 이미지를 비교하면서 배울 수 있어 정말 좋았습니다. 미드저니 프롬프트에 바로 적용할 수 있어요.',
  },
  {
    name: '이준호',
    job: 'AI 아티스트',
    service: '조명 가이드',
    serviceColor: 'text-yellow-600',
    title: '조명 하나로 분위기가 완전히 달라지네요',
    description: '렘브란트 조명, 골든아워 등 전문 용어만 들어봤는데, 실제 예시와 함께 보니 확실히 이해됐어요. 프롬프트에 조명 키워드를 넣으니 퀄리티가 확 올라갔습니다.',
  },
  {
    name: 'Yuki Tanaka',
    job: '영상 크리에이터',
    service: '스타일 가이드',
    serviceColor: 'text-pink-600',
    title: '다양한 아트 스타일을 한눈에 비교할 수 있어요',
    description: '디지털 페인팅, 수채화, 애니메 스타일 등 각각의 특징과 프롬프트를 정리해둬서 작업할 때 레퍼런스로 활용하기 딱 좋습니다.',
  },
  {
    name: '박지영',
    job: '웹툰 작가',
    service: '매체 가이드',
    serviceColor: 'text-green-600',
    title: '유화, 연필화 등 매체별 느낌을 잘 살릴 수 있게 됐어요',
    description: '각 매체의 질감과 특성을 프롬프트로 어떻게 표현하는지 배웠습니다. 실제 작업물의 퀄리티가 확 올라가서 감사해요.',
  },
  {
    name: '최민수',
    job: '프리랜서',
    service: '영상 가이드',
    serviceColor: 'text-blue-600',
    title: '영상 프롬프트 작성이 훨씬 수월해졌어요',
    description: '팬, 틸트, 달리 등 카메라 무브먼트와 전환 효과를 체계적으로 배울 수 있었어요. AI 영상 생성할 때 원하는 결과를 훨씬 정확하게 얻을 수 있게 됐습니다.',
  },
  {
    name: 'Ana Kim',
    job: '콘텐츠 크리에이터',
    service: '튜토리얼',
    serviceColor: 'text-purple-600',
    title: '체계적인 학습 과정이 인상적이었어요',
    description: '기초부터 고급 과정까지 단계별로 잘 구성되어 있어서, AI 이미지 생성을 처음 시작하는 분들에게 강력 추천합니다.',
  },
];

export default function Reviews() {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            수강생 후기
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            AI TOOLBEE GUIDE를 활용한 수강생들의 생생한 후기를 확인하세요.
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          )}

          <div
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[380px] bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow cursor-pointer border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white text-xl font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.job}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 leading-relaxed">
                    <span className={`${review.serviceColor} font-bold`}>{review.service}</span>{' '}
                    {review.title}
                  </h3>
                </div>

                <p className="text-gray-600 leading-relaxed line-clamp-5">
                  {review.description}
                </p>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          )}

          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          )}

          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-20"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
