'use client';

import { BookOpen, Camera, Sun } from 'lucide-react';
import Link from 'next/link';

const features = [
  {
    icon: BookOpen,
    title: '튜토리얼',
    description: 'AI 이미지/영상 생성의 기본부터 고급 기법까지 단계별 학습 가이드를 제공합니다.',
    color: 'from-purple-500 to-pink-500',
    href: '/guide?tab=tutorial',
  },
  {
    icon: Camera,
    title: '이미지 관련',
    description: '스타일, 매체, 카메라, 조명 등 이미지 생성에 필요한 모든 기법을 배워보세요.',
    color: 'from-yellow-500 to-orange-500',
    href: '/guide?tab=style',
  },
  {
    icon: Sun,
    title: '영상 관련',
    description: '카메라 무브먼트, 전환 효과, 모션 등 영상 제작 기법을 마스터하세요.',
    color: 'from-blue-500 to-cyan-500',
    href: '/guide?tab=video',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI TOOLBEE GUIDE란?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            AI 이미지/영상 생성에 필요한 모든 기법을 체계적으로 배워보세요
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={index}
                href={feature.href}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-br ${feature.color} transition-opacity duration-300 pointer-events-none`} />
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            <span className="font-bold text-purple-600">100개 이상</span>의 기법 가이드가 준비되어 있습니다
          </p>
          <Link
            href="/guide"
            className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
          >
            전체 가이드 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
