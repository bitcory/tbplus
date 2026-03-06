import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col justify-start items-start">
            <h2 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                AI TOOLBEE GUIDE
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              AI 창작의 기술을 더하다.<br />
              카메라, 조명, 스타일, 매체의 모든 기법을 배워보세요.
            </p>
          </div>

          <div className="flex flex-col justify-start md:items-end text-left md:text-right">
            <h3 className="text-white text-lg font-bold mb-4">아이크루</h3>
            <div className="space-y-2 text-sm text-gray-500">
              <p>대표: 김진욱 | 사업자등록번호: 655-04-03066</p>
              <p>주소: 경기도 하남시 감일로72번길 40, 201호(감일동)</p>
              <p>이메일: aitoolbee79@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; 2025 AI TOOLBEE GUIDE. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400 transition-colors">이용약관</a>
            <a href="#" className="hover:text-gray-400 transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
