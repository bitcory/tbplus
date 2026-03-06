'use client';

import Link from 'next/link';
import { useAuth, SignInButton } from '@clerk/nextjs';
import { useClerkConfigured } from './ClerkWrapper';

export default function Hero() {
  const clerkConfigured = useClerkConfigured();
  const { isSignedIn } = useAuth();
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(/images/main.png)' }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
        <h1 className="text-5xl sm:text-6xl md:text-5xl lg:text-7xl font-bold mb-7 leading-tight">
          <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            AI 창작의 기술을 더하다
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
            TOOLB
          </span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          카메라, 조명, 스타일, 매체의
          <br />
          모든 AI 이미지/영상 생성 기법을 한눈에
        </p>

        <div className="flex flex-row gap-3 justify-center items-center mb-16">
          {clerkConfigured && !isSignedIn ? (
            <SignInButton mode="modal">
              <button className="group relative w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-base sm:text-lg font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:from-orange-600 hover:to-red-600">
                <span className="relative z-10 flex items-center gap-2">
                  가이드 시작하기
                  <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
            </SignInButton>
          ) : (
            <Link
              href="/guide"
              className="group relative w-auto px-8 sm:px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-base sm:text-lg font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:from-orange-600 hover:to-red-600"
            >
              <span className="relative z-10 flex items-center gap-2">
                가이드 시작하기
                <span className="inline-block group-hover:translate-x-1 transition-transform">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 opacity-0 group-hover:opacity-20 transition-opacity" />
            </Link>
          )}
          <button
            onClick={() => scrollToSection('features')}
            className="group relative w-auto px-5 sm:px-9 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white rounded-full text-base sm:text-lg font-bold overflow-hidden transition-all hover:scale-105 hover:bg-white/20 hover:border-white hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center gap-2">
              더 알아보기
              <span className="inline-block group-hover:translate-y-0.5 transition-transform">↓</span>
            </span>
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-white/90">
          <div>
            <div className="text-3xl font-bold">100+</div>
            <div className="text-sm">기법 가이드</div>
          </div>
          <div>
            <div className="text-3xl font-bold">7개</div>
            <div className="text-sm">카테고리</div>
          </div>
          <div>
            <div className="text-3xl font-bold">400+</div>
            <div className="text-sm">예시 이미지</div>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollToSection('features')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce cursor-pointer"
        aria-label="아래로 스크롤"
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}
