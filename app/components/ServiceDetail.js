'use client';

import { Aperture, Sun, Palette, Film } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: Palette,
    title: '스타일(STYLE)',
    subtitle: '다양한 아트 스타일로\n나만의 작품을 만들어보세요.',
    description: '디지털 페인팅, 컨셉 아트, 애니메, 수채화 등\n다양한 시각 스타일의 특징과 프롬프트를 배워보세요.',
    image: 'https://cdn.midjourney.com/9ff1acc2-9298-4cc5-9c2c-dd2807c7779e/0_0.png',
    reverse: false,
    href: '/guide?tab=style',
  },
  {
    icon: Aperture,
    title: '카메라(CAMERA)',
    subtitle: '전문적인 카메라 기법으로\n영상미를 극대화하세요.',
    description: '클로즈업부터 와이드샷, 로우앵글부터 버즈아이뷰까지\n다양한 촬영 기법의 효과와 활용법을 알아보세요.',
    image: 'https://cdn.midjourney.com/5d3dd455-e0f3-493c-82d0-60ab8e904afb/0_0.png',
    reverse: true,
    href: '/guide?tab=camera',
  },
  {
    icon: Sun,
    title: '조명(LIGHTING)',
    subtitle: '빛의 마법으로\n분위기를 완성하세요.',
    description: '골든아워, 렘브란트 조명, 네온 조명 등\n다양한 조명 기법으로 작품에 생동감을 불어넣으세요.',
    image: 'https://cdn.midjourney.com/74628670-4f77-466d-8c2d-a588a77a4e25/0_1.png',
    reverse: false,
    href: '/guide?tab=lighting',
  },
  {
    icon: Film,
    title: '영상(VIDEO)',
    subtitle: '역동적인 영상 기법으로\n이야기에 생명을 불어넣으세요.',
    description: '팬, 틸트, 달리 등 카메라 무브먼트부터\n컷, 디졸브 등 전환 효과까지 마스터하세요.',
    image: 'https://cdn.midjourney.com/ecfcd186-90cd-4674-a321-8643dbac907c/0_3.png',
    reverse: true,
    href: '/guide?tab=video',
  },
];

export default function ServiceDetail() {
  return (
    <section id="service" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto space-y-32">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      <Icon className="w-24 h-24" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <h4 className="text-2xl font-semibold text-gray-800 leading-relaxed whitespace-pre-line">
                  {service.subtitle}
                </h4>

                <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="group mt-4 inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:from-orange-600 hover:to-red-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    자세히 보기
                    <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
