'use client';

import { useClerkConfigured } from './ClerkWrapper';
import { useUser, SignInButton } from '@clerk/nextjs';
import { getUserRole } from '../lib/auth';
import { Lock, Clock, ShieldX } from 'lucide-react';

export default function ProtectedContent({ children }) {
  const clerkConfigured = useClerkConfigured();

  if (!clerkConfigured) {
    return children;
  }

  return <ProtectedInner>{children}</ProtectedInner>;
}

function ProtectedInner({ children }) {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center py-40">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">로딩 중...</p>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="flex items-center justify-center py-40 px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="w-10 h-10 text-orange-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">로그인이 필요합니다</h2>
          <p className="text-gray-600 mb-8">
            이 콘텐츠를 보려면 먼저 로그인해주세요.
          </p>
          <SignInButton mode="modal">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg">
              로그인하기
            </button>
          </SignInButton>
        </div>
      </div>
    );
  }

  const role = getUserRole(user);

  if (role === 'pending') {
    return (
      <div className="flex items-center justify-center py-40 px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-yellow-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">승인 대기 중</h2>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">{user.fullName || user.firstName || '사용자'}</span>님의 계정이 아직 승인되지 않았습니다.
          </p>
          <p className="text-gray-500 text-sm mb-8">
            관리자의 승인 후 콘텐츠를 이용하실 수 있습니다.<br />
            문의: <a href="mailto:ggamsire@gmail.com" className="text-orange-500 hover:underline">ggamsire@gmail.com</a>
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 text-yellow-700 rounded-full text-sm font-medium">
            <Clock className="w-4 h-4" />
            승인 대기 중
          </div>
        </div>
      </div>
    );
  }

  if (role === 'rejected') {
    return (
      <div className="flex items-center justify-center py-40 px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldX className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">접근이 거부되었습니다</h2>
          <p className="text-gray-600 mb-8">
            이 콘텐츠에 대한 접근 권한이 없습니다.<br />
            문의: <a href="mailto:ggamsire@gmail.com" className="text-orange-500 hover:underline">ggamsire@gmail.com</a>
          </p>
        </div>
      </div>
    );
  }

  // approved or admin
  return children;
}
