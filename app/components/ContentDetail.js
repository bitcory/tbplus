'use client';

import { useState } from 'react';
import { Copy, Check, ChevronLeft, ChevronRight, Play, ScrollText, Lightbulb, Calendar, UserCircle, Tag } from 'lucide-react';
import Link from 'next/link';
import ImageModal from './ImageModal';
import VideoModal from './VideoModal';

// Safely render HTML content (data contains inline HTML like <strong>)
function HtmlContent({ html, className = '' }) {
  if (!html) return null;
  const processed = html.replace(/\n/g, '<br>');
  return <div className={className} dangerouslySetInnerHTML={{ __html: processed }} />;
}

function CopyButton({ text, className = '' }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} className={`flex-shrink-0 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors ${className}`} title="복사">
      {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-white" />}
    </button>
  );
}

// ===== TUTORIAL RENDERER =====
function TutorialContent({ item }) {
  return (
    <div className="space-y-8">
      {item.description && (
        <div className="bg-orange-50 border border-orange-100 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-black leading-relaxed text-base" />
        </div>
      )}

      {item.parts && item.parts.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
            <ScrollText className="w-6 h-6 text-orange-500" /> 퀘스트 블록 조립하기
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {item.parts.map((part, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-green-600 font-bold text-lg mb-3">{part.title}</h4>
                <HtmlContent html={part.description} className="text-black leading-relaxed mb-4 text-sm" />

                {part.keywords && part.keywords.length > 0 && (
                  <div className="mt-4">
                    <p className="text-gray-500 text-xs font-medium mb-2 uppercase tracking-wider">키워드 예시 (Keywords)</p>
                    <ul className="space-y-1">
                      {part.keywords.map((kw, kwIdx) => (
                        <li key={kwIdx} className="text-black text-sm pl-4 relative">
                          <span className="absolute left-0 text-orange-500">•</span>
                          {kw}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {part.example && (
                  <div className="mt-4 bg-orange-50 border border-orange-100 rounded-xl p-3">
                    <p className="text-xs text-orange-600 font-medium mb-1">선택 예시</p>
                    <p className="text-black font-mono text-sm">{part.example}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.tip && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h4 className="text-yellow-700 font-bold text-lg mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5" />{item.tip.title || 'Tip'}</h4>
          <HtmlContent html={item.tip.content} className="text-black leading-relaxed" />
        </div>
      )}

      {item.completion && (
        <div className="border-t-2 border-orange-200 pt-8">
          <h3 className="text-orange-600 font-bold text-2xl mb-4">{item.completion.title}</h3>
          <HtmlContent html={item.completion.message} className="text-black leading-relaxed mb-6" />

          {item.completion.choice && (
            <div className="bg-orange-50 border border-orange-100 rounded-xl p-4 mb-6">
              <HtmlContent html={item.completion.choice} className="text-black leading-relaxed" />
            </div>
          )}

          <p className="text-green-600 font-semibold mb-3">
            (조립된 [{item.koreanTitle}] 블록)
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-stretch mb-6">
            <div className="flex-1 bg-gray-900 rounded-2xl p-6 flex items-center justify-between min-h-[200px]">
              <p className="text-white font-mono text-lg leading-relaxed">{item.completion.result}</p>
              <CopyButton text={item.completion.result} />
            </div>
            {item.completion.image && (
              <div className="w-full md:w-[300px] h-[300px] rounded-2xl overflow-hidden border-3 border-green-500 flex-shrink-0">
                <img src={item.completion.image} alt="Result" className="w-full h-full object-cover" />
              </div>
            )}
          </div>

          {item.completion.status && (
            <>
              <p className="text-green-600 font-semibold mb-3">(현재 프롬프트 조립 상태)</p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                <HtmlContent html={item.completion.status} className="text-black font-mono text-sm" />
              </div>
            </>
          )}

          {item.completion.nextStep && (
            <HtmlContent html={item.completion.nextStep} className="text-black leading-relaxed mt-6" />
          )}
        </div>
      )}
    </div>
  );
}

// ===== EXPERT RENDERER =====
function ExpertContent({ item }) {
  return (
    <div className="space-y-8">
      {item.description && (
        <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-black leading-relaxed" />
        </div>
      )}

      {item.intro && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-green-600 font-bold text-xl mb-3">{item.intro.title}</h3>
          <HtmlContent html={item.intro.content} className="text-black leading-relaxed" />
        </div>
      )}

      {item.parts && item.parts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {item.parts.map((part, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-green-600 font-bold text-lg mb-4 flex items-center gap-3">
                <span className="bg-green-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                {part.title}
              </h3>
              <HtmlContent html={part.content || part.description} className="text-black leading-relaxed whitespace-pre-line text-[15px]" />
            </div>
          ))}
        </div>
      )}

      {item.styleExamples && item.styleExamples.length > 0 && (
        <div>
          <h3 className="text-orange-600 font-bold text-xl mb-2">실전 예시: 스타일이 모든 것을 바꾸는 순간</h3>
          <p className="text-black mb-6">
            기본 주제: <span className="text-yellow-600 font-medium">a man sitting in a cafe (카페에 앉아있는 남자)</span>
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {item.styleExamples.map((ex, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-orange-500 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm font-bold">{idx + 1}</span>
                  <div>
                    <h4 className="text-green-600 font-bold text-lg">{ex.title}</h4>
                    <p className="text-gray-500 text-sm">{ex.subtitle}</p>
                  </div>
                </div>
                <p className="text-black text-sm leading-relaxed mb-4">{ex.description}</p>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                  <p className="text-green-700 text-xs font-bold mb-1">프롬프트:</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-black font-mono text-xs leading-relaxed">{ex.prompt}</p>
                    <CopyButton text={ex.prompt} className="!bg-green-600/20" />
                  </div>
                </div>

                {ex.result && (
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <p className="text-orange-600 text-xs font-bold mb-1">결과:</p>
                    <p className="text-black text-sm leading-relaxed">{ex.result}</p>
                  </div>
                )}

                {ex.keywords && (
                  <div className="flex flex-wrap gap-1.5">
                    {ex.keywords.map((kw, kwIdx) => (
                      <span key={kwIdx} className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs">{kw}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.tip && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h4 className="text-yellow-700 font-bold text-lg mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5" />{item.tip.title || 'Tip'}</h4>
          <HtmlContent html={item.tip.content} className="text-black leading-relaxed whitespace-pre-line" />
        </div>
      )}

      {item.conclusion && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
          <h4 className="text-green-700 font-bold text-lg mb-2">{item.conclusion.title}</h4>
          <HtmlContent html={item.conclusion.content} className="text-black leading-relaxed" />
        </div>
      )}
    </div>
  );
}

// ===== INSTRUCTOR RENDERER =====
function InstructorContent({ item }) {
  const info = item.instructorInfo;
  const usageTips = item.usage ? item.usage.filter(tip => tip && tip.trim() !== '') : [];

  return (
    <div className="space-y-8">
      {info && (
        <div className="bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {info.image && (
              <div className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-white shadow-lg">
                <img src={info.image} alt={info.name} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-black mb-1">{info.name}</h2>
              {info.position && <p className="text-orange-600 font-medium mb-3">{info.position}</p>}
              {info.company && info.company.length > 0 && (
                <div className="space-y-1 mb-3">
                  {info.company.map((c, idx) => (
                    <p key={idx} className="text-black text-sm">{c}</p>
                  ))}
                </div>
              )}
              {info.email && (
                <p className="text-black text-sm">
                  <a href={`mailto:${info.email}`} className="hover:text-orange-500 transition-colors">{info.email}</a>
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {item.description && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-black leading-relaxed" />
        </div>
      )}

      {usageTips.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-black mb-4">주요 경력</h2>
          <ul className="space-y-3">
            {usageTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3 text-black">
                <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                  {idx + 1}
                </span>
                <HtmlContent html={tip} className="leading-relaxed" />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// ===== PRACTICE RENDERER =====
function PracticeContent({ item }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="space-y-8">
      {item.description && (
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-black leading-relaxed" />
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {item.videoUrl && (
          <div>
            <h3 className="text-lg font-bold text-black mb-3">참고 영상</h3>
            <div className="rounded-2xl overflow-hidden bg-black">
              {item.videoUrl.includes('youtube.com') || item.videoUrl.includes('youtu.be') ? (
                <iframe
                  src={item.videoUrl}
                  className="w-full aspect-video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video src={item.videoUrl} controls className="w-full aspect-video" />
              )}
            </div>
          </div>
        )}

        {item.prompt && (
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-black">예시 프롬프트</h3>
              <CopyButton text={item.prompt} className="!bg-gray-200" />
            </div>
            <div className="bg-gray-900 rounded-2xl p-4 overflow-auto max-h-[400px]">
              <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap leading-relaxed">
                {expanded ? item.prompt : item.prompt.substring(0, 600) + (item.prompt.length > 600 ? '...' : '')}
              </pre>
              {item.prompt.length > 600 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className="mt-3 text-orange-400 text-sm hover:text-orange-300 transition-colors"
                >
                  {expanded ? '접기' : '전체 보기'}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ===== VEO PROMPTS RENDERER =====
function VeoPromptsContent({ item }) {
  const [expandedIdx, setExpandedIdx] = useState(null);

  return (
    <div className="space-y-8">
      {item.description && (
        <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-black leading-relaxed" />
        </div>
      )}

      {item.prompts && item.prompts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {item.prompts.map((prompt, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-black">{prompt.title}</h3>
                <CopyButton text={prompt.content} className="!bg-gray-100" />
              </div>
              <div className="bg-gray-900 rounded-xl p-4 overflow-auto max-h-[300px]">
                <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap leading-relaxed">
                  {expandedIdx === idx ? prompt.content : prompt.content.substring(0, 400) + (prompt.content.length > 400 ? '...' : '')}
                </pre>
              </div>
              {prompt.content.length > 400 && (
                <button
                  onClick={() => setExpandedIdx(expandedIdx === idx ? null : idx)}
                  className="mt-2 text-orange-500 text-sm hover:text-orange-400 transition-colors"
                >
                  {expandedIdx === idx ? '접기' : '전체 보기'}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ===== TEAM VIDEOS RENDERER =====
function TeamVideosContent({ item }) {
  const teamKeys = item.teams ? Object.keys(item.teams).filter(k => k !== 'team3') : [];
  const [activeTeam, setActiveTeam] = useState(teamKeys[0] || '');

  return (
    <div className="space-y-8">
      {item.description && (
        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
          <HtmlContent html={item.description} className="text-black leading-relaxed" />
        </div>
      )}

      {teamKeys.length > 0 && (
        <>
          <div className="flex gap-2 flex-wrap">
            {teamKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTeam(key)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  activeTeam === key
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {item.teams[key].name}
              </button>
            ))}
          </div>

          {activeTeam && item.teams[activeTeam] && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.teams[activeTeam].videos.map((video, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-gray-900 relative">
                    {video.url && (video.url.includes('.mp4') || video.url.includes('dropbox.com')) ? (
                      <video src={video.url} controls className="w-full h-full object-cover" />
                    ) : video.url ? (
                      <iframe src={video.url} className="w-full h-full" frameBorder="0" allowFullScreen />
                    ) : video.thumbnail ? (
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">
                        <Play className="w-12 h-12" />
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-black mb-1">{video.title}</h4>
                    <p className="text-sm text-black">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

// ===== BLOG RENDERER =====
function BlogContent({ item, setImageModalIndex }) {
  return (
    <div className="space-y-8">
      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
        {item.date && (
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {item.date}
          </span>
        )}
        {item.author && (
          <span className="flex items-center gap-1.5">
            <UserCircle className="w-4 h-4" />
            {item.author}
          </span>
        )}
      </div>

      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag, idx) => (
            <span key={idx} className="flex items-center gap-1 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Blog content */}
      {item.content && (
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <HtmlContent html={item.content} className="text-black leading-relaxed text-base prose-style" />
        </div>
      )}

      {/* Images */}
      {item.images && item.images.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-black mb-4">첨부 이미지</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {item.images.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
                onClick={() => setImageModalIndex(idx)}
              >
                <img src={img.src} alt={img.caption || ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ===== DEFAULT RENDERER (camera, lighting, style, medium, etc.) =====
function DefaultContent({ item, setImageModalIndex, setVideoModal, isVideoCategory }) {
  const usageTips = item.usage ? item.usage.filter(tip => tip && tip.trim() !== '') : [];

  return (
    <div className="space-y-8">
      {item.description && (
        <div>
          <h2 className="text-xl font-bold text-black mb-3">설명</h2>
          <HtmlContent html={item.description} className="text-black leading-relaxed" />
        </div>
      )}

      {usageTips.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-black mb-3">활용 팁</h2>
          <ul className="space-y-2">
            {usageTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-3 text-black">
                <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5">
                  {idx + 1}
                </span>
                <HtmlContent html={tip} className="leading-relaxed" />
              </li>
            ))}
          </ul>
        </div>
      )}

      {!isVideoCategory && item.images && item.images.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-black mb-4">예시 이미지</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {item.images.map((img, idx) => (
              <div
                key={idx}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
                onClick={() => setImageModalIndex(idx)}
              >
                <img src={img.src} alt={img.caption || ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.videos && item.videos.length > 0 && (
        <div>
          <h2 className="text-xl font-bold text-black mb-4">예시 영상</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {item.videos.map((video, idx) => (
              <div
                key={idx}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all bg-gray-900"
                onClick={() => setVideoModal(video)}
              >
                <video src={video.src} className="w-full h-full object-cover" muted loop playsInline
                  onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => { e.target.pause(); e.target.currentTime = 0; }} />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                  <div className="w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
                {video.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white text-sm">{video.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {item.womanHairstyles && (
        <div>
          <h2 className="text-xl font-bold text-black mb-4">여성 헤어스타일</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {item.womanHairstyles.map((hs, idx) => (
              <div key={idx} className="text-center">
                {hs.image && <img src={hs.image} alt={hs.name} className="w-full aspect-square object-cover rounded-xl mb-2" loading="lazy" />}
                <p className="text-sm font-medium text-black">{hs.name}</p>
                {hs.keyword && <p className="text-xs text-gray-600">{hs.keyword}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      {item.manHairstyles && (
        <div>
          <h2 className="text-xl font-bold text-black mb-4">남성 헤어스타일</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {item.manHairstyles.map((hs, idx) => (
              <div key={idx} className="text-center">
                {hs.image && <img src={hs.image} alt={hs.name} className="w-full aspect-square object-cover rounded-xl mb-2" loading="lazy" />}
                <p className="text-sm font-medium text-black">{hs.name}</p>
                {hs.keyword && <p className="text-xs text-gray-600">{hs.keyword}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ===== MAIN COMPONENT =====
export default function ContentDetail({ item, category, prevItem, nextItem }) {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [imageModalIndex, setImageModalIndex] = useState(null);
  const [videoModal, setVideoModal] = useState(null);

  if (!item) return null;

  const isTutorial = item.type === 'tutorial';
  const isExpert = item.type === 'expert' || item.type === 'expert-style' || item.type === 'expert-dictionary';
  const isPractice = item.type === 'practice';
  const isVeoPrompts = item.type === 'veo-prompts';
  const isTeamVideos = item.type === 'team-videos';
  const isBlog = item.type === 'blog';
  const isInstructor = !!item.instructorInfo;

  const handleCopyPrompt = async () => {
    if (item.prompt) {
      await navigator.clipboard.writeText(item.prompt);
      setCopiedPrompt(true);
      setTimeout(() => setCopiedPrompt(false), 2000);
    }
  };

  return (
    <div className="max-w-[95%] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 flex-wrap">
        <Link href="/guide" className="hover:text-orange-500 transition-colors">가이드</Link>
        <span>/</span>
        {category && (
          <>
            <Link href={`/guide?tab=${category.id}`} className="hover:text-orange-500 transition-colors">{category.name}</Link>
            <span>/</span>
          </>
        )}
        <span className="text-black font-medium truncate">{item.title}</span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-2">{item.title}</h1>
      {item.koreanTitle && item.koreanTitle !== item.title && (
        <p className="text-lg text-gray-600 mb-6">{item.koreanTitle}</p>
      )}

      {/* Prompt Box */}
      {item.prompt && (
        <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8 flex items-center justify-between gap-4">
          <div className="min-w-0 flex-1">
            <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Prompt</p>
            <p className="text-lg font-mono font-medium break-words">{item.prompt}</p>
          </div>
          <button
            onClick={handleCopyPrompt}
            className="flex-shrink-0 p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
            title="프롬프트 복사"
          >
            {copiedPrompt ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5 text-white" />}
          </button>
        </div>
      )}

      {/* Content body - dispatch by type */}
      {isTutorial ? (
        <TutorialContent item={item} />
      ) : isExpert ? (
        <ExpertContent item={item} />
      ) : isInstructor ? (
        <InstructorContent item={item} />
      ) : isPractice ? (
        <PracticeContent item={item} />
      ) : isVeoPrompts ? (
        <VeoPromptsContent item={item} />
      ) : isTeamVideos ? (
        <TeamVideosContent item={item} />
      ) : isBlog ? (
        <BlogContent item={item} setImageModalIndex={setImageModalIndex} />
      ) : (
        <DefaultContent item={item} setImageModalIndex={setImageModalIndex} setVideoModal={setVideoModal} isVideoCategory={category?.id === 'video'} />
      )}

      {/* Images for tutorial/expert if they have them */}
      {(isTutorial || isExpert) && item.images && item.images.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-bold text-black mb-4">예시 이미지</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {item.images.map((img, idx) => (
              <div key={idx} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all" onClick={() => setImageModalIndex(idx)}>
                <img src={img.src} alt={img.caption || ''} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-xs">{img.caption}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
        {prevItem ? (
          <Link href={`/guide/${prevItem.slug}`} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-black hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium">
            <ChevronLeft className="w-4 h-4" />
            이전
          </Link>
        ) : <div />}
        {nextItem ? (
          <Link href={`/guide/${nextItem.slug}`} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-black hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium">
            다음
            <ChevronRight className="w-4 h-4" />
          </Link>
        ) : <div />}
      </div>

      {/* Image Modal */}
      {imageModalIndex !== null && item.images && (
        <ImageModal
          images={item.images}
          currentIndex={imageModalIndex}
          onClose={() => setImageModalIndex(null)}
          onPrev={() => setImageModalIndex(Math.max(0, imageModalIndex - 1))}
          onNext={() => setImageModalIndex(Math.min(item.images.length - 1, imageModalIndex + 1))}
        />
      )}

      {/* Video Modal */}
      {videoModal && (
        <VideoModal video={videoModal} onClose={() => setVideoModal(null)} />
      )}
    </div>
  );
}
