import { cameraData } from './cameraData';

export const categories = [
  {
    id: 'toolb',
    name: 'TOOLB',
    icon: 'User',
    items: [
      'instructor-intro', 'instructor-reviews', 'intro-videos',
    ],
  },
  {
    id: 'tutorial',
    name: '튜토리얼',
    icon: 'BookOpen',
    items: [
      'tutorial-block1', 'tutorial-block2', 'tutorial-block3', 'tutorial-block4',
      'tutorial-block5', 'tutorial-block6', 'tutorial-block7',
    ],
  },
  {
    id: 'expert',
    name: '전문가 과정',
    icon: 'GraduationCap',
    protected: true,
    items: [
      'expert-ch1', 'expert-ch2', 'expert-ch3', 'expert-ch4', 'expert-ch5',
      'expert-ch6', 'expert-ch7', 'expert-ch8', 'expert-ch9', 'expert-ch10',
      'expert-ch11', 'expert-ch12', 'expert-ch13',
    ],
  },
  {
    id: 'style',
    name: '스타일(STYLE)',
    icon: 'Palette',
    items: [
      'digital-painting', 'concept-art', 'matte-painting', '3d-render',
      'anime-style', 'cartoon-style', 'comic-book', 'watercolor',
    ],
  },
  {
    id: 'medium',
    name: '매체(MEDIUM)',
    icon: 'Brush',
    items: [
      'oil-painting', 'acrylic-painting', 'pencil-drawing', 'charcoal',
      'digital-photography', 'film-photography', 'polaroid', 'long-exposure',
      'collage', 'digital-collage', 'mixed-technique',
    ],
  },
  {
    id: 'camera',
    name: '카메라(CAMERA)',
    icon: 'Aperture',
    subcategories: [
      {
        name: '샷 사이즈',
        items: ['extreme-closeup', 'closeup', 'medium-shot', 'cowboy-shot', 'full-shot', 'wide-shot', 'extreme-wide'],
      },
      {
        name: '카메라 앵글',
        items: ['eye-level', 'low-angle', 'high-angle', 'birds-eye', 'overhead', 'dutch-angle', 'worms-eye', 'ground-level'],
      },
      {
        name: '카메라 시점',
        items: ['side-view', 'back-view', 'three-quarter', 'rear-three-quarter'],
      },
      {
        name: '특수 샷',
        items: ['pov-shot', 'over-shoulder', 'two-shot', 'establishing', 'master-shot', 'insert-shot'],
      },
      {
        name: '구도',
        items: ['rule-of-thirds', 'center-comp', 'symmetrical', 'frame-in-frame', 'diagonal', 'layered', 'negative-space'],
      },
    ],
    get items() {
      return this.subcategories.flatMap(sub => sub.items);
    },
  },
  {
    id: 'lighting',
    name: '조명(LIGHTING)',
    icon: 'Sun',
    subcategories: [
      {
        name: '자연광',
        items: ['golden-hour', 'blue-hour', 'overcast', 'harsh-sunlight'],
      },
      {
        name: '스튜디오 조명',
        items: ['rembrandt', 'butterfly', 'split-lighting', 'rim-lighting'],
      },
      {
        name: '분위기 조명',
        items: ['neon-lights', 'candlelight', 'moonlight', 'firelight'],
      },
    ],
    get items() {
      return this.subcategories.flatMap(sub => sub.items);
    },
  },
  {
    id: 'video',
    name: '영상(VIDEO)',
    icon: 'Film',
    subcategories: [
      {
        name: '카메라 무브먼트',
        items: ['pan', 'tilt', 'dolly', 'tracking', 'crane', 'handheld'],
      },
      {
        name: '전환 효과',
        items: ['cut', 'fade', 'dissolve', 'wipe', 'match-cut'],
      },
      {
        name: '모션 효과',
        items: ['slow-motion', 'time-lapse', 'freeze-frame', 'motion-blur'],
      },
    ],
    get items() {
      return this.subcategories.flatMap(sub => sub.items);
    },
  },
  {
    id: 'practice',
    name: '실습과제',
    icon: 'ClipboardList',
    items: [
      'banana-magic', 'hairstyles', 'chimpanzee-video', 'hamster-video',
      'crocodile-video', 'veo-prompts', 'team-assignments',
    ],
  },
  {
    id: 'library',
    name: '자료실',
    icon: 'FolderOpen',
    items: [
      'blog-post-1', 'blog-post-2', 'blog-post-3',
    ],
  },
  {
    id: 'prompt-restaurant',
    name: '프롬프트맛집',
    icon: 'ChefHat',
    items: [
      'prompt-recipe-1', 'prompt-recipe-2', 'prompt-recipe-3',
    ],
  },
];

// Helper: get data for a specific key
export function getGuideItem(slug) {
  return cameraData[slug] || null;
}

// Helper: get all items for a category
export function getCategoryItems(categoryId) {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return [];
  return category.items
    .map(key => ({ slug: key, ...cameraData[key] }))
    .filter(item => item.title);
}

// Helper: get the category for a given slug
export function getCategoryForSlug(slug) {
  return categories.find(c => c.items.includes(slug));
}

// Helper: get previous and next items for navigation
export function getAdjacentItems(slug) {
  const category = getCategoryForSlug(slug);
  if (!category) return { prev: null, next: null };
  const items = category.items;
  const index = items.indexOf(slug);
  return {
    prev: index > 0 ? { slug: items[index - 1], ...cameraData[items[index - 1]] } : null,
    next: index < items.length - 1 ? { slug: items[index + 1], ...cameraData[items[index + 1]] } : null,
  };
}

// Helper: get all slugs (for static params)
export function getAllSlugs() {
  return categories.flatMap(c => c.items);
}

// Get first image from a guide item for thumbnail
export function getThumbnail(slug) {
  const item = cameraData[slug];
  if (!item) return null;
  if (item.images && item.images.length > 0) return item.images[0].src;
  if (item.videos && item.videos.length > 0) return item.videos[0].poster || null;
  return null;
}

export { cameraData };
