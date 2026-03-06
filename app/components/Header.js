'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, Lock, Palette, Brush, Camera, Sun, Film, UserCircle, Star, Video, LayoutDashboard, Settings, Shield } from 'lucide-react';
import Link from 'next/link';
import { useClerkConfigured } from './ClerkWrapper';
import { useUser, useAuth, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { isAdmin } from '../lib/auth';

function ClerkAuthButtons({ isScrolled, isAdminUser }) {
  const { isSignedIn } = useAuth();

  return (
    <div className="hidden md:flex items-center gap-3">
      {!isSignedIn ? (
        <>
          <SignInButton mode="modal">
            <button className={`px-6 py-2.5 rounded-full font-medium transition-all ${isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
              로그인
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className={`px-6 py-2.5 rounded-full font-medium transition-all overflow-hidden relative group ${isScrolled ? 'bg-black text-white hover:shadow-lg' : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg hover:scale-105'}`}>
              <span className="relative z-10">회원가입</span>
              {!isScrolled && <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />}
            </button>
          </SignUpButton>
        </>
      ) : (
        <UserButton
          appearance={{ elements: { avatarBox: "w-10 h-10" } }}
          userProfileMode="navigation"
          userProfileUrl="/profile"
        >
          <UserButton.MenuItems>
            <UserButton.Link label="대시보드" labelIcon={<LayoutDashboard size={16} />} href="/dashboard" />
            <UserButton.Link label="프로필 설정" labelIcon={<Settings size={16} />} href="/profile" />
            {isAdminUser && <UserButton.Link label="관리자" labelIcon={<Shield size={16} />} href="/admin" />}
          </UserButton.MenuItems>
        </UserButton>
      )}
    </div>
  );
}

function ClerkMobileAuth({ onMenuClose, user }) {
  const { isSignedIn } = useAuth();

  return (
    <>
      {!isSignedIn ? (
        <>
          <SignInButton mode="modal">
            <button className="block w-full text-left py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium" onClick={onMenuClose}>
              로그인
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="w-full py-2.5 px-6 rounded-full font-medium transition-all bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg" onClick={onMenuClose}>
              회원가입
            </button>
          </SignUpButton>
        </>
      ) : (
        <div className="flex items-center gap-3 py-2">
          <UserButton
            appearance={{ elements: { avatarBox: "w-10 h-10" } }}
            userProfileMode="navigation"
            userProfileUrl="/profile"
          >
            <UserButton.MenuItems>
              <UserButton.Link label="대시보드" labelIcon={<LayoutDashboard size={16} />} href="/dashboard" />
              <UserButton.Link label="프로필 설정" labelIcon={<Settings size={16} />} href="/profile" />
            </UserButton.MenuItems>
          </UserButton>
          <span className="text-gray-800 font-medium">{user?.fullName || user?.firstName || '내 계정'}</span>
        </div>
      )}
    </>
  );
}

export default function Header({ alwaysScrolled = false }) {
  const clerkConfigured = useClerkConfigured();
  const clerkUser = useUser();
  const { isSignedIn, user } = clerkConfigured ? clerkUser : { isSignedIn: false, user: null };
  const [isScrolled, setIsScrolled] = useState(alwaysScrolled);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [guideDropdownOpen, setGuideDropdownOpen] = useState(false);
  const [toolbDropdownOpen, setToolbDropdownOpen] = useState(false);
  const [videoDropdownOpen, setVideoDropdownOpen] = useState(false);
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  useEffect(() => {
    if (alwaysScrolled) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysScrolled]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (guideDropdownOpen && !event.target.closest('.guide-dropdown-container')) {
        setGuideDropdownOpen(false);
      }
      if (toolbDropdownOpen && !event.target.closest('.toolb-dropdown-container')) {
        setToolbDropdownOpen(false);
      }
      if (videoDropdownOpen && !event.target.closest('.video-dropdown-container')) {
        setVideoDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [guideDropdownOpen, toolbDropdownOpen, videoDropdownOpen]);

  const guideItems = [
    { title: '스타일(STYLE)', description: '다양한 아트 스타일', Icon: Palette, href: '/guide?tab=style' },
    { title: '매체(MEDIUM)', description: '다양한 매체 표현', Icon: Brush, href: '/guide?tab=medium' },
    { title: '카메라(CAMERA)', description: '카메라 기법', Icon: Camera, href: '/guide?tab=camera' },
    { title: '조명(LIGHTING)', description: '조명 기법', Icon: Sun, href: '/guide?tab=lighting' },
  ];

  const videoItems = [
    { title: '카메라 무브먼트', description: '팬, 틸트, 달리, 트래킹', Icon: Film, href: '/video-guide?sub=카메라 무브먼트' },
    { title: '전환 효과', description: '컷, 페이드, 디졸브, 와이프', Icon: Film, href: '/video-guide?sub=전환 효과' },
    { title: '모션 효과', description: '슬로모션, 타임랩스, 프리즈', Icon: Film, href: '/video-guide?sub=모션 효과' },
  ];

  const toolbItems = [
    { title: '강사소개', description: 'AI TOOLBEE 강사 프로필 및 경력', Icon: UserCircle, href: '/guide/instructor-intro' },
    { title: '강의 후기', description: '수강생들의 생생한 강의 후기', Icon: Star, href: '/guide/instructor-reviews' },
    { title: '동영상 갤러리', description: 'AI TOOLBEE 인트로 및 작품 영상', Icon: Video, href: '/guide/intro-videos' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 mt-[30px] px-4 sm:px-6 lg:px-8">
      <div className={`max-w-[95%] mx-auto transition-all duration-300 rounded-full ${isScrolled ? 'bg-white text-black shadow-md border border-gray-200' : 'bg-transparent text-white'}`}>
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <span className="text-xl font-bold">TBPLUS</span>
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            <div className="relative toolb-dropdown-container">
              <button
                onClick={() => { setToolbDropdownOpen(!toolbDropdownOpen); setGuideDropdownOpen(false); setVideoDropdownOpen(false); }}
                className={`flex items-center gap-1 text-base transition-colors font-semibold ${isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}
              >
                TOOLB
                <ChevronDown className={`w-4 h-4 transition-transform ${toolbDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {toolbDropdownOpen && (
                <div className="fixed top-[46px] bg-white rounded-3xl shadow-2xl p-4 animate-dropdownIn z-50 w-[540px]" style={{ left: '50%', marginLeft: '-270px' }}>
                  <div className="grid grid-cols-3 gap-4">
                    {toolbItems.map((item, index) => (
                      <Link key={index} href={item.href} className="group/item cursor-pointer" onClick={() => setToolbDropdownOpen(false)}>
                        <div className="bg-gray-50 rounded-2xl p-5 hover:bg-gray-100 transition-colors border border-gray-200 h-full flex flex-col items-center text-center">
                          <item.Icon className="w-8 h-8 text-orange-500 mb-3" />
                          <h3 className="text-sm font-bold text-gray-900 mb-1 whitespace-nowrap">{item.title}</h3>
                          <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative guide-dropdown-container">
              <button
                onClick={() => { setGuideDropdownOpen(!guideDropdownOpen); setToolbDropdownOpen(false); setVideoDropdownOpen(false); }}
                className={`flex items-center gap-1 text-base transition-colors font-semibold ${isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}
              >
                이미지가이드
                <ChevronDown className={`w-4 h-4 transition-transform ${guideDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {guideDropdownOpen && (
                <div className="fixed top-[46px] bg-white rounded-3xl shadow-2xl p-4 animate-dropdownIn z-50 w-[720px]" style={{ left: '50%', marginLeft: '-360px' }}>
                  <div className="grid grid-cols-4 gap-4">
                    {guideItems.map((item, index) => (
                      <Link key={index} href={item.href} className="group/item cursor-pointer" onClick={() => setGuideDropdownOpen(false)}>
                        <div className="bg-gray-50 rounded-2xl p-5 hover:bg-gray-100 transition-colors border border-gray-200 h-full flex flex-col items-center text-center">
                          <item.Icon className="w-8 h-8 text-orange-500 mb-3" />
                          <h3 className="text-sm font-bold text-gray-900 mb-1 whitespace-nowrap">{item.title}</h3>
                          <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="relative video-dropdown-container">
              <button
                onClick={() => { setVideoDropdownOpen(!videoDropdownOpen); setGuideDropdownOpen(false); setToolbDropdownOpen(false); }}
                className={`flex items-center gap-1 text-base transition-colors font-semibold ${isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}
              >
                영상가이드
                <ChevronDown className={`w-4 h-4 transition-transform ${videoDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {videoDropdownOpen && (
                <div className="fixed top-[46px] bg-white rounded-3xl shadow-2xl p-4 animate-dropdownIn z-50 w-[540px]" style={{ left: '50%', marginLeft: '-270px' }}>
                  <div className="grid grid-cols-3 gap-4">
                    {videoItems.map((item, index) => (
                      <Link key={index} href={item.href} className="group/item cursor-pointer" onClick={() => setVideoDropdownOpen(false)}>
                        <div className="bg-gray-50 rounded-2xl p-5 hover:bg-gray-100 transition-colors border border-gray-200 h-full flex flex-col items-center text-center">
                          <item.Icon className="w-8 h-8 text-orange-500 mb-3" />
                          <h3 className="text-sm font-bold text-gray-900 mb-1 whitespace-nowrap">{item.title}</h3>
                          <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link href="/guide?tab=expert" className={`text-base transition-colors font-semibold ${isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
              전문가과정
            </Link>

            <Link href="/practice" className={`text-base transition-colors font-semibold ${isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
              실습과제
            </Link>

            <Link href="/library" className={`text-base transition-colors font-semibold ${isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
              자료실
            </Link>

            <Link href="/prompt-restaurant" className={`text-base transition-colors font-semibold ${isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
              프롬프트맛집
            </Link>

            <Link href="/#pricing" className={`text-base transition-colors font-semibold ${isScrolled ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-200'}`}>
              요금제
            </Link>
          </nav>

          {/* Right section - Auth */}
          {clerkConfigured && <ClerkAuthButtons isScrolled={isScrolled} isAdminUser={isSignedIn && isAdmin(user)} />}

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-6 h-6 flex flex-col justify-center gap-1.5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴"
          >
            <span className={`block h-0.5 w-6 transition-all ${isScrolled ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-6 transition-all ${isScrolled ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 transition-all ${isScrolled ? 'bg-black' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute left-0 right-0 top-[80px] transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="bg-white mx-4 rounded-2xl shadow-xl px-6 py-4 space-y-2 border border-gray-100">
          <Link href="/guide" className="block py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            이미지가이드
          </Link>
          <Link href="/video-guide" className="block py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            영상가이드
          </Link>
          <Link href="/guide?tab=expert" className="block py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            전문가과정
          </Link>
          <Link href="/practice" className="block py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            실습과제
          </Link>
          <Link href="/library" className="block py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            자료실
          </Link>
          <Link href="/prompt-restaurant" className="block py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            프롬프트맛집
          </Link>
          <div className="py-2 space-y-1">
            <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">TOOLB</p>
            <Link href="/guide/instructor-intro" className="block py-1.5 pl-3 text-gray-800 hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              강사소개
            </Link>
            <Link href="/guide/instructor-reviews" className="block py-1.5 pl-3 text-gray-800 hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              강의 후기
            </Link>
            <Link href="/guide/intro-videos" className="block py-1.5 pl-3 text-gray-800 hover:text-orange-500 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
              동영상 갤러리
            </Link>
          </div>
          <Link href="/#pricing" className="block py-2 text-gray-800 hover:text-orange-500 transition-colors font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            요금제
          </Link>
          {clerkConfigured && <ClerkMobileAuth onMenuClose={() => setIsMobileMenuOpen(false)} user={user} />}
        </nav>
      </div>

      {/* Login alert */}
      {showLoginAlert && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-fadeIn">
          <div className="bg-orange-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3">
            <Lock className="w-6 h-6" />
            <div>
              <p className="font-bold">로그인이 필요합니다</p>
              <p className="text-sm opacity-90">서비스를 이용하려면 로그인해주세요</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
