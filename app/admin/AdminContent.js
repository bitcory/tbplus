'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useClerkConfigured } from '../components/ClerkWrapper';
import { isAdmin } from '../lib/auth';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, UserCheck, Clock, ShieldX, Shield } from 'lucide-react';

export default function AdminContent() {
  const clerkConfigured = useClerkConfigured();
  const clerkUser = useUser();
  const { isLoaded, isSignedIn, user } = clerkConfigured ? clerkUser : { isLoaded: true, isSignedIn: false, user: null };
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(null);

  const isAdminUser = isLoaded && isSignedIn && isAdmin(user);

  useEffect(() => {
    if (isLoaded && !isAdminUser) {
      router.push('/');
    }
  }, [isLoaded, isAdminUser, router]);

  useEffect(() => {
    if (isAdminUser) {
      fetchUsers();
    }
  }, [isAdminUser]);

  async function fetchUsers() {
    try {
      const res = await fetch('/api/admin/users');
      if (res.ok) {
        const data = await res.json();
        setUsers(data.users);
      }
    } catch (err) {
      console.error('Failed to fetch users:', err);
    } finally {
      setLoading(false);
    }
  }

  async function handleAction(userId, action) {
    setActionLoading(`${userId}-${action}`);
    try {
      const res = await fetch(`/api/admin/users/${userId}/${action}`, { method: 'POST' });
      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) =>
            u.id === userId ? { ...u, role: action === 'approve' ? 'approved' : 'rejected' } : u
          )
        );
      }
    } catch (err) {
      console.error(`Failed to ${action} user:`, err);
    } finally {
      setActionLoading(null);
    }
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!isAdminUser) return null;

  const stats = {
    total: users.length,
    pending: users.filter((u) => u.role === 'pending' && !u.isSuperAdmin).length,
    approved: users.filter((u) => u.role === 'approved' || u.isSuperAdmin).length,
    rejected: users.filter((u) => u.role === 'rejected').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header alwaysScrolled={true} />

      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2 flex items-center gap-3">
              <Shield className="w-9 h-9 text-orange-500" />
              관리자 대시보드
            </h1>
            <p className="text-gray-600">사용자 승인 및 권한 관리</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">전체 사용자</span>
              </div>
              <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">승인 대기</span>
              </div>
              <p className="text-3xl font-bold text-yellow-500">{stats.pending}</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <UserCheck className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">승인됨</span>
              </div>
              <p className="text-3xl font-bold text-green-500">{stats.approved}</p>
            </div>
            <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
              <div className="flex items-center gap-3 mb-2">
                <ShieldX className="w-5 h-5 text-red-500" />
                <span className="text-sm text-gray-600">거부됨</span>
              </div>
              <p className="text-3xl font-bold text-red-500">{stats.rejected}</p>
            </div>
          </div>

          {/* Users table */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
              <h2 className="text-lg font-bold text-white">사용자 목록</h2>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-orange-500"></div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">사용자</th>
                      <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">이메일</th>
                      <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">가입일</th>
                      <th className="text-left px-6 py-3 text-sm font-semibold text-gray-700">상태</th>
                      <th className="text-center px-6 py-3 text-sm font-semibold text-gray-700">작업</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {users.map((u) => (
                      <tr key={u.id} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={u.imageUrl}
                              alt=""
                              className="w-9 h-9 rounded-full object-cover"
                            />
                            <span className="font-medium text-gray-900">
                              {u.firstName} {u.lastName}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{u.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          {new Date(u.createdAt).toLocaleDateString('ko-KR')}
                        </td>
                        <td className="px-6 py-4">
                          <RoleBadge role={u.isSuperAdmin ? 'admin' : u.role} />
                        </td>
                        <td className="px-6 py-4 text-center">
                          {u.isSuperAdmin ? (
                            <span className="text-xs text-gray-400">슈퍼 관리자</span>
                          ) : (
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => handleAction(u.id, 'approve')}
                                disabled={u.role === 'approved' || actionLoading === `${u.id}-approve`}
                                className="px-3 py-1.5 text-xs font-medium rounded-full transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-green-50 text-green-700 hover:bg-green-100"
                              >
                                {actionLoading === `${u.id}-approve` ? '...' : '승인'}
                              </button>
                              <button
                                onClick={() => handleAction(u.id, 'reject')}
                                disabled={u.role === 'rejected' || actionLoading === `${u.id}-reject`}
                                className="px-3 py-1.5 text-xs font-medium rounded-full transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-red-50 text-red-700 hover:bg-red-100"
                              >
                                {actionLoading === `${u.id}-reject` ? '...' : '거부'}
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function RoleBadge({ role }) {
  const styles = {
    admin: 'bg-purple-100 text-purple-700',
    approved: 'bg-green-100 text-green-700',
    pending: 'bg-yellow-100 text-yellow-700',
    rejected: 'bg-red-100 text-red-700',
  };
  const labels = {
    admin: '관리자',
    approved: '승인됨',
    pending: '대기 중',
    rejected: '거부됨',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full ${styles[role] || styles.pending}`}>
      {labels[role] || labels.pending}
    </span>
  );
}
