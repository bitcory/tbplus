import React from 'react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-4 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-orange-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            합리적인 요금제
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            당신의 창작 여정에 딱 맞는 플랜을 선택하세요.
            <br />
            언제든지 변경하고 해지할 수 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* 초급클래스 */}
          <div className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-900/10">
            <h3 className="text-2xl font-bold text-white mb-2">초급클래스</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">₩100,000</span>
            </div>
            <p className="text-gray-400 mb-8 h-12">
              AI 이미지 생성의 기초를 배우는<br />입문자를 위한 클래스
            </p>
            <button className="w-full py-4 rounded-xl bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors mb-8">
              신청하기
            </button>
            <ul className="space-y-4 text-gray-300">
              <PricingCheck color="text-green-500">기본 가이드 접근</PricingCheck>
              <PricingCheck color="text-green-500">튜토리얼 콘텐츠</PricingCheck>
              <PricingCheck color="text-green-500">커뮤니티 지원</PricingCheck>
            </ul>
          </div>

          {/* 중급클래스 */}
          <div className="group relative p-8 rounded-2xl bg-gray-900/80 border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:-translate-y-2 shadow-2xl shadow-orange-900/20">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold text-white tracking-wider uppercase">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">중급클래스</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">₩250,000</span>
            </div>
            <p className="text-gray-400 mb-8 h-12">
              본격적인 창작 활동을 위한<br />심화 과정 클래스
            </p>
            <button className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold hover:opacity-90 transition-opacity mb-8 shadow-lg shadow-orange-900/30">
              신청하기
            </button>
            <ul className="space-y-4 text-gray-300">
              <PricingCheck color="text-orange-500">전체 가이드 무제한 접근</PricingCheck>
              <PricingCheck color="text-orange-500">전문가 과정 포함</PricingCheck>
              <PricingCheck color="text-orange-500">실습 과제 및 피드백</PricingCheck>
              <PricingCheck color="text-orange-500">우선 고객 지원</PricingCheck>
            </ul>
          </div>

          {/* 마스터클래스 */}
          <div className="group relative p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-orange-900/10">
            <h3 className="text-2xl font-bold text-white mb-2">마스터클래스</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold text-white">₩450,000</span>
            </div>
            <p className="text-gray-400 mb-8 h-12">
              팀과 기업을 위한<br />맞춤형 프리미엄 교육
            </p>
            <button className="w-full py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition-colors mb-8">
              신청하기
            </button>
            <ul className="space-y-4 text-gray-300">
              <PricingCheck color="text-gray-400">기업 맞춤 커리큘럼</PricingCheck>
              <PricingCheck color="text-gray-400">전담 강사 배정</PricingCheck>
              <PricingCheck color="text-gray-400">팀 단위 특강</PricingCheck>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCheck({ children, color }) {
  return (
    <li className="flex items-center">
      <svg className={`w-5 h-5 ${color} mr-3`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
      {children}
    </li>
  );
}
