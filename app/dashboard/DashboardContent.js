'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Header from '../components/Header';
import { getUserRole, isAdmin } from '../lib/auth';

export default function DashboardContent() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/');
    }
  }, [isLoaded, isSignedIn, router]);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header alwaysScrolled={true} />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              안녕하세요, {user.firstName || user.username || '사용자'}님!
            </h1>
            <p className="text-gray-600">AI TOOLBEE GUIDE 대시보드에 오신 것을 환영합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">학습 진도</h3>
                <span className="text-3xl">📚</span>
              </div>
              <p className="text-3xl font-bold text-orange-500">12</p>
              <p className="text-sm text-gray-600 mt-2">완료한 가이드</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">실습 과제</h3>
                <span className="text-3xl">📝</span>
              </div>
              <p className="text-3xl font-bold text-orange-500">3</p>
              <p className="text-sm text-gray-600 mt-2">제출한 과제</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">멤버십</h3>
                <span className="text-3xl">🎫</span>
              </div>
              <p className="text-3xl font-bold text-orange-500">Pro</p>
              <p className="text-sm text-gray-600 mt-2">현재 플랜</p>
            </div>
          </div>

          <AccountStatusCard user={user} />

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">내 정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-600 mb-1">이름</p>
                <p className="text-lg font-medium text-gray-900">{user.fullName || '설정되지 않음'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">이메일</p>
                <p className="text-lg font-medium text-gray-900">{user.primaryEmailAddress?.emailAddress || '이메일 없음'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">사용자명</p>
                <p className="text-lg font-medium text-gray-900">{user.username || '설정되지 않음'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">가입일</p>
                <p className="text-lg font-medium text-gray-900">{new Date(user.createdAt).toLocaleDateString('ko-KR')}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">최근 학습</h2>
            <div className="space-y-4">
              {[
                { title: '클로즈업(Close-up) 가이드 학습', time: '2시간 전', icon: '📷' },
                { title: '골든아워 조명 실습 완료', time: '5시간 전', icon: '☀️' },
                { title: '디지털 페인팅 스타일 학습', time: '1일 전', icon: '🎨' },
                { title: '튜토리얼 Block 3 완료', time: '3일 전', icon: '📖' },
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{activity.icon}</span>
                    <div>
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function AccountStatusCard({ user }) {
  const role = getUserRole(user);
  const adminUser = isAdmin(user);

  const statusConfig = {
    admin: { label: '관리자', color: 'purple', desc: '모든 콘텐츠에 접근할 수 있습니다.' },
    approved: { label: '승인됨', color: 'green', desc: '모든 콘텐츠에 접근할 수 있습니다.' },
    pending: { label: '승인 대기 중', color: 'yellow', desc: '관리자 승인 후 콘텐츠를 이용하실 수 있습니다.' },
    rejected: { label: '접근 거부됨', color: 'red', desc: '콘텐츠 접근 권한이 없습니다. 문의: ggamsire@gmail.com' },
  };

  const config = statusConfig[role] || statusConfig.pending;
  const colorMap = {
    purple: 'bg-purple-100 text-purple-700 border-purple-200',
    green: 'bg-green-100 text-green-700 border-green-200',
    yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    red: 'bg-red-100 text-red-700 border-red-200',
  };

  return (
    <div className={`rounded-2xl p-6 shadow-lg border mb-8 ${colorMap[config.color]}`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold mb-1">계정 상태</h3>
          <p className="text-sm opacity-80">{config.desc}</p>
        </div>
        <span className="px-4 py-1.5 rounded-full text-sm font-bold bg-white/50">
          {config.label}
        </span>
      </div>
      {adminUser && (
        <a href="/admin" className="inline-block mt-3 text-sm font-medium underline hover:no-underline">
          관리자 페이지 이동
        </a>
      )}
    </div>
  );
}
