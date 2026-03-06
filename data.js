// Extended Camera & Visual Guide Data
const cameraData = {
    // ============= FRAMEWORK INFO =============
    // 강사 소개
    'instructor-intro': {
        title: '강사 소개',
        koreanTitle: 'Instructor Introduction',
        instructorInfo: {
            name: '김진욱 (툴비)',
            position: 'AI TOOLBEE',
            company: [
                '아이크루 대표, (주)알앤픽 대표이사, (주)제이콥소프트 영업대표',
            ],
            email: 'aitoolbee79@gmail.com',
            image: 'images/instructor.png'
        },
        description: 'AI 기술과 창의적 콘텐츠 제작 분야의 전문가로, 다년간의 경험을 바탕으로 AI툴비를 만들게 되었습니다.',
        usage: [
            'AI TOOLBEE 웹페이지 개발',
            'AIFI 프레임워크 개발',
            'AI관련 바이브코딩, 자동화개발 경력보유',
            'AI 이미지/영상 생성 전문가',
            'EBS 디지털영상제작 강의, 기업특강, 팀단위 특강',
        ]
    },

    'instructor-reviews': {
        title: '강의 후기',
        koreanTitle: 'Course Reviews',
        type: 'reviews',
        images: [
            { src: 'images/gang1.jpg', caption: 'EBS 특별강의' },
            { src: 'images/gang2.jpg', caption: '기업특강' }
        ],
        description: 'AI TOOLBEE 강의를 수강하신 분들의 생생한 후기입니다.'
    },

    // AI툴박스툴
    'aifi-tool': {
        title: 'AI툴박스툴',
        koreanTitle: 'AI Image & Video Prompt Generator',
        type: 'tool',
        description: 'Gemini AI를 활용한 이미지 및 영상 프롬프트 생성 도구'
    },

    // 바나나만들기 - 마법의프롬프트
    'banana-magic': {
        title: '마법의프롬프트',
        koreanTitle: 'Nano Banana AI Image Editor',
        type: 'tool',
        description: '나노바나나를 이용한 올인원 이미지 편집기',
        usage: [
            '이미지 생성: 텍스트 프롬프트로 새로운 이미지 생성',
            '이미지 편집: 기존 이미지를 텍스트로 편집',
            '이미지 합성: 두 이미지를 합성하여 새로운 이미지 생성'
        ]
    },

    // ============= CAMERA SHOTS =============
    // Shot Size
    'extreme-closeup': {
        title: '익스트림 클로즈업(Extreme Close-up)',
        koreanTitle: '익스트림 클로즈업',
        prompt: 'extreme close-up',
        description: '눈, 입술 등 인물의 특정 신체 부위나 사물의 디테일한 부분을 화면에 극도로 크게 채우는 샷입니다.',
        usage: [
            '강렬한 감정을 극대화할 때',
            '이야기의 중요한 단서를 관객에게 명확히 보여줄 때',
            '극도의 긴장감을 조성할 때',
            '피사체의 세밀한 디테일을 강조할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/ecfcd186-90cd-4674-a321-8643dbac907c/0_3.png', caption: 'Eye extreme close-up' },
            { src: 'https://cdn.midjourney.com/78fd0ea7-2a19-4442-8ab0-9e652c69ab52/0_1.png', caption: 'Detail shot' },
            { src: 'https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=600&h=400&fit=crop', caption: 'Texture emphasis' },
            { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop', caption: 'Emotion focus' }
        ]
    },

    'closeup': {
        title: '클로즈업(Close-up)',
        koreanTitle: '클로즈업',
        prompt: 'close-up',
        description: '인물의 얼굴이 화면에 가득 차는 샷으로, 보통 어깨선 윗부분까지를 포함합니다.',
        usage: [
            '인물의 미세한 표정 변화와 감정을 전달할 때',
            '관객이 인물과 친밀감을 느끼게 할 때',
            '감정적으로 몰입하게 만들 때',
            '대화 장면에서 인물의 반응을 보여줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/c5198e9d-612f-46fa-b06f-9c63064b80d4/0_3.png', caption: 'Portrait close-up' },
            { src: 'https://cdn.midjourney.com/dae4392d-4bae-4e1d-882b-46817dfed2cb/0_1.png', caption: 'Emotional expression' },
            { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop', caption: 'Character detail' },
            { src: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=600&h=400&fit=crop', caption: 'Face focus' }
        ]
    },

    'medium-shot': {
        title: '미디엄 샷(Medium Shot)',
        koreanTitle: '미디엄 샷',
        prompt: 'medium shot',
        description: '인물의 상반신(보통 허리 위)을 담는 샷입니다.',
        usage: [
            '가장 보편적으로 사용되는 샷',
            '인물의 표정과 손동작(제스처)을 함께 보여줄 때',
            '대화 장면에 가장 적합',
            '안정적인 느낌을 줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/d21ac535-abd1-4dd4-a9fb-7e0160cb9f3a/0_3.png', caption: 'Standard medium shot' },
            { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=400&fit=crop', caption: 'Conversation shot' },
            { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop', caption: 'Waist-up framing' },
            { src: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&h=400&fit=crop', caption: 'Natural perspective' }
        ]
    },

    'cowboy-shot': {
        title: '카우보이 샷(Cowboy Shot)',
        koreanTitle: '카우보이 샷',
        prompt: 'cowboy shot',
        description: '인물의 허벅지나 무릎 위까지를 담는 샷으로, 미디엄 샷과 풀 샷의 중간 단계입니다.',
        usage: [
            '인물의 행동과 자신감을 강조할 때',
            '표정을 놓치지 않으면서도 동작을 보여줄 때',
            '위풍당당한 느낌을 줄 때',
            '액션 장면의 준비 상태를 보여줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/51ec9dbc-30a4-4fd2-910e-b70bd468630f/0_2.png', caption: 'Classic cowboy shot' },
            { src: 'https://cdn.midjourney.com/42973f1e-0776-479c-a943-efb1ffc6acd8/0_2.png', caption: 'Action ready stance' },
            { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop', caption: 'Mid-thigh framing' },
            { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop', caption: 'Power pose' }
        ]
    },

    'full-shot': {
        title: '풀 샷(Full Shot)',
        koreanTitle: '풀 샷',
        prompt: 'full shot',
        description: '인물의 머리부터 발끝까지 전신을 모두 화면에 담는 샷입니다.',
        usage: [
            '인물의 전체적인 의상, 자세를 보여줄 때',
            '신체를 이용한 큰 동작을 보여줄 때',
            '인물과 배경의 관계를 설명하기 시작할 때',
            '캐릭터의 전체적인 모습을 소개할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/5da09c9c-3c66-4c57-915e-b299e7ba4640/0_1.png', caption: 'Full body shot' },
            { src: 'https://cdn.midjourney.com/992308ef-59aa-49d0-a99e-d790c52c1213/0_3.png', caption: 'Complete figure' },
            { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop', caption: 'Head to toe view' },
            { src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=400&fit=crop', caption: 'Character reveal' }
        ]
    },

    'wide-shot': {
        title: '와이드 샷(Wide Shot)',
        koreanTitle: '와이드 샷',
        prompt: 'wide shot',
        description: '인물과 함께 주변 환경을 충분히 보여주는 샷입니다.',
        usage: [
            '인물과 배경의 관계를 보여줄 때',
            '공간의 규모를 전달할 때',
            '고립감이나 외로움을 표현할 때',
            '장면 전체의 분위기를 설정할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/61484eb1-c523-4aeb-88af-46c56c7ea91d/0_2.png', caption: 'Wide landscape' },
            { src: 'https://cdn.midjourney.com/06cb726a-cf6d-4526-97ef-e14f45000cba/0_3.png', caption: 'Environmental context' },
            { src: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=400&fit=crop', caption: 'Spatial relationship' },
            { src: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=600&h=400&fit=crop', caption: 'Scene setting' }
        ]
    },

    'extreme-wide': {
        title: '익스트림 와이드(Extreme Wide Shot)',
        koreanTitle: '익스트림 와이드 샷',
        prompt: 'extreme wide shot',
        description: '매우 넓은 범위를 보여주는 샷으로, 인물이 점처럼 작게 보이거나 아예 보이지 않을 수도 있습니다.',
        usage: [
            '광활한 공간감을 표현할 때',
            '인간의 왜소함을 강조할 때',
            '영화의 시작이나 새로운 장소를 소개할 때',
            '웅장한 스케일을 보여줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/01c90d39-d174-443b-89dd-e1c799a2fa2a/0_0.png', caption: 'Vast landscape' },
            { src: 'https://cdn.midjourney.com/bbe2c719-f087-48ad-bd89-717e9160465c/0_1.png', caption: 'Epic scale' },
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Environmental dominance' },
            { src: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=600&h=400&fit=crop', caption: 'Grand establishing shot' }
        ]
    },

    // Camera Angles
    'eye-level': {
        title: '아이 레벨(Eye Level)',
        koreanTitle: '아이 레벨',
        prompt: 'eye level',
        description: '피사체와 카메라가 같은 높이에 위치하는 가장 자연스러운 앵글입니다.',
        usage: [
            '중립적이고 객관적인 시선을 제공할 때',
            '관객과 인물 사이의 동등한 관계를 만들 때',
            '일상적인 대화나 상황을 보여줄 때',
            '편안하고 친근한 느낌을 줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/38bd6991-5210-4ac1-aaef-36a3ac8c72a0/0_3.png', caption: 'Neutral perspective' },
            { src: 'https://cdn.midjourney.com/a3851e06-e287-4455-8dc6-06142d7b5fdb/0_2.png', caption: 'Natural eye contact' },
            { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=400&fit=crop', caption: 'Equal relationship' },
            { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop', caption: 'Standard angle' }
        ]
    },

    'low-angle': {
        title: '로우 앵글(Low Angle)',
        koreanTitle: '로우 앵글',
        prompt: 'low angle',
        description: '카메라가 피사체보다 아래에 위치하여 위를 올려다보는 앵글입니다.',
        usage: [
            '피사체를 위엄 있고 강력하게 보이게 할 때',
            '영웅적인 인물을 표현할 때',
            '건물이나 구조물의 웅장함을 강조할 때',
            '위협적인 분위기를 조성할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/8a422d4f-d700-4229-9502-480a5f751470/0_1.png', caption: 'Power perspective' },
            { src: 'https://cdn.midjourney.com/3173d561-014c-42c0-a409-e27a869922fa/0_3.png', caption: 'Heroic angle' },
            { src: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=600&h=400&fit=crop', caption: 'Dominant view' },
            { src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=400&fit=crop', caption: 'Looking up' }
        ]
    },

    'high-angle': {
        title: '하이 앵글(High Angle)',
        koreanTitle: '하이 앵글',
        prompt: 'high angle',
        description: '카메라가 피사체보다 위에 위치하여 아래를 내려다보는 앵글입니다.',
        usage: [
            '피사체를 작고 약하게 보이게 할 때',
            '전체적인 상황을 조망할 때',
            '취약함이나 고립감을 표현할 때',
            '관찰자의 시점을 제공할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/73b6717f-27ec-4209-bf84-fd052c4fb13f/0_1.png', caption: 'Looking down' },
            { src: 'https://cdn.midjourney.com/5dfe60ae-2b2c-43bf-8691-abdb78d18db1/0_1.png', caption: 'Vulnerable angle' },
            { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=400&fit=crop', caption: 'Overview perspective' },
            { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=400&fit=crop', caption: 'Superior view' }
        ]
    },

    'birds-eye': {
        title: '버즈 아이 뷰(Bird\'s Eye View)',
        koreanTitle: '버즈 아이 뷰',
        prompt: 'birds eye view',
        description: '거의 수직으로 위에서 아래를 내려다보는 극단적인 하이 앵글입니다.',
        usage: [
            '패턴이나 구조를 보여줄 때',
            '전체적인 레이아웃을 제시할 때',
            '초현실적인 느낌을 만들 때',
            '지도와 같은 관점을 제공할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/60dc7d0d-5723-490e-8aff-aabe07a8ba86/0_1.png', caption: 'Aerial view' },
            { src: 'https://cdn.midjourney.com/6f7202ee-2943-4106-953b-a7acb87bc199/0_0.png', caption: 'Top-down perspective' },
            { src: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=600&h=400&fit=crop', caption: 'Pattern view' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Map-like angle' }
        ]
    },

    'overhead': {
        title: '오버헤드 샷(Overhead Shot)',
        koreanTitle: '오버헤드 샷',
        prompt: 'overhead shot',
        description: '피사체 바로 위에서 수직으로 내려다보는 샷으로, 완전한 탑다운 뷰를 제공합니다.',
        usage: [
            '음식 사진이나 플랫레이 촬영',
            '테이블 위의 물건들을 보여줄 때',
            '패턴이나 대칭성을 강조할 때',
            '독특한 시각적 효과를 원할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/5a913eff-45cc-4722-b443-61640fdde23a/0_1.png', caption: 'Food overhead' },
            { src: 'https://cdn.midjourney.com/10a4ddbb-f471-4f5a-91ad-41de26782a81/0_2.png', caption: 'Table top view' },
            { src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&h=400&fit=crop', caption: 'Flat lay style' },
            { src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop', caption: 'Direct overhead' }
        ]
    },

    'dutch-angle': {
        title: '더치 앵글(Dutch Angle)',
        koreanTitle: '더치 앵글',
        prompt: 'dutch angle, tilted camera',
        description: '카메라를 의도적으로 기울여 수평선이 비스듬하게 보이도록 하는 촬영 기법입니다.',
        usage: [
            '불안정하고 혼란스러운 느낌을 줄 때',
            '긴장감이나 불안감을 조성할 때',
            '캐릭터의 심리적 불안정을 표현할 때',
            '액션 씬에서 역동성을 더할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/1ec7b0a2-cf1d-4e61-8ed4-e3ed66af22b9/0_3.png', caption: 'Tilted perspective' },
            { src: 'https://cdn.midjourney.com/1ec7b0a2-cf1d-4e61-8ed4-e3ed66af22b9/0_0.png', caption: 'Dynamic angle' },
            { src: 'https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?w=600&h=400&fit=crop', caption: 'Unstable feeling' },
            { src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop', caption: 'Dramatic tilt' }
        ]
    },

    'worms-eye': {
        title: '웜즈 아이 뷰(Worm\'s Eye View)',
        koreanTitle: '웜즈 아이 뷰',
        prompt: 'worms eye view',
        description: '지면 높이에서 위를 올려다보는 극단적인 로우 앵글로, 피사체가 거대하고 위압적으로 보입니다.',
        usage: [
            '피사체의 위엄과 권력을 극대화할 때',
            '건물이나 나무의 웅장함을 표현할 때',
            '영웅적인 인물을 묘사할 때',
            '관객에게 작고 무력한 느낌을 줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/653f8a92-a2f9-4316-bd05-0594cb3348e0/0_0.png', caption: 'Ground perspective' },
            { src: 'https://cdn.midjourney.com/7b03ce40-99f9-4eca-a268-7c948c708571/0_1.png', caption: 'Looking up' },
            { src: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop', caption: 'Extreme low angle' },
            { src: 'https://images.unsplash.com/photo-1508138221679-760a23a2285b?w=600&h=400&fit=crop', caption: 'Heroic angle' }
        ]
    },

    'ground-level': {
        title: '그라운드 레벨(Ground Level)',
        koreanTitle: '그라운드 레벨',
        prompt: 'ground level shot',
        description: '카메라를 지면에 놓고 촬영하는 샷으로, 독특한 시점을 제공합니다.',
        usage: [
            '작은 피사체를 크게 보이게 할 때',
            '독특한 시각적 효과를 원할 때',
            '발걸음이나 바닥의 디테일을 강조할 때',
            '색다른 관점을 제공할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/74aede5c-1cf3-42d3-900c-48858fb17363/0_2.png', caption: 'Floor level' },
            { src: 'https://cdn.midjourney.com/ab7951b4-0f65-467a-bebe-acc759f54395/0_2.png', caption: 'Ground perspective' },
            { src: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=600&h=400&fit=crop', caption: 'Low position' },
            { src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=400&fit=crop', caption: 'Surface level' }
        ]
    },

    // Viewpoint
    'side-view': {
        title: '사이드/프로필 뷰(Side/Profile View)',
        koreanTitle: '사이드/프로필 뷰',
        prompt: 'side profile view',
        description: '피사체를 정확히 90도 측면에서 바라보는 샷으로, 프로필을 명확히 보여줍니다.',
        usage: [
            '인물의 측면 윤곽을 강조할 때',
            '극적인 실루엣을 만들 때',
            '대화 장면에서 방향성을 제시할 때',
            '제품의 측면 디자인을 보여줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/a0710f91-79ad-40fe-909a-4545c37e8ece/0_0.png', caption: 'Profile portrait' },
            { src: 'https://cdn.midjourney.com/f7620359-b4cb-4b5c-a916-884d513e1e29/0_1.png', caption: 'Side silhouette' },
            { src: 'https://images.unsplash.com/photo-1507114845806-0347f6150324?w=600&h=400&fit=crop', caption: 'Lateral view' },
            { src: 'https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?w=600&h=400&fit=crop', caption: 'Profile angle' }
        ]
    },

    'back-view': {
        title: '백 뷰(Back View)',
        koreanTitle: '백 뷰',
        prompt: 'back view, from behind',
        description: '피사체의 뒤에서 바라보는 샷으로, 신비롭고 몰입감 있는 관점을 제공합니다.',
        usage: [
            '관객이 인물과 함께 무언가를 바라보게 할 때',
            '미스터리한 분위기를 조성할 때',
            '인물의 고독함이나 사색을 표현할 때',
            '여정의 시작을 암시할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/5955ef5b-7be0-40a6-a036-f5f746e85bd6/0_0.png', caption: 'Back silhouette' },
            { src: 'https://cdn.midjourney.com/b9f049fd-63d7-4509-a1cb-79889845dbda/0_1.png', caption: 'Rear perspective' },
            { src: 'https://images.unsplash.com/photo-1513097633097-329a3a64e0d4?w=600&h=400&fit=crop', caption: 'From behind' },
            { src: 'https://images.unsplash.com/photo-1492681290082-e932832941e6?w=600&h=400&fit=crop', caption: 'Walking away' }
        ]
    },

    'three-quarter': {
        title: '3/4 뷰(3/4 View)',
        koreanTitle: '3/4 뷰',
        prompt: 'three quarter view',
        description: '피사체를 약 45도 각도에서 바라보는 샷으로, 얼굴의 입체감과 특징을 잘 보여줍니다.',
        usage: [
            '가장 보편적인 인물 촬영 각도',
            '얼굴의 입체감을 표현할 때',
            '자연스럽고 편안한 느낌을 줄 때',
            '제품의 형태를 효과적으로 보여줄 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/9c48b1a3-8c09-4535-bafe-96ce308604a6/0_0.png', caption: 'Three-quarter portrait' },
            { src: 'https://cdn.midjourney.com/2075f43a-1663-47bd-be27-e4af8e9db1b4/0_3.png', caption: '45-degree angle' },
            { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop', caption: 'Classic angle' },
            { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop', caption: 'Natural pose' }
        ]
    },

    'rear-three-quarter': {
        title: '리어 3/4 뷰(Rear 3/4 View)',
        koreanTitle: '리어 3/4 뷰',
        prompt: 'rear three quarter view',
        description: '피사체의 뒤쪽에서 약 45도 각도로 바라보는 샷입니다.',
        usage: [
            '인물이 무언가를 바라보는 방향을 암시할 때',
            '신비로운 분위기를 만들 때',
            '차량이나 제품의 후면 디자인을 보여줄 때',
            '출발이나 이별의 순간을 표현할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/687b9db2-7c89-41b3-8106-7386dbad9be0/0_3.png', caption: 'Rear quarter angle' },
            { src: 'https://cdn.midjourney.com/063df8f1-c026-48ad-94bc-92bc8342b678/0_2.png', caption: 'Back diagonal view' },
            { src: 'https://images.unsplash.com/photo-1495078065017-564723e7e3e7?w=600&h=400&fit=crop', caption: 'Behind angle' },
            { src: 'https://images.unsplash.com/photo-1470093851219-69951fcbb533?w=600&h=400&fit=crop', caption: 'Departure angle' }
        ]
    },

    // Special Shots
    'pov-shot': {
        title: 'POV 샷(POV Shot)',
        koreanTitle: 'POV 샷',
        prompt: 'POV shot, first person view',
        description: '인물의 시점에서 보이는 그대로를 보여주는 샷으로, 1인칭 시점 샷입니다.',
        usage: [
            '관객이 인물의 입장이 되도록 할 때',
            '긴장감과 몰입감을 극대화할 때',
            '인물의 주관적 경험을 공유할 때',
            '공포 영화나 액션 씨퀀에서'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/06cb4cc7-c0af-48de-80d0-1fffa21b9fe0/0_1.png', caption: 'First person view' },
            { src: 'https://cdn.midjourney.com/1e242962-cae4-41f8-b92b-3607635148f2/0_1.png', caption: 'Eyes perspective' },
            { src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop', caption: 'Subjective camera' },
            { src: 'https://images.unsplash.com/photo-1525296141-b09a774890e8?w=600&h=400&fit=crop', caption: 'POV angle' }
        ]
    },

    'over-shoulder': {
        title: '오버더숨더(Over-the-Shoulder)',
        koreanTitle: '오버더숨더',
        prompt: 'over the shoulder shot',
        description: '한 인물의 어깨 너머로 다른 인물이나 대상을 바라보는 샷입니다.',
        usage: [
            '대화 장면의 기본 구도',
            '인물 간의 관계성을 보여줄 때',
            '대화의 방향성을 명확히 할 때',
            '인물의 반응을 포착할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/dcf0a650-031a-4946-94c6-0fde0f74a24a/0_3.png', caption: 'OTS dialogue' },
            { src: 'https://cdn.midjourney.com/df89236a-54ff-44ca-9899-6c3fd31cc954/0_0.png', caption: 'Shoulder frame' },
            { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop', caption: 'Conversation angle' },
            { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop', caption: 'OTS perspective' }
        ]
    },

    'two-shot': {
        title: '투/쓰리/그룹(Two/Three/Group)',
        koreanTitle: '투/쓰리/그룹 샷',
        prompt: 'two shot, three shot, group shot',
        description: '2명, 3명 또는 여러 명이 함께 프레임 안에 들어가는 샷입니다.',
        usage: [
            '인물들 간의 관계를 보여줄 때',
            '대화나 상호작용을 표현할 때',
            '집단의 역학을 보여줄 때',
            '공동체 의식을 강조할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/4269eb8b-a48e-4088-98ce-f919f8191e96/0_3.png', caption: 'Two people' },
            { src: 'https://cdn.midjourney.com/4d77bc10-14d2-4539-a028-2e9d721431f7/0_0.png', caption: 'Group dynamics' },
            { src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop', caption: 'Team shot' },
            { src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop', caption: 'Multiple subjects' }
        ]
    },

    'establishing': {
        title: '에스타블리싱(Establishing)',
        koreanTitle: '에스타블리싱',
        prompt: 'establishing shot',
        description: '장소나 환경을 소개하는 넓은 샷으로, 보통 장면의 시작 부분에 사용됩니다.',
        usage: [
            '새로운 장소를 소개할 때',
            '시간이나 계절을 알릴 때',
            '분위기를 설정할 때',
            '세계관을 구축할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop', caption: 'City establishing' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Location setup' },
            { src: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&h=400&fit=crop', caption: 'Environment shot' },
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Scene setting' }
        ]
    },

    'master-shot': {
        title: '마스터 샷(Master Shot)',
        koreanTitle: '마스터 샷',
        prompt: 'master shot',
        description: '전체 장면을 처음부터 끝까지 담는 넓은 샷으로, 모든 등장인물과 행동을 포함합니다.',
        usage: [
            '장면의 전체 구조를 보여줄 때',
            '편집의 기준점으로 사용',
            '인물들의 위치 관계를 명확히 할 때',
            '연극적인 연출에서'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/2e366ab0-7897-447a-b2d0-d471fc497fca/0_2.png', caption: 'Full scene view' },
            { src: 'https://cdn.midjourney.com/41f6bc5b-c4cf-47ad-9e90-3a24f6b6025f/0_3.png', caption: 'Wide coverage' },
            { src: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop', caption: 'Complete action' },
            { src: 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?w=600&h=400&fit=crop', caption: 'Stage view' }
        ]
    },

    'insert-shot': {
        title: '인서트 샷(Insert Shot)',
        koreanTitle: '인서트 샷',
        prompt: 'insert shot, cutaway',
        description: '주 장면에 삽입되는 짧은 샷으로, 디테일이나 중요한 정보를 보여줍니다.',
        usage: [
            '중요한 디테일을 강조할 때',
            '시간 경과를 표현할 때',
            '인물의 감정을 간접적으로 전달할 때',
            '정보나 단서를 제공할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/30d736f5-c5f1-4a8a-afd2-4f35980095e1/0_0.png', caption: 'Detail insert' },
            { src: 'https://cdn.midjourney.com/1c40d32b-f3ce-4b7d-b9e9-d4f8a1867ba1/0_3.png', caption: 'Close detail' },
            { src: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=600&h=400&fit=crop', caption: 'Information shot' },
            { src: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&h=400&fit=crop', caption: 'Cutaway detail' }
        ]
    },

    // Composition
    'rule-of-thirds': {
        title: '삼등분 법칙(Rule of Thirds)',
        koreanTitle: '삼등분 법칙',
        prompt: 'rule of thirds composition',
        description: '화면을 가로와 세로로 각각 3등분하여 교차점에 주요 요소를 배치하는 구도입니다.',
        usage: [
            '안정감 있고 균형 잡힌 구도',
            '시선을 자연스럽게 유도할 때',
            '주체와 배경의 균형을 맞출 때',
            '풍경 사진에서 수평선 배치'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/11557617-e77f-406a-9e6c-85df3e6172b7/0_3.png', caption: 'Third lines' },
            { src: 'https://cdn.midjourney.com/fae22985-04ae-42d0-a533-bba482e2e853/0_3.png', caption: 'Intersection points' },
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Balanced composition' },
            { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', caption: 'Grid placement' }
        ]
    },

    'center-comp': {
        title: '중앙 구도(Center Composition)',
        koreanTitle: '중앙 구도',
        prompt: 'center composition',
        description: '주요 피사체를 화면 중앙에 배치하는 가장 직관적인 구도입니다.',
        usage: [
            '피사체에 집중하게 할 때',
            '대칭적인 구도를 만들 때',
            '강력한 존재감을 주고 싶을 때',
            '인물 초상에 적합'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/707e3cb8-f4e9-4db8-801b-ff27d6149990/0_0.png', caption: 'Central focus' },
            { src: 'https://cdn.midjourney.com/24e95385-d267-4e57-94d1-c0fa4e5fd0c1/0_0.png', caption: 'Middle placement' },
            { src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop', caption: 'Centered subject' },
            { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop', caption: 'Direct composition' }
        ]
    },

    'symmetrical': {
        title: '대칭 구도(Symmetrical Shot)',
        koreanTitle: '대칭 구도',
        prompt: 'symmetrical composition',
        description: '화면을 좌우 또는 상하로 대칭되게 구성하는 구도입니다.',
        usage: [
            '안정감과 균형감을 강조할 때',
            '공식적이고 엄숙한 분위기',
            '건축물이나 인테리어 촬영',
            '예술적인 효과를 원할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/b9923de1-02c8-4102-90c1-54a671f82c58/0_2.png', caption: 'Perfect symmetry' },
            { src: 'https://cdn.midjourney.com/18ae1a6d-08f8-4f21-bab7-04c75b2e4bcd/0_2.png', caption: 'Mirror composition' },
            { src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=600&h=400&fit=crop', caption: 'Balanced structure' },
            { src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop', caption: 'Symmetric design' }
        ]
    },

    'frame-in-frame': {
        title: '프레임 속 프레임(Frame in Frame)',
        koreanTitle: '프레임 속 프레임',
        prompt: 'frame within a frame',
        description: '화면 안에 다른 프레임 요소를 사용하여 깊이감을 만드는 구도입니다.',
        usage: [
            '깊이감과 차원을 추가할 때',
            '주의를 집중시키고 싶을 때',
            '창문이나 문을 통한 샷',
            '스토리텔링에 효과적'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/fc2d46e4-5147-4b45-94e5-27e22a38de4b/0_1.png', caption: 'Natural frame' },
            { src: 'https://cdn.midjourney.com/8894ecf6-5d3c-4627-9142-9200fdfad06a/0_0.png', caption: 'Doorway frame' },
            { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop', caption: 'Window frame' },
            { src: 'https://images.unsplash.com/photo-1445109673451-c511bb51bd17?w=600&h=400&fit=crop', caption: 'Nested frames' }
        ]
    },

    'diagonal': {
        title: '대각선 구도(Diagonal)',
        koreanTitle: '대각선 구도',
        prompt: 'diagonal composition',
        description: '대각선을 활용하여 동적이고 활력 있는 구도를 만드는 기법입니다.',
        usage: [
            '움직임과 에너지를 표현할 때',
            '시선을 유도하고 싶을 때',
            '액션과 속도감을 강조할 때',
            '독특한 구도를 원할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/10f8acdb-55ab-45e4-ac66-79076f2da806/0_0.png', caption: 'Diagonal lines' },
            { src: 'https://cdn.midjourney.com/3a24a4e3-4559-434f-a880-2592c0f84fc8/0_2.png', caption: 'Dynamic angle' },
            { src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=600&h=400&fit=crop', caption: 'Tilted composition' },
            { src: 'https://images.unsplash.com/photo-1505739998589-00fc191ce01d?w=600&h=400&fit=crop', caption: 'Energy lines' }
        ]
    },

    'layered': {
        title: '레이어드 샷(Layered Shot)',
        koreanTitle: '레이어드 샷',
        prompt: 'layered composition',
        description: '전경, 중경, 후경의 여러 레이어를 활용한 깊이 있는 구도입니다.',
        usage: [
            '깊이감과 차원을 강조할 때',
            '복잡한 스토리텔링',
            '공간의 규모를 표현할 때',
            '풍경 사진에 효과적'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/7c85f633-9ce2-41de-a997-6e1214f5b345/0_2.png', caption: 'Multiple layers' },
            { src: 'https://cdn.midjourney.com/b6ce553f-a266-4f73-bfec-0583345c74f9/0_3.png', caption: 'Depth layers' },
            { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop', caption: 'Foreground-background' },
            { src: 'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?w=600&h=400&fit=crop', caption: 'Dimensional depth' }
        ]
    },

    'negative-space': {
        title: '네거티브 스페이스(Negative Space)',
        koreanTitle: '네거티브 스페이스',
        prompt: 'negative space composition',
        description: '비어있는 공간을 의도적으로 활용하여 주체를 강조하는 구도입니다.',
        usage: [
            '미니멀한 표현을 원할 때',
            '주체를 돋보이게 할 때',
            '고독함이나 외로움을 표현',
            '예술적 효과를 원할 때'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/001e51a5-1535-45e7-96a9-60e9e7155ad6/0_2.png', caption: 'Empty space' },
            { src: 'https://cdn.midjourney.com/189a0627-065e-4341-b69d-5eb6d2f267e5/0_3.png', caption: 'Minimalist composition' },
            { src: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600&h=400&fit=crop', caption: 'Isolation effect' },
            { src: 'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?w=600&h=400&fit=crop', caption: 'White space' }
        ]
    },

    // ============= LIGHTING =============
    // Natural Light
    'golden-hour': {
        title: '골든 아워(Golden Hour)',
        koreanTitle: '골든 아워',
        prompt: 'golden hour lighting',
        description: '해가 뜨고 난 직후, 그리고 해가 지기 직전의 시간대. 빛이 부드럽고 따뜻한 황금빛을 띱니다.',
        usage: [
            '로맨틱한 분위기를 조성할 때',
            '따뜻하고 향수를 자극하는 장면',
            '풍경과 인물 사진',
            '마법 같은 분위기 연출'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/7d1356ab-4c07-4ff1-81d3-041e8362cc73/0_2.png', caption: 'Warm golden light' },
            { src: 'https://cdn.midjourney.com/d10a0b2e-7a41-41d2-a7f7-06971c628062/0_3.png', caption: 'Sunset glow' }
        ]
    },

    'blue-hour': {
        title: '블루 아워(Blue Hour)',
        koreanTitle: '블루 아워',
        prompt: 'blue hour lighting',
        description: '해가 뜨기 직전, 그리고 해가 진 직후의 시간대. 세상이 전체적으로 차분한 푸른빛을 띱니다.',
        usage: [
            '고요하고 차분한 분위기',
            '도시 야경 촬영',
            'SF나 판타지 장면',
            '신비로운 느낌 연출'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1514539079130-25950c84af65?w=600&h=400&fit=crop', caption: 'Blue twilight' },
            { src: 'https://images.unsplash.com/photo-1493514789931-586cb221d7a7?w=600&h=400&fit=crop', caption: 'Urban blue hour' },
            { src: 'https://images.unsplash.com/photo-1428908728789-d2de25dbd4e2?w=600&h=400&fit=crop', caption: 'Mystical atmosphere' },
            { src: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&h=400&fit=crop', caption: 'Evening blues' }
        ]
    },

    'overcast': {
        title: '흐린 날(Overcast)',
        koreanTitle: '오버캐스트',
        prompt: 'overcast lighting',
        description: '구름이 하늘을 덮어 태양광이 확산되어 부드럽고 균일한 빛을 만드는 조명 상태입니다.',
        usage: [
            '부드러운 그림자가 필요할 때',
            '균일한 조명이 필요한 인물 촬영',
            '차분하고 우울한 분위기',
            '피부톤을 자연스럽게 표현'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/bf83ba48-3509-439a-9173-42b2144b6d7d/0_2.png', caption: 'Soft diffused light' },
            { src: 'https://cdn.midjourney.com/d92e6b97-10d7-4677-8f68-7d387bc93a63/0_1.png', caption: 'Even lighting' }
        ]
    },

    'harsh-sunlight': {
        title: '강한 햇빛(Harsh Sunlight)',
        koreanTitle: '강렬한 햇빛',
        prompt: 'harsh sunlight',
        description: '정오의 직사광선처럼 강하고 직접적인 햇빛으로, 선명한 그림자와 높은 대비를 만듭니다.',
        usage: [
            '극적이고 강렬한 효과',
            '그림자 패턴을 활용한 구성',
            '여름의 뜨거운 느낌',
            '고대비 흑백 사진'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=600&h=400&fit=crop', caption: 'Strong shadows' },
            { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop', caption: 'High contrast' },
            { src: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?w=600&h=400&fit=crop', caption: 'Direct sunlight' },
            { src: 'https://images.unsplash.com/photo-1517524285303-d6fc683dddf8?w=600&h=400&fit=crop', caption: 'Sharp definition' }
        ]
    },

    // Studio Lighting
    'rembrandt': {
        title: '렘브란트 조명(Rembrandt)',
        koreanTitle: '렘브란트 조명',
        prompt: 'Rembrandt lighting',
        description: '빛을 받는 쪽 반대편 뺨에 코 그림자와 뺨 그림자가 만나 작은 빛의 삼각형을 만드는 조명입니다.',
        usage: [
            '고전적이고 예술적인 초상화',
            '깊이 있는 인물 표현',
            '드라마틱한 분위기',
            '진중한 느낌의 포트레이트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/5ced8630-9548-4815-9d04-101416c6091f/0_1.png', caption: 'Classic portrait' },
            { src: 'https://cdn.midjourney.com/e7570d7b-c644-4b22-82c7-a1c5f65a6b78/0_3.png', caption: 'Triangle of light' }
        ]
    },

    'butterfly': {
        title: '버터플라이 조명(Butterfly)',
        koreanTitle: '나비 조명',
        prompt: 'butterfly lighting',
        description: '주 조명을 인물의 정면 위쪽에 배치하여 코 바로 아래에 작은 나비 모양의 그림자를 만드는 조명입니다.',
        usage: [
            '글래머러스한 뷰티 화보',
            '할리우드 스타일 포트레이트',
            '패션 사진',
            '이상적인 아름다움 표현'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/686815c8-2fd7-426b-8cd5-04b08da5f3cb/0_2.png', caption: 'Glamour lighting' },
            { src: 'https://cdn.midjourney.com/686815c8-2fd7-426b-8cd5-04b08da5f3cb/0_1.png', caption: 'Beauty shot' }
        ]
    },

    'split-lighting': {
        title: '스플릿 조명(Split Lighting)',
        koreanTitle: '분할 조명',
        prompt: 'split lighting',
        description: '조명을 인물의 정측면에 배치하여 얼굴을 밝은 부분과 어두운 부분으로 정확히 반으로 나누는 조명입니다.',
        usage: [
            '강렬하고 극적인 효과',
            '필름 누아르 스타일',
            '미스터리한 분위기',
            '내적 갈등의 표현'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/59125b2d-47e7-4c1d-b885-968ad468f946/0_1.png', caption: 'Half-lit face' },
            { src: 'https://cdn.midjourney.com/1b5a31d7-5f49-45f1-9af9-4ec860fea2eb/0_1.png', caption: 'Film noir style' }
        ]
    },

    'rim-lighting': {
        title: '림 조명(Rim Lighting)',
        koreanTitle: '림 라이팅',
        prompt: 'rim lighting',
        description: '피사체의 윤곽선 전체를 따라 빛의 테두리가 생기는 효과를 만드는 조명 기법입니다.',
        usage: [
            '피사체를 배경과 분리',
            '입체감과 깊이감 추가',
            '신비롭고 극적인 느낌',
            '실루엣 강조'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/57943433-2b1e-446c-9882-b3dcd82d96f2/0_1.png', caption: 'Edge lighting' },
            { src: 'https://cdn.midjourney.com/179a1289-1570-423f-a45b-70cb1c15c961/0_3.png', caption: 'Backlit outline' }
        ]
    },

    // Mood Lighting
    'neon-lights': {
        title: '네온 조명(Neon Lights)',
        koreanTitle: '네온 라이트',
        prompt: 'neon lights',
        description: '형광색의 네온사인이나 LED 조명으로 만드는 현대적이고 도시적인 조명 효과입니다.',
        usage: [
            '사이버펑크 분위기',
            '도시의 밤 장면',
            '클럽이나 바 설정',
            '레트로 또는 미래적 느낌'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/4af97fe2-2693-49d4-b3ec-0f7a6fc176c4/0_1.png', caption: 'Cyberpunk neon' },
            { src: 'https://cdn.midjourney.com/4938d176-c472-46fc-97dd-a05c078ec5ee/0_0.png', caption: 'Urban neon' }
        ]
    },

    'candlelight': {
        title: '촛불(Candlelight)',
        koreanTitle: '캔들라이트',
        prompt: 'candlelight',
        description: '촛불의 부드럽고 따뜻한 빛으로 만드는 아늑하고 로맨틱한 조명입니다.',
        usage: [
            '로맨틱한 분위기',
            '역사적 또는 판타지 설정',
            '친밀하고 아늑한 느낌',
            '종교적이거나 의식적인 장면'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/8dabe2d6-6f2b-42bb-b587-4525adc0405e/0_2.png', caption: 'Warm candle glow' },
            { src: 'https://cdn.midjourney.com/a5f77818-07f2-4f0f-b826-3af8625ead47/0_2.png', caption: 'Romantic mood' }
        ]
    },

    'moonlight': {
        title: '달빛(Moonlight)',
        koreanTitle: '문라이트',
        prompt: 'moonlight',
        description: '달빛의 차갑고 은은한 푸른빛으로 만드는 신비로운 야간 조명입니다.',
        usage: [
            '로맨틱하거나 신비로운 야간 장면',
            '판타지나 공포 분위기',
            '고요하고 평화로운 느낌',
            '꿈같은 분위기'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/c59c229a-70d8-43f7-8db9-9163c4fb3f07/0_3.png', caption: 'Blue moonlight' },
            { src: 'https://cdn.midjourney.com/151c05d8-bba3-4cd6-af08-c82d771ac7f7/0_3.png', caption: 'Night atmosphere' },
            { src: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&h=400&fit=crop', caption: 'Mystical moon' },
            { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop', caption: 'Lunar glow' }
        ]
    },

    'firelight': {
        title: '화염 조명(Firelight)',
        koreanTitle: '파이어라이트',
        prompt: 'firelight',
        description: '모닥불이나 벽난로의 따뜻하고 깜빡이는 주황색 빛으로 만드는 조명입니다.',
        usage: [
            '캠프파이어 장면',
            '원시적이거나 역사적 설정',
            '따뜻하고 아늑한 분위기',
            '생존이나 모험 테마'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/a2a6fe7d-0d3c-40eb-bc7d-f3b81810a1b0/0_0.png', caption: 'Campfire glow' },
            { src: 'https://cdn.midjourney.com/111691e6-6254-448c-bc8a-9c12733c0ec6/0_3.png', caption: 'Fire warmth' },
            { src: 'https://images.unsplash.com/photo-1414124488080-0188dcbb8834?w=600&h=400&fit=crop', caption: 'Flickering light' },
            { src: 'https://images.unsplash.com/photo-1453365607868-7deed8cc7d26?w=600&h=400&fit=crop', caption: 'Orange flames' }
        ]
    },

    // ============= STYLES =============
    // Art Styles
    'photorealistic': {
        title: '포토리얼리스틱(Photorealistic)',
        koreanTitle: '사실주의',
        prompt: 'photorealistic',
        description: '실제 사진과 구별하기 어려울 정도로 정확하고 세밀한 표현 스타일입니다.',
        usage: [
            '제품 시각화',
            '건축 렌더링',
            '광고용 이미지',
            '디지털 휴먼'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/d2fe4f03-1643-4b45-ad5a-87017e5a19c4/0_0.png', caption: 'Realistic portrait' },
            { src: 'https://cdn.midjourney.com/b39be7d5-1837-4321-ae3a-cf50fb17e6c7/0_0.png', caption: 'Photo-real render' },
            { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop', caption: 'Ultra detailed' },
            { src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=400&fit=crop', caption: 'Lifelike quality' }
        ]
    },

    'hyperrealistic': {
        title: '하이퍼리얼리스틱(Hyperrealistic)',
        koreanTitle: '극사실주의',
        prompt: 'hyperrealistic',
        description: '현실보다 더 선명하고 과장된 디테일을 보여주는 극도로 정밀한 표현 스타일입니다.',
        usage: [
            '파인 아트',
            '고해상도 인물화',
            '과학적 일러스트레이션',
            '극세밀 묘사'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/052cd281-1382-4bd6-8e79-7e9dd0218282/0_3.png', caption: 'Extreme detail' },
            { src: 'https://cdn.midjourney.com/7281badd-7f38-4704-96d8-d603f747c986/0_1.png', caption: 'Beyond reality' },
            { src: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop', caption: 'Micro details' },
            { src: 'https://images.unsplash.com/photo-1514846226882-28b324ef7f28?w=600&h=400&fit=crop', caption: 'Ultra precision' }
        ]
    },

    'surrealism': {
        title: '초현실주의(Surrealism)',
        koreanTitle: '초현실주의',
        prompt: 'surrealism',
        description: '현실과 꿈, 의식과 무의식이 혼합된 비논리적이고 환상적인 이미지를 창조하는 스타일입니다.',
        usage: [
            '예술 작품',
            '창의적인 광고',
            '앨범 커버',
            '콘셉추얼 아트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/3db3c134-87da-4db0-87cf-eafc57fb46bc/0_0.png', caption: 'Dreamlike scene' },
            { src: 'https://cdn.midjourney.com/fa3d4d5d-8a1b-4396-a61e-f9e40417882e/0_1.png', caption: 'Surreal composition' },
            { src: 'https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?w=600&h=400&fit=crop', caption: 'Fantasy elements' },
            { src: 'https://images.unsplash.com/photo-1495195129352-aeb325a55b65?w=600&h=400&fit=crop', caption: 'Impossible reality' }
        ]
    },

    'impressionism': {
        title: '인상주의(Impressionism)',
        koreanTitle: '인상주의',
        prompt: 'impressionism',
        description: '빛과 색채의 순간적인 인상을 포착하여 붓터치가 보이는 회화적 스타일입니다.',
        usage: [
            '풍경화',
            '감성적인 포트레이트',
            '일상 장면',
            '빛의 효과 강조'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/31d32c66-4308-4d03-ba1c-9e5bcfbbdd7a/0_1.png', caption: 'Painterly style' },
            { src: 'https://cdn.midjourney.com/225a11b4-c839-4e69-bfd5-6d3b2943fcce/0_2.png', caption: 'Light effects' },
            { src: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&h=400&fit=crop', caption: 'Color impressions' },
            { src: 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=600&h=400&fit=crop', caption: 'Brushstroke texture' }
        ]
    },

    'minimalism': {
        title: '미니멀리즘(Minimalism)',
        koreanTitle: '미니멀리즘',
        prompt: 'minimalism',
        description: '필수적인 요소만을 사용하여 단순하고 깔끔한 구성을 추구하는 스타일입니다.',
        usage: [
            '현대 건축',
            '브랜드 디자인',
            '추상 예술',
            '제품 디자인'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/19d2d425-aa59-4c35-92af-ff2a278fb95a/0_1.png', caption: 'Simple forms' },
            { src: 'https://cdn.midjourney.com/e63b8047-e15d-4b5a-9613-3e06c73478b0/0_1.png', caption: 'Clean composition' },
            { src: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=400&fit=crop', caption: 'Essential elements' },
            { src: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?w=600&h=400&fit=crop', caption: 'Reduced aesthetic' }
        ]
    },

    // Digital Art
    'digital-painting': {
        title: '디지털 페인팅(Digital Painting)',
        koreanTitle: '디지털 페인팅',
        prompt: 'digital painting',
        description: '디지털 도구를 사용하여 전통적인 회화 기법을 모방하거나 새로운 스타일을 창조하는 아트입니다.',
        usage: [
            '콘셉트 아트',
            '일러스트레이션',
            '게임 아트',
            '팬 아트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/d7cb8ae6-8e12-4fb5-829f-106a8d1a9862/0_2.png', caption: 'Digital artwork' },
            { src: 'https://cdn.midjourney.com/00d6475e-4689-4912-ace1-c32394fe6486/0_3.png', caption: 'Painted digitally' },
            { src: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=600&h=400&fit=crop', caption: 'Digital brushwork' },
            { src: 'https://images.unsplash.com/photo-1502899576159-f224dc2349fa?w=600&h=400&fit=crop', caption: 'Digital canvas' }
        ]
    },

    'concept-art': {
        title: '컨셉 아트(Concept Art)',
        koreanTitle: '컨셉 아트',
        prompt: 'concept art',
        description: '영화, 게임, 애니메이션 등의 시각적 개념을 개발하고 전달하는 일러스트레이션입니다.',
        usage: [
            '영화 프리프로덕션',
            '게임 개발',
            '캐릭터 디자인',
            '환경 디자인'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/42848a4c-d7f9-402c-9a02-d69b847deaed/0_0.png', caption: 'Character concept' },
            { src: 'https://cdn.midjourney.com/bf513a5b-1cc5-44b1-b9ea-2f28173320f7/0_3.png', caption: 'Environment art' },
            { src: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop', caption: 'Visual development' },
            { src: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=600&h=400&fit=crop', caption: 'Concept design' }
        ]
    },

    'matte-painting': {
        title: '매트 페인팅(Matte Painting)',
        koreanTitle: '매트 페인팅',
        prompt: 'matte painting',
        description: '영화나 게임의 배경을 위해 제작되는 고도로 사실적인 디지털 또는 전통 페인팅입니다.',
        usage: [
            '영화 배경',
            '판타지 환경',
            'VFX 제작',
            '대규모 풍경'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/d40dce8b-9ad9-4b26-a7c1-6e0735d40a6b/0_1.png', caption: 'Epic landscape' },
            { src: 'https://cdn.midjourney.com/78a28f07-f5d9-4611-9406-345930da1465/0_2.png', caption: 'Film background' },
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Fantasy world' },
            { src: 'https://images.unsplash.com/photo-1444927714506-8492d94b4e3d?w=600&h=400&fit=crop', caption: 'Set extension' }
        ]
    },

    '3d-render': {
        title: '3D 렌더(3D Render)',
        koreanTitle: '3D 렌더링',
        prompt: '3D render',
        description: '3D 모델링 소프트웨어를 사용하여 생성된 컴퓨터 그래픽 이미지입니다.',
        usage: [
            '제품 시각화',
            '건축 비주얼',
            '캐릭터 모델',
            'VFX와 애니메이션'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/31eeae82-57d2-4e27-84b0-65cd6a0349f4/0_0.png', caption: '3D model' },
            { src: 'https://cdn.midjourney.com/92fb90a9-1eca-434c-8812-e74a4b9f1f18/0_0.png', caption: 'CGI render' },
            { src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop', caption: 'Product viz' },
            { src: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop', caption: 'Architectural render' }
        ]
    },

    // Illustration Styles
    'anime-style': {
        title: '애니메 스타일(Anime Style)',
        koreanTitle: '애니메 스타일',
        prompt: 'anime style',
        description: '일본 애니메이션의 특징적인 스타일로, 큰 눈과 과장된 표정이 특징입니다.',
        usage: [
            '캐릭터 일러스트',
            '만화',
            '팬 아트',
            '게임 캐릭터'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&h=400&fit=crop', caption: 'Anime character' },
            { src: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop', caption: 'Manga style' },
            { src: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop', caption: 'Japanese animation' },
            { src: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop', caption: 'Anime art' }
        ]
    },

    'cartoon-style': {
        title: '카툰 스타일(Cartoon Style)',
        koreanTitle: '카툰 스타일',
        prompt: 'cartoon style',
        description: '단순화되고 과장된 형태로 유머러스하고 친근한 느낌을 주는 스타일입니다.',
        usage: [
            '어린이 콘텐츠',
            '웹툰',
            '마스코트 디자인',
            '애니메이션'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/668a82a1-c1f7-499b-92bd-caacb8f54646/0_2.png', caption: 'Cartoon character' },
            { src: 'https://cdn.midjourney.com/80c4bf03-2ac1-4e59-b3f9-92736e41b81a/0_0.png', caption: 'Simplified style' },
            { src: 'https://images.unsplash.com/photo-1561494653-744c43aed0c1?w=600&h=400&fit=crop', caption: 'Fun illustration' },
            { src: 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=600&h=400&fit=crop', caption: 'Toon style' }
        ]
    },

    'comic-book': {
        title: '코믹북 스타일(Comic Book)',
        koreanTitle: '코믹북 스타일',
        prompt: 'comic book style',
        description: '미국 만화책의 특징적인 스타일로, 굵은 선과 망점, 선명한 색상이 특징입니다.',
        usage: [
            '슈퍼히어로 콘텐츠',
            '그래픽 노블',
            '액션 씬',
            '팝 아트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/c09d35ad-6780-4e83-b6a9-9413f5fa1c0f/0_0.png', caption: 'Comic art' },
            { src: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=600&h=400&fit=crop', caption: 'Superhero style' },
            { src: 'https://images.unsplash.com/photo-1588862081167-d5b98006637e?w=600&h=400&fit=crop', caption: 'Pop art effect' },
            { src: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=600&h=400&fit=crop', caption: 'Action comic' }
        ]
    },

    'watercolor': {
        title: '수채화(Watercolor)',
        koreanTitle: '수채화',
        prompt: 'watercolor',
        description: '물감의 번짐과 투명한 레이어가 특징인 부드럽고 유동적인 회화 스타일입니다.',
        usage: [
            '감성적인 일러스트',
            '풍경화',
            '동화책 삽화',
            '패션 일러스트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/8ac3b686-5e51-4350-8feb-54e666f21f52/0_0.png', caption: 'Watercolor style 1' },
            { src: 'https://cdn.midjourney.com/2be6fbcb-4932-4902-9783-e4613b1f65f7/0_2.png', caption: 'Watercolor style 2' }
        ]
    },

    // ============= MEDIUM =============
    // Traditional Media
    'oil-painting': {
        title: '유화(Oil Painting)',
        koreanTitle: '유화',
        prompt: 'oil painting',
        description: '유성 물감을 사용한 전통적인 회화 기법으로, 깊이 있는 색감과 질감이 특징입니다.',
        usage: [
            '클래식 초상화',
            '풍경화',
            '정물화',
            '고전 미술'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/52db56d1-d6ef-432e-8c93-f81e5c5b4d1a/0_1.png', caption: 'Oil painting style 1' },
            { src: 'https://cdn.midjourney.com/95fd8a75-a4ac-4713-a26f-fc8e4f717dea/0_3.png', caption: 'Oil painting style 2' }
        ]
    },

    'acrylic-painting': {
        title: '아크릴화(Acrylic Painting)',
        koreanTitle: '아크릴화',
        prompt: 'acrylic painting',
        description: '빠르게 건조되고 다양한 기법이 가능한 현대적인 회화 매체입니다.',
        usage: [
            '현대 미술',
            '추상화',
            '벽화',
            '일러스트레이션'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/e5791bf6-6494-4166-bb0c-6cc421e05284/0_1.png', caption: 'Acrylic painting style 1' },
            { src: 'https://cdn.midjourney.com/f708965d-5c00-4279-aedd-9df3542195f2/0_0.png', caption: 'Acrylic painting style 2' }
        ]
    },

    'pencil-drawing': {
        title: '연필화(Pencil Drawing)',
        koreanTitle: '연필 드로잉',
        prompt: 'pencil drawing',
        description: '흑연 연필로 그리는 가장 기본적인 드로잉 기법으로, 섬세한 명암 표현이 가능합니다.',
        usage: [
            '스케치',
            '초상화',
            '학술 일러스트',
            '콘셉트 스케치'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/16c9ca32-fe0c-4504-aec8-5fc1340522e8/0_2.png', caption: 'Pencil drawing style 1' },
            { src: 'https://cdn.midjourney.com/16c9ca32-fe0c-4504-aec8-5fc1340522e8/0_1.png', caption: 'Pencil drawing style 2' }
        ]
    },

    'charcoal': {
        title: '목탄화(Charcoal)',
        koreanTitle: '차콜 드로잉',
        prompt: 'charcoal drawing',
        description: '목탄을 사용한 드로잉으로, 깊은 검정색과 부드러운 그라데이션이 특징입니다.',
        usage: [
            '인물 드로잉',
            '표현주의 작품',
            '라이프 드로잉',
            '드라마틱한 명암'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/0ee9ebfd-e0a0-4d23-bd29-7ea16f1d38f7/0_2.png', caption: 'Charcoal portrait' },
            { src: 'https://cdn.midjourney.com/4e3234e1-a0ea-4215-8f01-d23a16ce03bd/0_1.png', caption: 'Expressive marks' }
        ]
    },

    // Photography Media
    'digital-photography': {
        title: '디지털 사진(Digital Photography)',
        koreanTitle: '디지털 포토그래피',
        prompt: 'digital photography',
        description: '디지털 센서를 사용하여 촬영하고 편집하는 현대적인 사진 매체입니다.',
        usage: [
            '상업 사진',
            '포토저널리즘',
            '예술 사진',
            '일상 기록'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/c4d88a1c-83cf-4e4f-87e3-6b1ef8d77b6a/0_2.png', caption: 'Digital capture' },
            { src: 'https://cdn.midjourney.com/0ece9d6f-ac8d-4568-a6b0-3020d6ea9da1/0_2.png', caption: 'Modern photography' }
        ]
    },

    'film-photography': {
        title: '필름 사진(Film Photography)',
        koreanTitle: '필름 포토그래피',
        prompt: 'film photography',
        description: '아날로그 필름을 사용한 전통적인 사진 매체로, 특유의 질감과 색감이 특징입니다.',
        usage: [
            '예술 사진',
            '웨딩 포토',
            '빈티지 스타일',
            '다큐멘터리'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/d7c40f92-a23e-4027-86f1-c380ab65b6c6/0_2.png', caption: 'Film grain' },
            { src: 'https://cdn.midjourney.com/3e92b39a-bb6c-4cbd-9098-f0d5898cb3bf/0_1.png', caption: 'Analog feel' }
        ]
    },

    'polaroid': {
        title: '폴라로이드(Polaroid)',
        koreanTitle: '폴라로이드',
        prompt: 'polaroid',
        description: '즉석 사진의 대명사로, 특유의 프레임과 색감이 특징적인 사진 매체입니다.',
        usage: [
            '스냅샷',
            '레트로 스타일',
            '이벤트 사진',
            '감성 포토'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/921d12af-5786-4098-88e9-78e94f101587/0_0.png', caption: 'Instant photo' },
            { src: 'https://cdn.midjourney.com/6fc4a8aa-c6f3-436d-973e-5539a27a95af/0_3.png', caption: 'White border' }
        ]
    },

    'long-exposure': {
        title: '장노출(Long Exposure)',
        koreanTitle: '장노출 사진',
        prompt: 'long exposure',
        description: '셔터를 오래 열어 시간의 흐름을 한 장의 이미지에 담는 사진 기법입니다.',
        usage: [
            '빛의 궤적',
            '별 궤적',
            '물의 흐름',
            '도시 야경'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/22bd560a-8fb1-43e8-9eec-641db953e70e/0_3.png', caption: 'Light trails' },
            { src: 'https://cdn.midjourney.com/7a451c1c-45b3-4fd4-a635-c91914774097/0_0.png', caption: 'Star trails' }
        ]
    },

    // Mixed Media
    'collage': {
        title: '콜라주(Collage)',
        koreanTitle: '콜라주',
        prompt: 'collage',
        description: '다양한 재료와 이미지를 조합하여 하나의 작품을 만드는 혼합 매체 기법입니다.',
        usage: [
            '실험적 예술',
            '스크랩북',
            '광고 디자인',
            '콘셉추얼 아트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/c1d12a67-4db2-4a95-a722-82abf22bbb94/0_0.png', caption: 'Mixed elements' },
            { src: 'https://cdn.midjourney.com/5bc4cc7b-b578-4ab8-8b3e-3f333d3d61c8/0_1.png', caption: 'Paper collage' }
        ]
    },

    'digital-collage': {
        title: '디지털 콜라주(Digital Collage)',
        koreanTitle: '디지털 콜라주',
        prompt: 'digital collage',
        description: '디지털 도구를 사용하여 다양한 이미지와 요소를 합성하는 현대적 콜라주 기법입니다.',
        usage: [
            '포스터 디자인',
            '앨범 커버',
            '소셜 미디어 아트',
            '디지털 아트'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/cdc74a9a-0d7d-44d8-87b8-39cec11b2b6b/0_1.png', caption: 'Digital composite' },
            { src: 'https://cdn.midjourney.com/43d9e2e1-84ba-471f-b8cf-0b432459b4fb/0_2.png', caption: 'Photo manipulation' }
        ]
    },

    'mixed-technique': {
        title: '혼합 기법(Mixed Technique)',
        koreanTitle: '믹스드 테크닉',
        prompt: 'mixed media',
        description: '여러 매체와 기법을 자유롭게 조합하여 새로운 표현을 만드는 실험적 접근입니다.',
        usage: [
            '실험적 예술',
            '현대 미술',
            '텍스처 아트',
            '멀티미디어 작품'
        ],
        images: [
            { src: 'https://cdn.midjourney.com/2142e7e4-96e0-4097-9a79-13f3917517ee/0_3.png', caption: 'Combined media' },
            { src: 'https://cdn.midjourney.com/a125b558-1439-4418-af59-bd93ea06554b/0_1.png', caption: 'Experimental art' }
        ]
    },

    // ============= VIDEO CAMERA EFFECTS =============
    // Camera Movement
    'pan': {
        title: '팬(Pan)',
        koreanTitle: '패닝',
        prompt: 'camera pan',
        description: '카메라를 수평으로 회전시켜 좌우로 이동하는 촬영 기법입니다.',
        usage: [
            '넓은 풍경을 보여줄 때',
            '인물의 시선을 따라갈 때',
            '공간의 연결성을 보여줄 때',
            '대화하는 두 인물 사이를 이동'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Horizontal movement' },
            { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop', caption: 'Pan shot' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/4bbde702-836e-4fc5-b8ee-da134738be50/0.mp4', caption: 'Camera pan example 1' },
            { src: 'https://cdn.midjourney.com/video/02398193-3843-4f96-ab81-3cb2cad3ce69/0.mp4', caption: 'Camera pan example 2' }
        ]
    },

    'tilt': {
        title: '틸트(Tilt)',
        koreanTitle: '틸팅',
        prompt: 'camera tilt',
        description: '카메라를 수직으로 회전시켜 위아래로 이동하는 촬영 기법입니다.',
        usage: [
            '높은 건물을 보여줄 때',
            '인물의 전신을 스캔할 때',
            '위압감이나 규모를 강조할 때',
            '시선의 이동을 유도'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop', caption: 'Vertical movement' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Tilt up' },
            { src: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?w=600&h=400&fit=crop', caption: 'Building reveal' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Tilt down' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/8cd7fc99-d201-4091-9768-11b7155615f3/0.mp4', caption: 'Camera tilt example 1' },
            { src: 'https://cdn.midjourney.com/video/c4fb2244-3298-4e02-96b5-b82a895a5897/0.mp4', caption: 'Camera tilt example 2' }
        ]
    },

    'dolly': {
        title: '달리(Dolly)',
        koreanTitle: '달리 샷',
        prompt: 'dolly shot',
        description: '카메라 전체를 앞뒤로 이동시키는 촬영 기법입니다.',
        usage: [
            '피사체에 접근하거나 멀어질 때',
            '감정적 거리감을 조절할 때',
            '긴장감을 고조시킬 때',
            '공간감을 표현할 때'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Forward dolly' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Backward dolly' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Smooth movement' },
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Track dolly' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/32f518ca-b8d7-43bf-9bad-affa753b4eff/0.mp4', caption: 'Dolly shot example 1' },
            { src: 'https://cdn.midjourney.com/video/10f6b313-e47b-4335-a36d-6200229ea8d8/0.mp4', caption: 'Dolly shot example 2' }
        ]
    },

    'tracking': {
        title: '트래킹(Tracking)',
        koreanTitle: '트래킹 샷',
        prompt: 'tracking shot',
        description: '움직이는 피사체를 따라가며 촬영하는 기법입니다.',
        usage: [
            '달리는 인물을 따라갈 때',
            '차량 추격 장면',
            '긴 복도를 이동할 때',
            '역동적인 액션 씬'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Following subject' },
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Lateral tracking' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Action follow' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Smooth tracking' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/f32eaa9d-664e-41ad-9efb-b79f42e1b6b4/0.mp4', caption: 'Tracking shot example 1' },
            { src: 'https://cdn.midjourney.com/video/c4546ac9-cad6-481b-988b-5430e101053e/0.mp4', caption: 'Tracking shot example 2' }
        ]
    },

    'crane': {
        title: '크레인(Crane)',
        koreanTitle: '크레인 샷',
        prompt: 'crane shot',
        description: '크레인을 사용하여 카메라를 높이 올리거나 내리는 대규모 움직임입니다.',
        usage: [
            '웅장한 전경을 보여줄 때',
            '전투 씬의 규모를 표현',
            '영화의 오프닝이나 엔딩',
            '극적인 reveal 장면'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=400&fit=crop', caption: 'Aerial movement' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop', caption: 'Epic reveal' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/a31ce983-b68f-4d08-86b4-612adab33ec4/0.mp4', caption: 'Crane shot example 1' },
            { src: 'https://cdn.midjourney.com/video/c99c1d2d-657c-4dde-bd41-52d075b8ed30/0.mp4', caption: 'Crane shot example 2' }
        ]
    },

    'handheld': {
        title: '핸드헬드(Handheld)',
        koreanTitle: '핸드헬드',
        prompt: 'handheld camera',
        description: '카메라를 손으로 들고 촬영하여 자연스러운 흔들림이 있는 기법입니다.',
        usage: [
            '다큐멘터리적 리얼리즘',
            '긴박한 액션 씬',
            '주인공의 시점 표현',
            '불안정한 감정 상태'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop', caption: 'Documentary style' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Natural shake' },
            { src: 'https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=600&h=400&fit=crop', caption: 'Raw feeling' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Intimate view' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/06c262d7-2224-434d-ae1e-ca0f8c65eba6/0.mp4', caption: 'Handheld camera example 1' },
            { src: 'https://cdn.midjourney.com/video/62dbb6e7-f3f5-4e12-bccf-4f6f93c3c49e/0.mp4', caption: 'Handheld camera example 2' }
        ]
    },

    // Transitions
    'cut': {
        title: '컷(Cut)',
        koreanTitle: '컷',
        prompt: 'hard cut',
        description: '한 장면에서 다른 장면으로 즉시 전환하는 가장 기본적인 편집 기법입니다.',
        usage: [
            '시간과 공간의 즉각적 전환',
            '빠른 리듬감 조성',
            '대화 장면 편집',
            '액션의 연속성'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Instant transition' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Scene change' },
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Quick cut' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Direct switch' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/83fc363e-51dc-41ff-b026-8c6e7da0275b/0.mp4', caption: 'Hard cut example 1' },
            { src: 'https://cdn.midjourney.com/video/36aa24ba-9579-4b2c-8c46-41d802ad8c56/0.mp4', caption: 'Hard cut example 2' }
        ]
    },

    'fade': {
        title: '페이드(Fade)',
        koreanTitle: '페이드',
        prompt: 'fade in,out',
        description: '화면이 점점 어두워지거나(Fade Out) 밝아지는(Fade In) 전환 효과입니다.',
        usage: [
            '시간의 경과 표현',
            '장면의 시작과 끝',
            '꿈이나 회상 장면',
            '감정적 여운'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1516571748831-5d81767b788d?w=600&h=400&fit=crop', caption: 'Fade to black' },
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Fade in' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Gradual transition' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Soft ending' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/c5b6d43e-513c-47b0-9b6f-695e2a5ebe41/0.mp4', caption: 'Fade in/out example 1' },
            { src: 'https://cdn.midjourney.com/video/b1eeef73-00cd-492c-b6b9-7e5c3a33e400/0.mp4', caption: 'Fade in/out example 2' }
        ]
    },

    'dissolve': {
        title: '디졸브(Dissolve)',
        koreanTitle: '디졸브',
        prompt: 'dissolve transition',
        description: '한 장면이 사라지면서 동시에 다음 장면이 나타나는 부드러운 전환입니다.',
        usage: [
            '시간의 부드러운 경과',
            '장소의 전환',
            '연관성 있는 장면 연결',
            '몽환적 분위기'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Cross dissolve' },
            { src: 'https://images.unsplash.com/photo-1516571748831-5d81767b788d?w=600&h=400&fit=crop', caption: 'Smooth blend' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Overlapping images' },
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Soft transition' }
        ],
        videos: [
            { src: 'https://www.dropbox.com/scl/fi/g1rr6b4wmchcvype8uzqv/.mp4?rlkey=yyg9msfagzhqu0dk5rp6q3knr&st=2mrkv037&raw=1', caption: 'Dissolve transition effect' }
        ]
    },

    'wipe': {
        title: '와이프(Wipe)',
        koreanTitle: '와이프',
        prompt: 'wipe transition',
        description: '화면이 특정 방향으로 닦이듯이 다음 장면으로 전환되는 효과입니다.',
        usage: [
            '공간의 이동 표현',
            '코미디적 효과',
            '레트로 스타일',
            'Star Wars 스타일'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Directional wipe' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Screen wipe' },
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Slide transition' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Creative wipe' }
        ],
        videos: [
            { src: 'https://www.dropbox.com/scl/fi/2pprt6g78qvmx74cdxwh6/.mp4?rlkey=kz9y0duem3yse1v7cki9vjj3q&st=bk9pfjjp&raw=1', caption: 'Wipe transition effect' }
        ]
    },

    'match-cut': {
        title: '매치 컷(Match Cut)',
        koreanTitle: '매치 컷',
        prompt: 'match cut',
        description: '시각적으로 유사한 요소를 이용해 서로 다른 장면을 연결하는 창의적 편집입니다.',
        usage: [
            '시공간의 도약',
            '주제적 연결',
            '시각적 연속성',
            '은유적 표현'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=400&fit=crop', caption: 'Visual match' },
            { src: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600&h=400&fit=crop', caption: 'Shape matching' },
            { src: 'https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?w=600&h=400&fit=crop', caption: 'Action match' },
            { src: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=600&h=400&fit=crop', caption: 'Creative link' }
        ]
    },

    // Special Effects
    'slow-motion': {
        title: '슬로우 모션(Slow Motion)',
        koreanTitle: '슬로모션',
        prompt: 'slow motion',
        description: '실제보다 느린 속도로 재생하여 동작을 강조하는 효과입니다.',
        usage: [
            '극적인 순간 강조',
            '액션 씬의 디테일',
            '감정적 임팩트',
            '스포츠 하이라이트'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop', caption: 'Dramatic effect' },
            { src: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?w=600&h=400&fit=crop', caption: 'Action detail' },
            { src: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=600&h=400&fit=crop', caption: 'Time stretch' },
            { src: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=600&h=400&fit=crop', caption: 'Epic moment' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/1230e36a-fc0e-46f0-9f92-14d7cafb9767/0.mp4', caption: 'Slow motion example 1' },
            { src: 'https://cdn.midjourney.com/video/1fc09d91-03f1-4657-948b-20717809598a/0.mp4', caption: 'Slow motion example 2' }
        ]
    },

    'time-lapse': {
        title: '타임랩스(Time-lapse)',
        koreanTitle: '타임랩스',
        prompt: 'time-lapse',
        description: '긴 시간을 짧게 압축하여 빠르게 재생하는 기법입니다.',
        usage: [
            '시간의 흐름 표현',
            '도시의 변화',
            '자연 현상',
            '건설 과정'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1514897575457-c4db467cf78e?w=600&h=400&fit=crop', caption: 'Time compression' },
            { src: 'https://images.unsplash.com/photo-1493514789931-586cb221d7a7?w=600&h=400&fit=crop', caption: 'City timelapse' },
            { src: 'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=600&h=400&fit=crop', caption: 'Cloud movement' },
            { src: 'https://images.unsplash.com/photo-1519608425089-7f3bfa6f6bb8?w=600&h=400&fit=crop', caption: 'Star trails' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/83dd9038-03eb-4191-acc4-7e408af64086/0.mp4', caption: 'Time-lapse example 1' },
            { src: 'https://cdn.midjourney.com/video/0d1299d0-84d1-4c6c-b953-adf573e24d83/0.mp4', caption: 'Time-lapse example 2' }
        ]
    },

    'freeze-frame': {
        title: '프리즈 프레임(Freeze Frame)',
        koreanTitle: '정지 화면',
        prompt: 'freeze frame',
        description: '움직이는 영상을 특정 순간에 정지시키는 효과입니다.',
        usage: [
            '중요한 순간 강조',
            '내레이션 삽입',
            '극적인 엔딩',
            '캐릭터 소개'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop', caption: 'Frozen moment' },
            { src: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?w=600&h=400&fit=crop', caption: 'Action pause' },
            { src: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=600&h=400&fit=crop', caption: 'Still frame' },
            { src: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=600&h=400&fit=crop', caption: 'Time stop' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/ec06fa05-a333-4821-96a7-09fe3ff59666/0.mp4', caption: 'Freeze frame example 1' },
            { src: 'https://cdn.midjourney.com/video/53c3a3e7-25a2-4cbf-bde0-2aae52d1a542/0.mp4', caption: 'Freeze frame example 2' }
        ]
    },

    'motion-blur': {
        title: '모션 블러(Motion Blur)',
        koreanTitle: '모션 블러',
        prompt: 'motion blur',
        description: '빠른 움직임을 흐릿하게 표현하여 속도감을 나타내는 효과입니다.',
        usage: [
            '속도감 표현',
            '액션의 강조',
            '시간의 흐름',
            '역동적 에너지'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop', caption: 'Speed effect' },
            { src: 'https://images.unsplash.com/photo-1474224017046-182ece80b263?w=600&h=400&fit=crop', caption: 'Movement blur' },
            { src: 'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=600&h=400&fit=crop', caption: 'Dynamic motion' },
            { src: 'https://images.unsplash.com/photo-1509909756405-be0199881695?w=600&h=400&fit=crop', caption: 'Action blur' }
        ],
        videos: [
            { src: 'https://cdn.midjourney.com/video/d9a5afb5-a846-4a58-8fb7-e2e217f34063/0.mp4', caption: 'Motion blur example 1' },
            { src: 'https://cdn.midjourney.com/video/e1d217d4-bc4a-413f-8c24-3993c5002b8e/0.mp4', caption: 'Motion blur example 2' }
        ]
    },

    // ============= AIFI FRAMEWORK =============
    'instructor-profile': {
        title: '강사 소개',
        koreanTitle: '강사 소개',
        prompt: 'AI TOOLBEE 창시자',
        instructorInfo: {
            name: '김진욱 (하루오프)',
            nickname: '하루오프',
            positions: [
                'AI TOOLBEE 개발 이사',
                '(주)알앤픽 대표이사',
                '(주)제이콥소프트 전략영업대표'
            ]
        },
        description: 'AI TOOLBEE의 전체적인 시스템 개발자로서 AIFI님과 함께 영상프레임워크의 새로움 패러다임을 도입하여 체계적인 프롬프트 엔지니어링과 창작 프로세스를 통해 누구나 고품질 콘텐츠를 제작할 수 있도록 하였습니다.',
        usage: [
            'AI TOOLBEE 개발 및 교육',
            'AI 기반 콘텐츠 제작 솔루션',
            '체계적인 프롬프트 엔지니어링 방법론',
            '창작자를 위한 실무 교육 프로그램'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop', caption: '강사 프로필' }
        ]
    },

    'intro-videos': {
        title: '인트로 영상 갤러리',
        koreanTitle: '인트로 영상 갤러리',
        prompt: '영상 소개',
        description: 'AI TOOLBEE와 관련된 다양한 인트로 영상을 감상하실 수 있습니다. 각 영상을 클릭하면 전체화면으로 재생됩니다.',
        usage: [
            'AIFI JU0님의 영상',
            '기술 데모 영상',
            '튜토리얼 인트로 영상',
            'VEO3로 영상개발'
        ],
        videos: [
            {
                url: 'https://www.dropbox.com/scl/fi/6okpom058uatv5zkb06hb/.mp4?rlkey=zcomcwkp5qjr5d0x6xnytce28&st=klgl7ygv&raw=1',
                thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
                title: 'AIFI JU0 님의 영상',
                description: '중세시대 혼돈의 시기를 이겨내는 전쟁신 인트로 영상'
            },
            {
                url: 'https://www.dropbox.com/scl/fi/toi1rrhkdviwe55y85ofu/A8EFD160-FA11-4A34-A409-E1792DBCC723_video.MP4?rlkey=agk6cyqkderoh0mvb5k9ha3wa&st=493c855y&raw=1',
                thumbnail: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
                title: '나 혼자만 레벨업 3D랜더링',
                description: '최강의 웹툰 "나 혼자만 레벨업"의 3D랜더링한 작품'
            },
            {
                url: 'https://www.dropbox.com/scl/fi/gfvw1jkg84kwoegz4l39w/E27D0315-B046-4036-B1CD-D43829E8BA47_video.MP4?rlkey=mcz0df3ivly21gucv1rfa1192&st=mhh9ow8i&raw=1',
                thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
                title: '튜토리얼 인트로',
                description: '초보자를 위한 AI TOOLBEE 튜토리얼 시작 영상입니다.'
            },
            {
                url: 'https://www.dropbox.com/scl/fi/7udhyo2b5v0p4u0uu91lh/_schema_httpjsonschemaorgdraft07-1.mp4?rlkey=lqhpz4al7u9t377kvx78ehn34&st=zizgjtd4&raw=1',
                thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
                title: '프로젝트 쇼케이스',
                description: 'AI TOOLBEE를 활용한 다양한 프로젝트 결과물을 소개하는 영상입니다.'
            }
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop', caption: '영상 제작 스튜디오' },
            { src: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop', caption: 'AI 기술 활용' }
        ]
    },

    // ============= AIFI 툴 =============
    'aifi-image-generator': {
        title: '이미지 생성기',
        koreanTitle: 'AI 이미지 생성',
        prompt: 'AI 이미지 생성',
        description: '텍스트 프롬프트를 입력하여 고품질 이미지를 생성할 수 있는 도구입니다. Google Gemini API를 활용하여 전문 사진작가 수준의 이미지를 제작할 수 있습니다.',
        usage: [
            '텍스트 프롬프트로 이미지 생성',
            '창작 아이디어 시각화',
            '콘텐츠 제작용 이미지',
            '프로토타입 디자인'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop', caption: 'AI 이미지 생성' },
            { src: 'https://images.unsplash.com/photo-1686191128892-34a1dc6cd904?w=600&h=400&fit=crop', caption: '창작 도구' }
        ]
    },

    'aifi-prompt-extractor': {
        title: '프롬프트 추출기',
        koreanTitle: '이미지 프롬프트 추출',
        prompt: '이미지 분석 및 프롬프트 추출',
        description: '업로드된 이미지를 분석하여 AI 이미지 생성에 사용할 수 있는 구조화된 프롬프트를 자동으로 추출합니다.',
        usage: [
            '이미지 역분석',
            '프롬프트 학습',
            '스타일 분석',
            '재현 가능한 프롬프트 생성'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop', caption: '이미지 분석' },
            { src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop', caption: '프롬프트 추출' }
        ]
    },

    'aifi-image-variator': {
        title: '이미지 변형기',
        koreanTitle: '이미지 변형 생성',
        prompt: '이미지 변형 및 편집',
        description: '기존 이미지를 업로드하고 변형 지시사항을 입력하여 새로운 버전의 이미지를 생성할 수 있습니다.',
        usage: [
            '이미지 스타일 변경',
            '창작적 변형',
            '버전 생성',
            '아이디어 발전'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1558346489-ace63f442871?w=600&h=400&fit=crop', caption: '이미지 변형' },
            { src: 'https://images.unsplash.com/photo-1609592043530-1d8c5df5f3f9?w=600&h=400&fit=crop', caption: '창작적 편집' }
        ]
    },

    'aifi-video-prompt': {
        title: '영상 프롬프트 생성기',
        koreanTitle: '영상 프롬프트 생성',
        prompt: 'AI 영상 프롬프트 생성',
        description: '텍스트 아이디어를 입력하면 Veo 3와 같은 텍스트-투-비디오 AI 모델에서 사용할 수 있는 상세한 JSON 프롬프트를 생성합니다.',
        usage: [
            '영상 제작 계획',
            'AI 영상 생성 프롬프트',
            '시나리오 구조화',
            '영상 스타일 정의'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop', caption: '영상 제작' },
            { src: 'https://images.unsplash.com/photo-1626544901077-f6dac3ee9aa6?w=600&h=400&fit=crop', caption: 'AI 영상 생성' }
        ]
    },

    // ============= HAIRSTYLES =============
    'hairstyles': {
        title: '헤어스타일(Hairstyles)',
        koreanTitle: '헤어스타일 키워드',
        prompt: 'hairstyle keywords',
        description: 'AI 이미지 생성을 위한 다양한 헤어스타일 키워드를 제공합니다. 각 스타일을 클릭하면 프롬프트가 생성됩니다.',
        usage: [
            '포트레이트 이미지 생성',
            '캐릭터 디자인',
            '패션 일러스트레이션',
            '뷰티 콘텐츠 제작'
        ],
        currentTab: 'woman',
        womanHairstyles: [
            {
                name: 'bun',
                koreanName: '번 헤어',
                description: 'messy bun hairstyle',
                image: 'https://cdn.midjourney.com/345a49a0-e15b-44f2-abc6-fc130c76015d/0_3.png'
            },
            {
                name: 'double bun',
                koreanName: '더블 번',
                description: 'space buns hairstyle',
                image: 'https://cdn.midjourney.com/a75c68ef-a730-40f1-b69c-35815a3293da/0_1.png'
            },
            {
                name: 'wavy',
                koreanName: '웨이브',
                description: 'wavy hair',
                image: 'https://cdn.midjourney.com/73c5cf81-a0cc-4a88-9ed4-3e0c2fa37a01/0_2.png'
            },
            {
                name: 'crown braid',
                koreanName: '크라운 브레이드',
                description: 'crown braid hairstyle',
                image: 'https://cdn.midjourney.com/e99b9769-7cc9-4924-9c59-3895bceb342d/0_1.png'
            },
            {
                name: 'double braid',
                koreanName: '더블 브레이드',
                description: 'twin braids hairstyle',
                image: 'https://cdn.midjourney.com/0d5d280e-b7a6-49c2-85dd-a726e13bdd46/0_1.png'
            },
            {
                name: 'short bob',
                koreanName: '숏 보브',
                description: 'short bob haircut',
                image: 'https://cdn.midjourney.com/367e90e7-3d07-45ed-b0ec-8aed5da19dbc/0_3.png'
            },
            {
                name: 'short with bangs',
                koreanName: '숏 뱅 헤어',
                description: 'short hair with bangs',
                image: 'https://cdn.midjourney.com/88f20f30-adb5-42c6-a2df-af340f5cf36c/0_0.png'
            },
            {
                name: 'ponytail',
                koreanName: '포니테일',
                description: 'sleek ponytail hairstyle',
                image: 'https://cdn.midjourney.com/45c47806-87f5-4bbd-b676-dc0a324380ec/0_0.png'
            },
            {
                name: 'straight',
                koreanName: '스트레이트',
                description: 'straight shoulder-length hair',
                image: 'https://cdn.midjourney.com/9ca3532d-a75f-44d7-9cc0-2016187ee79a/0_3.png'
            },
            {
                name: 'finger curls',
                koreanName: '핑거 컬',
                description: 'tight finger curls hairstyle',
                image: 'https://cdn.midjourney.com/364f299c-41ec-4e83-b28b-8930fd6d8c25/0_2.png'
            }
        ],
        manHairstyles: [
            {
                name: 'undercut',
                koreanName: '언더컷',
                description: 'undercut haircut',
                image: 'https://cdn.midjourney.com/dfef2aae-0c79-4b4f-8f3d-9c255416dbc6/0_0.png'
            },
            {
                name: 'fade haircut',
                koreanName: '페이드 컷',
                description: 'fade haircut',
                image: 'https://cdn.midjourney.com/0b69e682-8996-4d55-81b6-642980ae0b39/0_3.png'
            },
            {
                name: 'buzz cut',
                koreanName: '버즈컷',
                description: 'buzz cut',
                image: 'https://cdn.midjourney.com/14401a7d-a7ea-488c-bb00-988449f49688/0_2.png'
            },
            {
                name: 'pompadour',
                koreanName: '포마드',
                description: 'pompadour hairstyle',
                image: 'https://cdn.midjourney.com/ec8c4da2-4ea8-435c-8532-df4f36d008b6/0_1.png'
            },
            {
                name: 'quiff',
                koreanName: '퀴프',
                description: 'quiff hairstyle',
                image: 'https://cdn.midjourney.com/bf4f82b4-c637-40e0-8f57-6cefcfc283b8/0_3.png'
            },
            {
                name: 'side part',
                koreanName: '사이드 파트',
                description: 'side part hairstyle',
                image: 'https://cdn.midjourney.com/5d4da5ba-b20a-47c3-a14a-89009ba59c70/0_2.png'
            },
            {
                name: 'man bun',
                koreanName: '맨번',
                description: 'man bun hairstyle',
                image: 'https://cdn.midjourney.com/240d7963-d4d2-4c40-8eec-ddca6f7bb7e3/0_1.png'
            },
            {
                name: 'crew cut',
                koreanName: '크루컷',
                description: 'crew cut',
                image: 'https://cdn.midjourney.com/c6227112-8a39-4cb5-8150-229bbaa5b39d/0_3.png'
            },
            {
                name: 'slicked back',
                koreanName: '슬릭백',
                description: 'slicked back hairstyle',
                image: 'https://cdn.midjourney.com/c5bf2f7e-3efb-45f7-9b42-0e528a5ebe58/0_2.png'
            },
            {
                name: 'textured crop',
                koreanName: '텍스처드 크롭',
                description: 'textured crop hairstyle',
                image: 'https://cdn.midjourney.com/99ef0e6a-f544-497d-88ea-3d2b8d4a02dd/0_3.png'
            }
        ],
        images: []
    },

    // ============= FRAMEWORK STAGES =============
    'framework-stages': {
        title: '프레임워크 스테이지',
        koreanTitle: 'AIFI Framework Stages',
        prompt: '',
        description: 'AI TOOLBEE의 8단계 스테이지를 통해 체계적으로 학습하고 실습할 수 있습니다. 각 스테이지는 Google Gemini를 활용한 실전 프로젝트입니다.',
        usage: [],
        stages: [
            {
                id: 1,
                title: '스테이지 1',
                subtitle: '시놉시스 아이디어 창출 단계',
                description: '창의적인 스토리 아이디어를 구상하고 시놉시스를 작성하는 방법을 학습합니다.',
                url: 'https://gemini.google.com/gem/1tWO58mOJuoVdeKxEOCNYWHHUvUeAEXla?usp=sharing'
            },
            {
                id: 2,
                title: '스테이지 2',
                subtitle: '시나리오 작성단계',
                description: '구체적인 시나리오와 스크립트를 작성하여 스토리를 완성합니다.',
                url: 'https://gemini.google.com/gem/1jjSS7hLmZi3E0O0Tuaq0gQtYBSEfx6dw?usp=sharing'
            },
            {
                id: 3,
                title: '스테이지 3',
                subtitle: '컨셉아트 단계',
                description: '스토리에 맞는 비주얼 컨셉과 아트워크를 기획하고 설계합니다.',
                url: 'https://gemini.google.com/gem/1w6gliyVgUX9_JHm89-VNDsfpinsWEO4R?usp=sharing'
            },
            {
                id: 4,
                title: '스테이지 4',
                subtitle: '컨셉아트 프롬프트 생성단계',
                description: '컨셉아트를 AI로 생성하기 위한 정확하고 효과적인 프롬프트를 작성합니다.',
                url: 'https://gemini.google.com/gem/1kDHXJePLBkyRK07OSkGioVNCxn9XP4TZ?usp=sharing'
            },
            {
                id: 5,
                title: '스테이지 5',
                subtitle: '장면분할 단계',
                description: '스토리를 구체적인 장면과 시퀀스로 분할하고 구성합니다.',
                url: 'https://gemini.google.com/gem/1bRtrcTpDrX23xM_dflC5S5Qek-wdvrul?usp=sharing'
            },
            {
                id: 6,
                title: '스테이지 6',
                subtitle: '샷 이미지 프롬프트 생성단계',
                description: '각 샷에 필요한 상세한 이미지 프롬프트를 생성하고 최적화합니다.',
                url: 'https://gemini.google.com/gem/1TvK1sSlig1Nboted16aPAZqeHJTViEA4?usp=sharing'
            },
            {
                id: 7,
                title: '스테이지 7',
                subtitle: '영상프롬프트 생성단계',
                description: '동영상 생성을 위한 고급 프롬프트와 시네마틱 요소를 구성합니다.',
                url: 'https://gemini.google.com/gem/1OKB-2BgKza-Sv7cVVpJcGTdf1Mkx55PX?usp=sharing'
            },
            {
                id: 8,
                title: '스테이지 8',
                subtitle: '오디오 프롬프트 생성단계',
                description: '음향, 음악, 내레이션 등 오디오 요소를 위한 프롬프트를 완성합니다.',
                url: 'https://gemini.google.com/gem/1qq6JWNfWdzAfwFsdKjyZOTnn7MgXONzc?usp=sharing'
            }
        ],
        images: []
    },

    // ============= 실습과제 =============
    'chimpanzee-video': {
        title: '침팬지 영상만들기',
        koreanTitle: 'Chimpanzee Video Creation',
        description: 'ASMR 스타일의 침팬지 짜장면 먹방 영상을 만드는 실습과제입니다. 왼쪽 동영상을 참고하여 오른쪽 프롬프트를 활용해 영상을 생성해보세요.',
        videoUrl: 'https://www.dropbox.com/scl/fi/1gt32p4lcuyqlt1o1o0wj/.mp4?rlkey=tb6pmhxchm40ld4pfrmg6bvqe&st=ypw3koep&raw=1',
        prompt: `{
  "core_module": {
    "character": {
      "char_01": {
        "id": "Chimpanzee_ASMR_BJ",
        "signature_details": "An adult chimpanzee with expressive, thoughtful eyes. He has the calm and serious persona of a professional ASMRtist.",
        "voice_consistency": "An extremely close, breathy ASMR whisper, as if his lips are almost touching the microphone."
      }
    },
    "location_baseline": {
      "setting": "A cozy, dimly lit room set up like a personal recording studio for ASMR.",
      "architecture": "A simple wooden table with a professional condenser microphone placed prominently.",
      "color_palette": "Warm tones, deep browns, soft oranges, and dark shadows."
    },
    "project_style": "ASMR, Mukbang (eating show), cinematic close-up, serious gourmet, photorealistic, high-detail"
  },
  "video_module": {
    "metadata": {
      "prompt_name": "chimpanzee_jjajangmyeon_asmr_whisper",
      "duration_seconds": 8
    },
    "global": {
      "description": "In a cozy ASMR studio, a thoughtful chimpanzee whispers an introduction to a bowl of Jajangmyeon (black bean noodles) before performing an intense, satisfying noodle slurp.",
      "style": "photorealistic, hyper-realistic, shallow depth of field, cinematic"
    },
    "dialogue_block": {
      "dialogue": "'자... 오늘의 메뉴는 짜장면입니다... 소리 한번 들어보시죠. (Ja... oneurui menyuneun jjajangmyeon-imnida... Sori hanbeon deureobosijyo.)'"
    },
    "sequence": [
      {
        "timestamp": "00:00-00:08",
        "camera": "Static medium close-up, slowly pushing in to an extreme close-up on the mouth and noodles for the final slurp.",
        "motion": "The chimpanzee whispers his introduction (dialogue) while gently stirring the glossy black noodles with chopsticks. He then lifts a large bundle of noodles right up to the microphone and slurps them into his mouth with intense satisfaction.",
        "audio": "Starts with an extremely soft, breathy whispered dialogue. This is followed by the wet, sticky sound of noodles being mixed, and culminates in a loud, deeply satisfying, and wet ASMR SLURP sound that dominates the final seconds.",
        "elements": [
          "chimpanzee's face",
          "condenser microphone",
          "a bowl of glossy Jajangmyeon",
          "slurping noodles"
        ],
        "ending": "The sequence ends mid-slurp, with noodles still hanging from his mouth."
      }
    ],
    "negative_prompts": [
      "cartoon",
      "unrealistic CGI",
      "clean, quiet eating",
      "no microphone",
      "bright lighting",
      "shouting or talking loudly"
    ]
  }
}`,
        type: 'practice'
    },

    'hamster-video': {
        title: '햄스터 돈가스먹방',
        koreanTitle: 'Hamster Pork Cutlet Mukbang',
        description: '귀여운 햄스터가 돈가스를 먹는 먹방 영상을 만드는 실습과제입니다.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        prompt: `{
  "core_module": {
    "character": {
      "char_01": {
        "id": "Hamster_Mukbang_Star",
        "signature_details": "A fluffy golden hamster with bright, curious eyes and chubby cheeks. Has an enthusiastic and cheerful personality.",
        "voice_consistency": "High-pitched, excited squeaking sounds with occasional satisfied 'nom nom' sounds."
      }
    },
    "location_baseline": {
      "setting": "A miniature dining setup with a tiny table and chair, perfectly sized for a hamster.",
      "architecture": "A cute wooden dining table with a small plate and miniature utensils.",
      "color_palette": "Bright, warm colors with pastel accents, well-lit and cheerful."
    },
    "project_style": "Cute mukbang, kawaii style, bright lighting, high-detail, adorable"
  },
  "video_module": {
    "metadata": {
      "prompt_name": "hamster_pork_cutlet_mukbang",
      "duration_seconds": 8
    },
    "global": {
      "description": "A cute hamster enthusiastically eating a miniature pork cutlet with tiny utensils, showing pure joy and satisfaction.",
      "style": "photorealistic, cute, bright lighting, shallow depth of field"
    },
    "sequence": [
      {
        "timestamp": "00:00-00:08",
        "camera": "Close-up shot focusing on the hamster's face and the tiny pork cutlet, slowly zooming in.",
        "motion": "The hamster picks up the miniature pork cutlet with its tiny paws, takes big enthusiastic bites, stuffing its cheeks full. Chews happily while making satisfied sounds.",
        "audio": "Cheerful squeaking, crunching sounds of the crispy cutlet, and satisfied 'nom nom' sounds.",
        "elements": [
          "fluffy golden hamster",
          "miniature pork cutlet",
          "tiny dining table",
          "small utensils",
          "stuffed cheeks"
        ],
        "ending": "The hamster pauses mid-chew with stuffed cheeks, looking directly at the camera with satisfied eyes."
      }
    ],
    "negative_prompts": [
      "realistic sized food",
      "dark lighting",
      "scared hamster",
      "messy eating",
      "cartoon style"
    ]
  }
}`,
        type: 'practice'
    },

    'crocodile-video': {
        title: '악어 국수먹방',
        koreanTitle: 'Crocodile Noodle Mukbang',
        description: '우아한 악어가 국수를 먹는 독특한 먹방 영상을 만드는 실습과제입니다.',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        prompt: `{
  "core_module": {
    "character": {
      "char_01": {
        "id": "Elegant_Crocodile_Diner",
        "signature_details": "A large, sophisticated crocodile wearing a gentleman's bow tie. Has refined table manners despite being a predator.",
        "voice_consistency": "Deep, rumbling sounds with occasional satisfied grunts and slurping."
      }
    },
    "location_baseline": {
      "setting": "An elegant dining room with fine dining atmosphere, white tablecloth and proper utensils.",
      "architecture": "A formal dining table with crystal glasses, silver cutlery, and fine china.",
      "color_palette": "Rich, elegant colors - deep greens, gold accents, warm lighting."
    },
    "project_style": "Sophisticated dining, elegant mukbang, formal atmosphere, high-class, photorealistic"
  },
  "video_module": {
    "metadata": {
      "prompt_name": "crocodile_noodle_elegant_dining",
      "duration_seconds": 8
    },
    "global": {
      "description": "An elegant crocodile in formal attire delicately eating noodles with surprising grace and sophistication.",
      "style": "photorealistic, cinematic lighting, elegant, sophisticated"
    },
    "sequence": [
      {
        "timestamp": "00:00-00:08",
        "camera": "Medium shot showing the crocodile at the dining table, slowly pushing in to focus on the noodle eating action.",
        "motion": "The crocodile carefully picks up noodles with a fork, twirling them elegantly before bringing them to its massive jaws. Eats with surprising delicacy and grace.",
        "audio": "Gentle classical background music, the sound of silverware, sophisticated slurping, and deep satisfied rumbles.",
        "elements": [
          "elegant crocodile with bow tie",
          "fine dining table setting",
          "bowl of noodles",
          "proper silverware",
          "crystal glasses"
        ],
        "ending": "The crocodile pauses, dabbing its mouth with a napkin in a very gentlemanly manner."
      }
    ],
    "negative_prompts": [
      "messy eating",
      "aggressive behavior",
      "cartoon style",
      "poor table manners",
      "dark, scary atmosphere"
    ]
  }
}`,
        type: 'practice'
    },

    // VEO 영상 프롬프트
    'veo-prompts': {
        title: 'VEO영상 만들기',
        koreanTitle: 'VEO Video Prompts',
        type: 'veo-prompts',
        description: 'Google VEO를 위한 다양한 영상 생성 프롬프트 모음입니다. 각 프롬프트를 클릭하여 복사할 수 있습니다.',
        prompts: [
            {
                title: '1. Nutella',
                content: `{
  "description": "Photorealistic cinematic shot of a sunlit kitchen nook. A sealed Nutella jar begins to vibrate gently, then bursts open—releasing a rich explosion of swirling chocolate, roasted hazelnuts, toast slices, strawberries, and golden syrup. The ingredients twirl mid-air in gravity-defying slow motion, assembling into a picture-perfect Nutella breakfast platter on a rustic wooden table.",

  "style": "photorealistic cinematic",

  "camera": "slow orbital shot from low angle upward, transitioning into an overhead top-down reveal",

  "lighting": "morning sunlight streaming through soft white curtains, gentle glow on chocolate and fruit highlights",

  "room": "cozy breakfast nook with wooden table, beige walls, ceramic mugs, and hanging plants",

  "elements": [
    "sealed Nutella jar (center of table)",
    "thick chocolate ribbons swirling through air",
    "flying toasted bread slices with golden crust",
    "hazelnuts spinning and cracking mid-air",
    "sliced bananas and strawberries tumbling gently",
    "honey and syrup droplets catching light",
    "knife spreading Nutella mid-air onto toast",
    "glass of milk and warm coffee cup floating into frame",
    "powdered sugar and cocoa mist drifting like fog"
  ],

  "motion": "jar shakes, lid pops and spins off, chocolate erupts upward with roasted hazelnuts orbiting it, toast slices fly in from off-screen, fruit slices rain down and assemble into a breakfast board as camera moves overhead",

  "ending": "a beautifully arranged Nutella breakfast board sits steaming on the table, chocolate glistening in the sunlight, with a final hazelnut rolling slowly to a stop near the jar",

  "text": "none",

  "keywords": [
    "16:9",
    "Nutella explosion",
    "hazelnuts",
    "swirling chocolate",
    "realistic food",
    "breakfast aesthetic",
    "slow motion",
    "natural morning light",
    "high detail",
    "no text",
    "chocolate swirl",
    "toast fly-in",
    "cinematic"
  ]
}`
            },
            {
                title: '5. Dior perfume ad',
                content: `{
"description": "Cinematic ultra-close-up of a Dior perfume bottle resting delicately on a polished marble
pedestal in an empty, misty hall. Dew-like droplets glisten on the glass. The bottle subtly shimmers-then the
perfume spritzes in slow motion. From the mist, silk fabrics flow outward, forming ethereal dresses that float
mid-air. Petals blossom and spiral upward, creating an enchanted garden suspended in time. Walls dissolve into
open sky. A chandelier of stars assembles above. A luminous figure, representing elegance, dances through the
floating petals as fragrance waves ripple through the scene. The entire space transforms into an otherworldly
Dior dreamscape. No text.",
"style": "cinematic, elegant magical realism",
"camera": "starts with an intimate macro shot of the bottle surface and droplets, slowly dollies back while
orbiting, then cranes upward to reveal the full ethereal transformation in sweeping, graceful motion",
"lighting": "soft morning light transitioning into golden glow, ending with a moonlit sparkle across the
scene",
"environment": "quiet marble hall transforms into an infinite floating garden above the clouds",
"elements": [
"Dior perfume bottle (logo subtly visible, glass texture detailed)",
"slow-motion perfume spritz with shimmering particles",
"silk fabrics flowing from mist, creating mid-air couture dresses",
"petals blooming and swirling upward",
"walls dissolving into sky",
"chandelier of stars forming piece by piece",
"luminous figure dancing through floating elements",
"light waves symbolizing fragrance spreading gracefully",
"reflections and refractions of light on marble and glass",
"a seamless blend of nature and luxury aesthetics"
],
"motion": "fluid, graceful chain reaction from the perfume spray-silks and petals animate in elegant
slow-motion mixed with time-lapse as the world transforms around the bottle",
"ending": "Dior perfume bottle in foreground, the surreal Dior dreamscape floating behind it, softly
glowing",
"text": "none",
"keywords": [
"Dior",
"perfume transformation",
"ethereal elegance",
"magical realism",
"luxury fashion",
"floating garden",
"silk and petals",
"dreamscape",
"cinematic",
"no text"
]
}`
            },
            {
                title: '6. Starbucks ad',
                content: `{
"description": "A cinematic, vibrant shot of a serene, sun-drenched coffee bar. At the center, a sleek
Starbucks cup (green logo glowing subtly) rests on a polished wood table. The cup begins to steam, pulses
softly, then the entire scene transforms dynamically: coffee beans scatter in slow motion, milk swirls mid-air,
ice cubes fall into place, and a cold brew assembles itself in a transparent cup with precision. A fresh bakery
item-a croissant-lands gently beside it. Warm tones of wood, green plants, and natural textures fill the
background, evoking calm energy. No text.",
"style": "cinematic, warm modern minimalism, sensory-rich",
"camera": "starts ultra close on cup logo, then smooth dolly out and gentle crane up to reveal the full
setup",
"lighting": "golden hour sunlight with soft shadows and warm highlights",
"environment": "cozy Starbucks interior with wooden textures, green plants, and ambient natural light",
"elements": [
"Starbucks cup (hot drink, logo subtly glowing)",
"cold brew coffee in clear Starbucks cup (ice dropping in slow motion)",
"coffee beans scattering and settling dynamically",
"milk swirling in mid-air, seamlessly blending into the coffee",
"fresh croissant landing softly on a wooden plate",
"polished wooden table with visible grain",
"small succulent plant for a natural touch",
"subtle ambient decor (e.g., bookshelf, green accents)",
"refined ceramic saucer and spoon",
"sunlight casting moving reflections through window blinds"
],
"motion": "Starbucks cup gently pulses with warmth, coffee elements assemble in a mesmerizing flow, cold brew
builds with cascading ice, bakery item lands with soft motion",
"ending": "a beautifully arranged Starbucks moment on the table, steam rising, ice sparkling, inviting and
serene",
"text": "none",
"keywords": [
"16:9",
"Starbucks",
"coffee ritual",
"warm aesthetic",
"dynamic assembly",
"natural light",
"golden hour",
"sensory",
"no text",
"inviting atmosphere"
]
}`
            },
            {
                title: '7. Apple ad',
                content: `{
"description": "An elegant, high-end animated sequence on a seamless soft white background. At the center, a
minimalist Apple-branded iPhone box (logo embossed subtly). The box levitates gently, opens with a slow,
graceful motion. Products-latest iPhone (edge lighting glowing softly), AirPods Pro (case opening with fluid
animation), MagSafe charger (magnetically snapping into place), and a sleek Apple Watch band (unfurling
delicately)-float into formation with precision. Silver, space gray, and ceramic white tones dominate, creating
a refined, sophisticated mood. No hard cuts-only smooth, continuous movement. Text: 'iPhone - Innovation
Refined.'",
"style": "cinematic, premium minimalism, Apple aesthetic",
"camera": "starts ultra close on embossed Apple logo, gentle dolly out with floating camera motion, subtle
parallax for depth",
"lighting": "soft, diffused illumination with delicate reflections and shadows, evoking a calm premium feel",
"room": "infinite seamless white environment-no walls, no floor-just soft gradients and floating products",
"elements": [
"Apple-branded iPhone box (subtle emboss, matte finish)",
"latest iPhone with subtle edge glow animation",
"AirPods Pro case with smooth lid animation",
"MagSafe charger snapping into place magnetically",
"Apple Watch band unfurling in slow motion",
"no extra decor-pure focus on the products"
],
"motion": "Box levitates gently, opens in a slow, elegant lift. Products float up, rotate gracefully, align
themselves into a symmetrical formation with seamless, natural motion-no sharp cuts.",
"ending": "Perfectly balanced Apple product display in a soft white space. 'iPhone - Innovation Refined' text
fades in with delicate typography.",
"text": "iPhone - Innovation Refined",
"keywords": [
"16:9",
"Apple",
"iPhone",
"minimalistic",
"premium aesthetic",
"silver, white, space gray",
"fluid assembly",
"elegant motion",
"soft lighting",
"no hard cuts",
"calm luxury"
]
}`
            },
            {
                title: '8. Corona ad',
                content: `{
"description": "Cinematic close-up of a cold, dewy Corona bottle sitting alone on a weathered beach table. It
begins to hum, vibrate. The bottle cap *pops*-and the entire environment unfolds from inside: palm trees rise,
lights string themselves, speakers assemble mid-air, sand shifts into a dance floor. A DJ booth builds from
driftwood. Music kicks in. A beach rave is born. No text.",
"style": "cinematic, magical realism",
"camera": "starts ultra close, zooms out and cranes overhead as the world expands",
"lighting": "sunset turning to neon-golden hour into party glow",
"environment": "quiet beach transforms into high-energy beach rave",
"elements": [
"Corona bottle (label visible, condensation dripping)",
"pop-top cap in slow motion",
"exploding citrus slice",
"sand morphing into dance floor",
"palm trees rising",
"neon lights snapping on",
"DJ booth building itself",
"crowd materializing mid-dance",
"fire pit lighting",
"surfboards as signage"
],
"motion": "explosion of elements from bottle, everything assembles in rapid time-lapse",
"ending": "Corona bottle in foreground, beach rave in full swing behind it",
"text": "none",
"keywords": [
"Corona",
"beach party",
"bottle transforms",
"rave build",
"sunset to night",
"cinematic",
"no text"
]
}`
            },
            {
                title: '9. IKEA ad',
                content: `{
"description": "Cinematic shot of a sunlit Scandinavian bedroom. A sealed IKEA box trembles, opens, and flat
pack furniture assembles rapidly into a serene, styled room highlighted by a yellow IKEA throw on the bed. No
text.",
"style": "cinematic",
"camera": "fixed wide angle",
"lighting": "natural warm with cool accents",
"room": "Scandinavian bedroom",
"elements": [
"IKEA box (logo visible)",
"bed with yellow throw",
"bedside tables",
"lamps",
"wardrobe",
"shelves",
"mirror",
"art",
"rug",
"curtains",
"reading chair",
"plants"
],
"motion": "box opens, furniture assembles precisely and rapidly",
"ending": "calm, modern space with yellow IKEA accent",
"text": "none",
"keywords": [
"16:9",
"IKEA",
"Scandinavian",
"fast assembly",
"no text",
"warm & cool tones"
]
}`
            },
            {
                title: '10. NYC skyline ad',
                content: `metadata:
prompt_name: "NYC City Assembly"
base_style: "cinematic, photorealistic, 4K"
aspect_ratio: "16:9"
city_description: "A vast, empty urban plaza at dawn, ground level view with concrete pavement stretching
into the mist."
camera_setup: "A single, fixed, wide-angle shot. The camera holds its position for the entire 8-second
duration."
key_elements:
- "A sealed steel shipping container stamped with 'NYC' in bold letters"
assembled_elements:
- "iconic Manhattan skyscrapers (e.g., Empire State Building, Chrysler Building)"
- "Brooklyn Bridge arching into frame"
- "yellow taxi cabs lined up along a street"
- "hydrant and classic black street lamps"
- "subway entrance staircase with MTA sign"
- "Statue of Liberty's torch and crown silhouette"
- "Central Park trees emerging in the background"
- "water towers perched on rooftop structures"
- "billboard frames and neon signs"
- "sidewalk café tables and chairs full of people"
negative_prompts: ["no text overlays", "no overt graphics"]
timeline:
- sequence: 1
timestamp: "00:00-00:01"
action: "In the center of the barren plaza sits the sealed NYC container. It begins to tremble as light fog
swirls around it."
audio: "Deep, resonant rumble echoing across empty concrete."
- sequence: 2
timestamp: "00:01-00:02"
action: "The container's steel doors burst open outward, releasing a spray of mist and loose rivets."
audio: "Sharp metallic clang, followed by hissing steam."
- sequence: 3
timestamp: "00:02-00:06"
action: "Hyper-lapse: From the fixed vantage, city elements rocket out of the container and lock into
place-steel beams rise, glass facades snap on, bridges span into view, and yellow taxis line up automatically."
audio: "A rapid sequence of ASMR city-building sounds: metal clanks, glass sliding, cables snapping,
engines revving softly."
- sequence: 4
timestamp: "00:06-00:08"
action: "The final element-a single yellow taxi-glides forward and parks beside the newfound curb. All
motion freezes as morning light bathes the fully formed New York Cityscape."
audio: "A soft engine cut-off 'chug,' then the distant hum of awakening city traffic, fading into serene
dawn silence."`
            },
            {
                title: '11. Transformers-style Mecha ad',
                content: `{
"description": "The scene opens on a smooth, metallic silver egg resting in the center of a vast, gritty
industrial hangar. Suddenly, glowing seams etch across its surface, and the egg doesn't unfold-it fractures.
With a surge of energy, armored plates unlock and pull back, revealing a complex mechanical skeleton within. In
a rapid, violent, and intricate sequence, components shift, rotate, and telescope outwards. Two massive legs
slam down onto the concrete floor, followed by a powerful tail whipping out for balance. The main body expands
upwards as a monstrous head, filled with razor-sharp metallic teeth, constructs itself piece by piece, all
originating from the initial egg's mass.",
"style": "Hyper-detailed, industrial mecha CGI. The aesthetic is inspired by 'Transformers' and 'Pacific Rim,'
focusing on complex, hard-surface mechanics, intricate moving parts, and a sense of immense weight and power.",
"camera": "A single, dynamic continuous shot. Starts as a close-up on the egg, then pulls back and orbits the
transformation, dipping low to the ground as the legs impact and craning up to reveal the final, massive scale
of the fully formed T-Rex. The camera shakes slightly with the impacts.",
"lighting": "Begins with stark, top-down industrial lighting on the egg. As the transformation begins, a
glowing blue power core ignites within the chest, casting internal light through the gaps in the armor. Sparks
fly from grinding metal parts. The final lighting is dominated by the T-Rex's own glowing red optical
sensors.",
"setting": "A vast, dark, and gritty industrial hangar with a weathered concrete floor and visible support
beams in the background, adding to the sense of scale.",
"elements": [
"smooth metallic silver egg",
"glowing energy seams",
"shifting armor plates",
"exposed pistons, gears, and hydraulics",
"a glowing internal power core",
"powerful robotic legs and claws",
"telescoping tail",
"razor-sharp metallic teeth",
"piercing red optical sensors (eyes)"
],
"motion": "A violent, multi-layered mechanical reconfiguration. The motion is not fluid but clunky and
purposeful, defined by panels sliding, parts rotating 180 degrees, and pistons firing to lock limbs into place.
It's a symphony of grinding gears, hissing pneumatics, and heavy, metallic 'clunks' as each component finds its
final position. The transformation should feel engineered and explosive.",
"ending": "The fully constructed robotic T-Rex stands in a low, predatory stance. It throws its head back, and
its optical sensors flare to life with a piercing red glow as it lets out a deafening, synthesized metallic
roar that echoes through the hangar.",
"text": "As the final transformation completes, steam erupts from vents on its neck and shoulders.",
"keywords": [
"mecha",
"robot",
"T-Rex",
"transformer",
"transformation",
"mechanical",
"industrial",
"hard surface modeling",
"CGI",
"sci-fi",
"complex",
"panel shifting",
"robot dinosaur",
"cybernetic",
"explosive"
]
}`
            },
            {
                title: '12. Grimoire Magic',
                content: `{
  "prompt": "An ultra-photorealistic, 8K video. The sequence of events in the timeline is mandatory and must occur in the specified order within 8 seconds. The 2D-to-3D transformation is the critical first step and must not be skipped.",
  "scene": {
    "environment": "A warm-lit grimoire page.",
    "subject": "A flat, black ink drawing. On the right, an young female elf with a heart-gem staff. On the left, a horde of 10 ink monsters clustered together."
  },
  "timeline": [
    {
      "time": "0-3 seconds",
      "event": "A finger touches the elf. This is the trigger. The flat ink of the elf and monsters immediately begins to swell and rise, unfolding from the page into fully photorealistic 3D characters. This is a physical awakening and is the main visual event of the first 3 seconds."
    },
    {
      "time": "3-4 seconds",
      "event": "Immediately after becoming fully 3D and standing on the page, the elf on the right powerfully slams the butt of her staff down.",
      "dialogue": "As the staff hits, her voice shouts with power: \"fire!\""
    },
    {
      "time": "4-7 seconds",
      "event": "A visible shockwave erupts FROM the staff's impact point. The wave travels directly from right to left, aimed ONLY at the monsters. The elf remains completely unaffected.",
      "details": "The monsters are thrown backward by the force and disintegrate into a cloud of dried ink particles. The page beneath them cracks and splinters from the energy.",
      "camera": "Tracks the shockwave as it travels and destroys the monsters."
    }
  ],
  "final_shot": "From 7 to 8 seconds, the shot shows the triumphant elf standing on the right side of the damaged page, as the ink dust from the monsters settles on the left.",
  "audio": {
    "category": "Epic & Forceful",
    "elements": [
      "magical rising/transformation sound",
      "heavy staff impact boom",
      "a powerful, clear shout",
      "a directional shockwave sound with cracking and shattering",
      "ink particles settling"
    ]
  },
  "mood": [
    "Epic",
    "Forceful",
    "Photorealistic",
    "Sequential",
    "Impactful"
  ]
}`
            }
        ]
    },

    // 팀별과제
    'team-assignments': {
        title: '팀별과제',
        koreanTitle: 'Team Assignments',
        type: 'team-videos',
        description: '각 팀이 제작한 창의적인 영상 작품들을 감상하실 수 있습니다.',
        teams: {
            team1: {
                name: '1팀',
                videos: [
                    {
                        title: '1팀 김지후 작품',
                        url: 'https://www.dropbox.com/scl/fi/6q32zb402x7vpb4en35ni/_.mp4?rlkey=6y1l9rcj1365egvu19i9onex3&st=mir00csr&raw=1',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Team+1+Video+1',
                        description: '팀 1의 첫 번째 작품'
                    },
                    {
                        title: '1팀 우정식 작품',
                        url: 'https://www.dropbox.com/scl/fi/23bctte2kwx88x6xxm8kd/.mp4?rlkey=omgbmcb0z5xzvg0lali0qq892&st=h7kpo03i&raw=1',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Team+1+Video+2',
                        description: '팀 1의 두 번째 작품'
                    },
                    {
                        title: '영상 홍보영 제목 3',
                        url: 'https://www.dropbox.com/scl/fi/1iunkgts3ohd3mntq5u2y/_-_.mp4?rlkey=0y2mw4nqoqb7sxredsdhguriw&st=igb3861w&raw=1',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Video+3',
                        description: '팀 1의 세 번째 작품'
                    },
                    {
                        title: '영상 조민재 4',
                        url: 'https://www.dropbox.com/scl/fi/4avgdps8ondn7upxji08x/1-_.mp4?rlkey=434xdmw8zg8bsa3x953etkbr7&st=yc60dn7g&raw=1',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Video+4',
                        description: '팀 1의 네 번째 작품'
                    }
                ]
            },
            team2: {
                name: '2팀',
                videos: [
                    {
                        title: '영상 김성환 1',
                        url: 'https://www.dropbox.com/scl/fi/eskbhy9rxztjog77ggh0j/.mp4?rlkey=j5hxeu4sk8qp2zxo1a2uhdt6x&st=hhgni73v&raw=1',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Video+1',
                        description: '팀 2의 첫 번째 작품'
                    },
                    {
                        title: '영상 이윤서 2',
                        url: 'https://www.dropbox.com/scl/fi/kkgg1xqdmbdqd5kn4insn/_.mp4?rlkey=3oa8t3hlpig7u7dfa50d2yv93&st=fr4f1b2b&raw=1',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Video+2',
                        description: '팀 2의 두 번째 작품'
                    },
                    {
                        title: '영상 윤주철 3',
                        url: 'https://www.dropbox.com/scl/fi/5quo5o1py594yyqqulhf7/.mp4?rlkey=jtxni7pygnhrfmuvoup0znivo&st=md7gq064&raw=1',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Video+3',
                        description: '팀 2의 세 번째 작품'
                    },
                ]
            },
            team3: {
                name: '3팀',
                videos: [
                    {
                        title: '영상 제목 1',
                        url: '',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Video+1',
                        description: '팀 3의 첫 번째 작품'
                    },
                    {
                        title: '영상 제목 2',
                        url: '',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Video+2',
                        description: '팀 3의 두 번째 작품'
                    },
                    {
                        title: '영상 제목 3',
                        url: '',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Video+3',
                        description: '팀 3의 세 번째 작품'
                    },
                    {
                        title: '영상 제목 4',
                        url: '',
                        thumbnail: 'https://via.placeholder.com/320x180/1a1a1a/666666?text=Video+4',
                        description: '팀 3의 네 번째 작품'
                    }
                ]
            }
        }
    },

    // ============= 튜토리얼 =============
    'tutorial-block1': {
        title: '[튜토리얼 1] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 1',
        koreanTitle: '블록 1: 캐릭터(Character)',
        prompt: '[블록 1: 캐릭터(Character)] 블록 조립하기',
        description: '안녕하세요! ai툴비입니다. 🐝\n\n여러분이 상상하는 이미지를 완벽하게 만들어내기 위한 <strong style="color: #ff8e53;">\'궁극의 프롬프트 조립\'</strong> 퀘스트를 시작하겠습니다.\n\n그 첫 번째 퀘스트는 이미지의 심장, <strong style="color: #4caf50 ;">\'[캐릭터(Character)]\'</strong> 블록입니다!\n\n\'캐릭터\'는 이미지의 \'주인공\'입니다. 하지만 그냥 a girl (소녀)이라고만 하면, AI는 \'어떤 소녀?\'인지 몰라 무작위로 이미지를 생성합니다.\n\n이번 퀘스트에서는 우리가 원하는 주인공을 AI가 정확히 그려낼 수 있도록, 3개의 작은 부품을 조립하여 [캐릭터] 블록을 완성해 보겠습니다.',
        type: 'tutorial',
        audioFile: 'character.wav',
        parts: [
            {
                title: '▶ 부품 1-1: 핵심 정체성 (Core Identity)',
                description: '가장 먼저, 주인공이 <strong style="color: #ff6b6b;">\'누구\'</strong>인지, 또는 <strong style="color: #ff6b6b;">\'무엇\'</strong>인지 정체를 알려줘야 합니다.',
                keywords: [
                    'a warrior (전사)',
                    'a wizard (마법사)',
                    'a girl (소녀)',
                    'a cyborg (사이보그)',
                    'a robot (로봇)',
                    'an alien (외계인)',
                    'a cat (고양이)',
                    'a dragon (용)'
                ],
                example: 'a girl'
            },
            {
                title: '▶ 부품 1-2: 외형 묘사 (Appearance)',
                description: '다음으로, 주인공의 \'외모\'를 구체적으로 묘사합니다. 이 부품이 AI의 <strong style="color: #ff6b6b;">\'무작위성\'</strong>을 없애는 핵심입니다!',
                keywords: [
                    '(인종/국적) young Korean girl, American teenager',
                    '(머리 스타일) girl with short red hair, boy with blond curly hair',
                    '(얼굴 특징) with glowing blue eyes, with freckles, wearing glasses'
                ],
                example: 'a young Korean girl with short black hair'
            },
            {
                title: '▶ 부품 1-3: 의상 (Attire)',
                description: '마지막으로, 주인공이 <strong style="color: #ff6b6b;">\'무엇을 입고있는지\'</strong> 알려주세요. 의상은 캐릭터의 직업이나 상황을 보여주는 중요한 단서입니다.',
                keywords: [
                    'wearing a blue dress (파란 드레스를 입은)',
                    'wearing a school uniform (교복을 입은)',
                    'in futuristic cyberpunk armor (미래형 사이버펑크 갑옷을 입은)',
                    'wearing a yellow raincoat (노란색 비옷을 입은)',
                    'in a white scientist gown (흰색 과학자 가운을 입은)'
                ],
                example: 'wearing a yellow raincoat'
            }
        ],
        completion: {
            title: '🏆 퀘스트 1 완료!',
            message: '축하합니다! 3개의 부품을 모두 모아 드디어 첫 번째 [캐릭터] 블록 조립을 완료했습니다!',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat',
            image: 'https://cdn.midjourney.com/d6fc99b2-73ca-4cc6-81b5-d75fb52276d0/0_2.png',
            status: '<strong style="color: #ff6b6b;">\'캐릭터(Character)\'</strong> → 행동(Action) → 소품(Props) → 배경(Setting) → 스타일(Style) → 조명&시간(Lighting&Time) → 카메라(Camera)',
            nextStep: '어떤가요? 그냥 \'소녀\'라고 했을 때보다 훨씬 더 구체적이고 흥미로운 주인공이 만들어졌죠?\n\n자, 이제 이 멋진 주인공이 \'무엇을 하고 있는지\' 정해줄 차례입니다.\n다음 챕터, \'블록 2: 행동(Action)\' 퀘스트에서 계속됩니다!'
        },
        usage: [
            '📜 퀘스트 1: \'캐릭터\' 블록 조립하기',
            '',
            '▶ 부품 1-1: 핵심 정체성 (Core Identity)',
            '가장 먼저, 주인공이 <strong style="color: #ff6b6b;">\'누구\'</strong>인지, 또는 <strong style="color: #ff6b6b;">\'무엇\'</strong>인지 정체를 알려줘야 합니다.',
            '',
            '키워드 예시 (Keywords):',
            '• a warrior (전사)',
            '• a wizard (마법사)',
            '• a girl (소녀)',
            '• a cyborg (사이보그)',
            '• a robot (로봇)',
            '• an alien (외계인)',
            '• a cat (고양이)',
            '• a dragon (용)',
            '',
            '"저는 **a girl (소녀)**를 주인공으로 선택해 볼게요!"',
            '',
            '▶ 부품 1-2: 외형 묘사 (Appearance)',
            '다음으로, 주인공의 \'외모\'를 구체적으로 묘사합니다. 이 부품이 AI의 \'무작위성\'을 없애는 핵심입니다!',
            '',
            '키워드 예시 (Keywords):',
            '• (인종/국적) young Korean girl, American teenager',
            '• (머리 스타일) girl with short red hair, boy with blond curly hair',
            '• (얼굴 특징) with glowing blue eyes, with freckles, wearing glasses',
            '',
            '"저는 a girl을 더 구체적으로 만들 거예요. **a young Korean girl with short black hair (검은 단발머리의 어린 한국 소녀)**로 정했습니다."',
            '',
            '▶ 부품 1-3: 의상 (Attire)',
            '마지막으로, 주인공이 \'무엇을 입고 있는지\' 알려주세요. 의상은 캐릭터의 직업이나 상황을 보여주는 중요한 단서입니다.',
            '',
            '키워드 예시 (Keywords):',
            '• wearing a blue dress (파란 드레스를 입은)',
            '• wearing a school uniform (교복을 입은)',
            '• in futuristic cyberpunk armor (미래형 사이버펑크 갑옷을 입은)',
            '• wearing a yellow raincoat (노란색 비옷을 입은)',
            '• in a white scientist gown (흰색 과학자 가운을 입은)',
            '',
            'wearing a yellow raincoat',
            '',
            '🏆 퀘스트 1 완료!',
            '축하합니다! 3개의 부품을 모두 모아 드디어 첫 번째 [캐릭터] 블록 조립을 완료했습니다!',
            '',
            '(조립된 [캐릭터] 블록)',
            '[a young Korean girl with short black hair, wearing a yellow raincoat]',
            '',
            '(현재 프롬프트 조립 상태)',
            '캐릭터(Character) → <strong style="color: #ff6b6b;">행동(Action)\'</strong> → 소품(Props) → 배경(Setting) → 스타일(Style) → 조명&시간(Lighting&Time) → 카메라(Camera)',
            '',
            '어떤가요? 그냥 \'소녀\'라고 했을 때보다 훨씬 더 구체적이고 흥미로운 주인공이 만들어졌죠?',
            '',
            '자, 이제 이 멋진 주인공이 \'무엇을 하고 있는지\' 정해줄 차례입니다.',
            '다음 챕터, \'블록 2: 행동(Action)\' 퀘스트에서 계속됩니다!'
        ],
        images: []
    },

    'tutorial-block2': {
        title: '[튜토리얼 2] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 2',
        koreanTitle: '블록 2: 행동(Action)',
        prompt: '[블록 2: 행동(Action)] 블록 장착하기',
        description: '안녕하세요! ai툴비입니다. 🐝\n\n지난 챕터에서 우리는 3개의 부품을 조립해 멋진 [캐릭터] 블록을 완성했습니다. (예: a young Korean girl with short black hair, wearing a yellow raincoat)\n\n하지만 이 캐릭터는 아직 \'무엇을 할지\' 정해지지 않은 상태입니다. 캐릭터가 그냥 멍하니 서 있기만 한다면 조금 심심하겠죠?\n\n두 번째 퀘스트, [행동(Action)] 블록은 우리 주인공에게 \'생명\'을 불어넣는 퀘스트입니다. 서 있는 전사와 달리고 있는 전사는 완전히 다른 이야기를 만드니까요!',
        type: 'tutorial',
        audioFile: 'action.wav',
        parts: [
            {
                title: '1. 정적인 행동 (Static Actions)',
                description: '주로 인물의 상태나 모습을 강조할 때 사용합니다. (인물 사진이나 초상화에 유용해요!)',
                keywords: [
                    'standing : 서 있는',
                    'sitting : 앉아 있는',
                    'lying down : 누워 있는',
                    'looking at the camera : 카메라를 응시하는',
                    'leaning against a wall : 벽에 기대어 있는',
                    'smiling : 미소짓는'
                ],
                example: 'standing and looking at the camera'
            },
            {
                title: '2. 동적인 행동 (Dynamic Actions)',
                description: '이미지에 \'움직임\'과 \'스토리\'를 부여합니다. (역동적인 장면 연출에 필수!)',
                keywords: [
                    'walking : 걷고 있는',
                    'running : 달리고 있는',
                    'jumping : 점프하는',
                    'dancing : 춤추는',
                    'fighting : 싸우는',
                    'flying : 날아다니는'
                ],
                example: 'walking'
            },
            {
                title: '3. 구체적인 행동 (Specific Actions)',
                description: '캐릭터의 직업이나 상황을 더 구체적으로 설명하는 행동입니다.',
                keywords: [
                    'reading a book : 책을 읽는',
                    'casting a spell : 마법을 거는',
                    'building a house : 집을 짓는',
                    'typing on a keyboard : 키보드를 치는',
                    'opening a door : 문을 여는',
                    'holding a cup : 컵을 들고 있는'
                ],
                example: 'reading a book'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"동작(Action)과 시선(Gaze)을 조합하세요!"\n\n[행동] 블록을 더 풍부하게 만드는 비결은 \'시선\'을 함께 지정하는 것입니다.\n\n그냥 sitting (앉아 있는) 대신,\nsitting and looking up at the sky (앉아서 하늘을 올려다보는)\n\n그냥 walking (걷고 있는) 대신,\nwalking and looking at the camera (걸으면서 카메라를 쳐다보는)\n\n이렇게 \'동작 + 시선\'을 조합하면, AI는 훨씬 더 감성적이고 구체적인 장면을 연출해 냅니다!'
        },
        completion: {
            title: '🏆 퀘스트 2 완료!',
            message: '자, 이제 두 번째 [행동] 블록을 장착해 볼까요?',
            choice: '저는 1챕터의 제 캐릭터 노란 우비를 입은 소녀에게 어울리는 <strong style="color: #ff6b6b;">Walking 걷고있는\</strong>을 선택할게요. 비옷을 입었으니 어딘가를 걷고 있는 게 자연스럽겠죠?',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat, walking',
            image: 'https://cdn.midjourney.com/5ebc3864-ef04-4244-b93c-3097749450ca/0_1.png',
            status: '캐릭터(Character) → <strong style="color: #ff6b6b;">행동(Action)\'</strong> → 소품(Props) → 배경(Setting) → 스타일(Style) → 조명&시간(Lighting&Time) → 카메라(Camera)',
            nextStep: '캐릭터가 정해졌고, 무엇을 하는지도 정해졌습니다. 그런데... 혹시 캐릭터가 손에 뭔가를 들고 있지는 않나요? (예를 들어, 노란 우비 소녀가 \'빨간 우산\'을 들고 있다면?)\n\n다음 챕터, \'블록 3: 소품(Props)\' 퀘스트에서 이어서 진행하겠습니다! 계속할까요?'
        },
        usage: [],
        images: []
    },

    'tutorial-block3': {
        title: '[튜토리얼 3] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 3',
        koreanTitle: '블록 3: 소품(Props)',
        prompt: '[블록 3: 소품(Props)] 블록 장착하기',
        description: '안녕하세요! 여러분의 AI 가이드, ai툴비입니다. 🐝\n\n우리는 지난 퀘스트까지 \'누가\'(캐릭터) \'무엇을 하는지\'(행동) 정했습니다. (예: a young Korean girl... wearing a yellow raincoat + walking)\n\n이제 세 번째 퀘스트입니다. 혹시 여러분의 캐릭터가 손에 무언가를 들고 있진 않나요? 아니면 어깨에 가방을 메고 있거나, 허리에 칼을 차고 있을 수도 있죠.\n\n[소품(Props)] 블록은 캐릭터의 \'이야기\'를 더 풍부하게 만들어주는 아이템을 추가하는 퀘스트입니다. 전사가 빛나는 마법 검을 들고 있다면 그 스토리가 완전히 달라지겠죠?',
        type: 'tutorial',
        audioFile: 'props.wav',
        parts: [
            {
                title: '1. 손에 든 소품 (Hand-held Props)',
                description: '캐릭터가 직접 \'들고\' 있거나 \'사용 중\'인 아이템입니다.',
                keywords: [
                    'holding a magic sword (마법 검을 들고 있는)',
                    'holding a glowing book (빛나는 책을 들고 있는)',
                    'holding a red umbrella (빨간 우산을 들고 있는)',
                    'holding a cup of coffee (커피잔을 들고 있는)',
                    'holding a smartphone (스마트폰을 들고 있는)'
                ],
                example: 'holding a transparent umbrella'
            },
            {
                title: '2. 착용/소지한 소품 (Worn / Carried Props)',
                description: '\'의상\'(Attire)과는 조금 다릅니다. 캐릭터가 소지한 기능적인 아이템을 말합니다.',
                keywords: [
                    'with a backpack (백팩을 메고 있는)',
                    'with a guitar on their back (등에 기타를 멘)',
                    'wearing a magical amulet (마법의 목걸이를 착용한)',
                    'with a camera around their neck (목에 카메라를 건)',
                    'with a gas mask (방독면을 쓴)'
                ],
                example: 'with a backpack'
            },
            {
                title: '3. 주변 소품 (Environmental Props)',
                description: '캐릭터가 직접 소유한 것은 아니지만, 캐릭터와 \'함께 있는\' 중요한 물체입니다.',
                keywords: [
                    'a robot dog by their side (옆에 로봇 개가 있는)',
                    'a cat sitting on their lap (무릎에 고양이가 앉아 있는)',
                    'a campfire in front of them (앞에 캠프파이어가 있는)',
                    'a motorcycle next to them (옆에 오토바이가 있는)'
                ],
                example: 'a cat sitting on their lap'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"with" 또는 "holding"으로 자연스럽게 붙여주세요!\n\n[소품] 블록을 [캐릭터]나 [행동] 블록에 연결하는 가장 쉬운 방법은 with (~와 함께) 또는 holding (~을 들고)이라는 \'접착제\' 키워드를 사용하는 것입니다.\n\n(조합 예시)\n[캐릭터: a warrior] + [행동: standing] + with a broken shield (부서진 방패와 함께)\n\n(조합 예시)\n[캐릭터: a girl] + [행동: sitting] + holding a cat (고양이를 안고)\n\n이렇게 하면 AI가 "아, 이 소품이 캐릭터와 연결된 것이구나!"라고 훨씬 명확하게 이해합니다.'
        },
        completion: {
            title: '🏆 퀘스트 3 완료!',
            message: '자, 이제 세 번째 [소품] 블록을 장착할 시간입니다.',
            choice: '저는 1, 2챕터의 제 캐릭터(노란 우비를 입고 걷는 소녀)에게 어울리게, <strong style="color: #ff6b6b;">"holding a transparent umbrella"</strong> (투명한 우산을 들고 있는)를 추가할게요. 노란 비옷과 투명한 우산, 정말 잘 어울릴 것 같지 않나요?"',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella',
            image: 'https://cdn.midjourney.com/b5f5dda1-91af-4626-a9ec-b09ac1ac0cd9/0_1.png',
            status: '캐릭터(Character) → 행동(Action) → <strong style="color: #ff6b6b;">소품(Props)\'</strong>  → 배경(Setting) → 스타일(Style) → 조명&시간(Lighting&Time) → 카메라(Camera)',
            nextStep: '이제 멋진 주인공이 완성되었습니다! 캐릭터, 행동, 소품까지 모두 정해졌네요.\n\n그렇다면... 이 주인공은 \'어디에\' 서 있는 걸까요? 숲속? 도시? 아니면 텅 빈 방?\n\n다음 챕터, \'블록 4: 배경(Setting)\' 퀘스트에서 이 모든 것을 결정합니다! 계속 진행할까요?'
        },
        usage: [],
        images: []
    },

    'tutorial-block4': {
        title: '[튜토리얼 4] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 4',
        koreanTitle: '블록 4: 배경(Setting)',
        prompt: '[블록 4: 배경(Setting)] 블록 장착하기',
        description: '안녕하세요! ai툴비입니다. 🐝\n\n우리는 드디어 주인공(캐릭터, 행동, 소품)을 완벽하게 만들었습니다! (현재 프롬프트: a young Korean girl... walking, holding a transparent umbrella)\n\n그런데... 이 멋진 주인공이 지금 \'어디에\' 있나요? 텅 빈 흰색 공간에 떠 있다면 너무 어색하겠죠?\n\n네 번째 퀘스트, [배경(Setting)] 블록은 우리 주인공을 멋진 무대 위에 세워주는, 이미지의 \'공간\'을 창조하는 퀘스트입니다.',
        type: 'tutorial',
        audioFile: 'setting.wav',
        parts: [
            {
                title: '1. 🏙️ 야외 / 도시 (Outdoor / City)',
                description: '가장 보편적인 배경입니다. 도시의 거리, 공원, 혹은 판타지 속 장소를 설정할 수 있습니다.',
                keywords: [
                    'in a futuristic city (미래형 도시에서)',
                    'in a rainy street (비 오는 거리에서)',
                    'in a crowded market (붐비는 시장에서)',
                    'on a neon-lit street (네온 불빛이 빛나는 거리에서)'
                ],
                example: 'in a rainy city street at night'
            },
            {
                title: '2. 🌲 야외 / 자연 (Outdoor / Nature)',
                description: '숲, 바다, 산 등 광활한 자연을 무대로 설정합니다.',
                keywords: [
                    'in an enchanted forest (마법에 걸린 숲에서)',
                    'on a mountain top (산 정상에서)',
                    'on a beach at sunset (해질녘 해변에서)',
                    'in a dark, foggy forest (어둡고 안개 낀 숲에서)'
                ],
                example: 'in an enchanted forest'
            },
            {
                title: '3. 🏠 실내 (Indoor)',
                description: '도서관, 방, 카페 등 특정 건물 내부를 배경으로 합니다.',
                keywords: [
                    'in a cozy library (아늑한 도서관에서)',
                    'in a high-tech lab (첨단 연구실에서)',
                    'inside a spaceship cockpit (우주선 조종석에서)',
                    'in a minimalist room (미니멀한 방 안에서)'
                ],
                example: 'in a cozy library'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"in", "on", "at" 같은 전치사를 사용하세요!\n\n[배경] 블록을 자연스럽게 연결하는 가장 좋은 \'접착제\'는 in (안에), on (위에), at (에서) 같은 \'전치사\'입니다.\n\n(나쁜 예) a warrior a castle\n(AI가 \'전사와 성\'을 따로 그릴 수 있습니다.)\n\n(좋은 예)\na warrior in a castle (성 \'안에\' 있는 전사)\na warrior on a castle wall (성벽 \'위에\' 있는 전사)\n\n전치사 하나로 캐릭터와 배경의 관계가 명확해집니다!'
        },
        completion: {
            title: '🏆 퀘스트 4 완료!',
            message: '이제 네 번째 [배경] 블록을 장착할 차례입니다.',
            choice: '"제 캐릭터는 \'노란 우비\'를 입고 \'투명 우산\'을 들고 있으니, <strong style="color: #ff6b6b;">in a rainy city street at night</strong>(밤에 비 오는 도시 거리에서)를 선택할게요. 비 오는 밤거리와 노란 우비, 색감 대비가 멋질 것 같아요!"',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night',
            image: 'https://cdn.midjourney.com/f75c5550-d39b-441f-8c1e-de6d5b9516de/0_3.png',
            status: '캐릭터(Character) → 행동(Action) → 소품(Props) → <strong style="color: #ff6b6b;">배경(Setting)\'</strong> → 스타일(Style) → 조명&시간(Lighting&Time) → 카메라(Camera)',
            nextStep: '자, 4개의 블록이 모두 조립되었습니다! 완성된 프롬프트를 볼까요?\n\n이제 거의 다 왔습니다! 주인공이 어디서 무엇을 하는지 모두 정해졌네요.\n\n그런데 이 멋진 장면을 **\'어떤 화풍\'**으로 그릴까요? 실사처럼? 애니메이션처럼? 아니면 유화처럼?\n\n다음 챕터, \'블록 5: 스타일(Style)\' 퀘스트에서 이미지의 \'느낌\'을 결정합니다! 계속 진행할까요?'
        },
        usage: [],
        images: []
    },

    'tutorial-block5': {
        title: '[튜토리얼 5] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 5',
        koreanTitle: '블록 5: 스타일(Style)',
        prompt: '[블록 5: 스타일(Style)] 블록 장착하기',
        description: '안녕하세요! ai툴비입니다. 🐝\n\n지금까지 4개의 퀘스트를 완료하면서, 우리는 \'누가, 어디서, 무엇을 하는지\'에 대한 완벽한 \'설계도\'를 만들었습니다.\n\n(현재까지 조립된 풀 프롬프트 예시)\na young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night\n\n이제 5번째 퀘스트입니다. 이 설계도를 가지고 **\'어떤 화풍\'**으로 이미지를 \'건축\'할지 결정할 차례입니다.\n\n[스타일(Style)] 블록은 이미지의 전체적인 \'느낌(Vibe)\'과 \'질감(Medium)\'을 결정하는, 가장 강력한 마법 블록입니다. 이 블록 하나만 바꿔도 실사 사진이 애니메이션이 되거나 유화가 될 수 있거든요!',
        type: 'tutorial',
        audioFile: 'style.wav',
        parts: [
            {
                title: 'A. 📸 실사 계열 (Realism)',
                description: '사진처럼 극도로 사실적인 느낌을 줍니다.',
                keywords: [
                    'photorealistic (실사 사진처럼)',
                    'hyperrealistic (극사실주의)',
                    '3D render (3D 렌더)',
                    'Octane render (옥테인 렌더, 극사실적 3D)',
                    'Unreal Engine 5 (언리얼 엔진, 고품질 게임 그래픽)'
                ],
                example: 'photorealistic'
            },
            {
                title: 'B. 🎬 애니메이션 계열 (Animation)',
                description: '만화 영화처럼 표현합니다. 친숙하고 매력적인 스타일이죠.',
                keywords: [
                    'anime style (일본 애니메이션 스타일)',
                    'Studio Ghibli style (스튜디오 지브리 스타일)',
                    'Pixar style (픽사 3D 애니 스타일)',
                    'cartoon style (미국 카툰 스타일)',
                    'Claymation (클레이 애니메이션)'
                ],
                example: 'anime style'
            },
            {
                title: 'C. 🎨 회화 / 일러스트 계열 (Painting / Illustration)',
                description: '아티스트의 손길이 느껴지는 그림 스타일입니다.',
                keywords: [
                    'digital painting (디지털 페인팅)',
                    'concept art (콘셉트 아트)',
                    'illustration (일러스트레이션)',
                    'oil painting (유화)',
                    'watercolor (수채화)',
                    'pencil sketch (연필 스케치)'
                ],
                example: 'digital painting'
            },
            {
                title: 'D. 🕶️ 특정 분위기 계열 (Aesthetic / Vibe)',
                description: '특정 세계관이나 감성을 이미지 전체에 덧씌웁니다.',
                keywords: [
                    'cyberpunk (사이버펑크)',
                    'steampunk (스팀펑크)',
                    'fantasy art (판타지 아트)',
                    'minimalist (미니멀리스트)',
                    'lo-fi aesthetic (로파이 감성)',
                    'gothic (고딕)'
                ],
                example: 'lo-fi aesthetic'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"스타일 블록은 \'조합\'할 수 있어요! (Vibe + Medium)"\n\n[스타일] 블록의 진정한 힘은 \'조합\'에 있습니다. [D. 분위기 계열] 키워드와 [A, B, C 계열] 키워드를 함께 사용해 보세요!\n\n(조합 예시 1)\nfantasy art (판타지 분위기) + digital painting (디지털 페인팅)\n\n(조합 예시 2)\ncyberpunk (사이버펑크 분위기) + anime style (애니 스타일)\n\n(조합 예시 3)\nlo-fi aesthetic (로파이 감성) + illustration (일러스트)\n\n이렇게 하면 \'사이버펑크풍의 애니메이션\'처럼 훨씬 더 구체적이고 독창적인 스타일을 만들 수 있습니다.'
        },
        completion: {
            title: '🏆 퀘스트 5 완료!',
            message: '이제 다섯 번째 [스타일] 블록을 장착해 봅시다.',
            choice: '저는 \'비 오는 밤거리\'와 \'소녀\'의 감성을 잘 살릴 수 있도록, 꿀팁에서 배운 \'조합\'을 사용해 볼게요!"\n\n <strong style="color: #ff6b6b;">\'anime style\'</strong> (애니 스타일) + <strong style="color: #ff6b6b;">\'lo-fi aesthetic\'</strong> (로파이 감성)\n\n"비 오는 날의 차분하고 편안한 애니메이션 느낌, 정말 기대되지 않나요?"',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night, anime style, lo-fi aesthetic',
            image: 'https://cdn.midjourney.com/2a723ff8-e50d-481e-831f-2752716dc168/0_3.png',
            status: '캐릭터(Character) → 행동(Action) → 소품(Props) → 배경(Setting) → <strong style="color: #ff6b6b;">\'스타일(Style)\'</strong> → 조명&시간(Lighting&Time) → 카메라(Camera)',
            nextStep: '5개의 블록이 모두 조립되었습니다! 완성된 프롬프트를 확인해 보세요.\n\n와! 이제 정말 멋진 장면이 머릿속에 그려집니다.\n\n그런데... \'비 오는 밤거리\'의 \'빛\'을 조금 더 극적으로 만들고 싶지 않으신가요? 예를 들어, \'네온사인\' 불빛이 비에 젖은 바닥에 반사되는 것처럼요!\n\n다음 챕터, \'블록 6: 조명 & 시간(Lighting & Time)\' 퀘스트에서 이 \'빛\'을 디자인해 보겠습니다! 계속할까요?'
        },
        usage: [],
        images: []
    },

    'tutorial-block6': {
        title: '[튜토리얼 6] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 6',
        koreanTitle: '블록 6: 조명 & 시간(Lighting & Time)',
        prompt: '[블록 6: 조명 & 시간(Lighting & Time)] 블록 장착하기',
        description: '안녕하세요! ai툴비입니다. 🐝\n\n우리는 5개의 블록을 조립해 \'어떤 장면\'을 \'어떤 스타일\'로 그릴지 완벽하게 기획했습니다.\n\n(현재까지 조립된 풀 프롬프트 예시)\na young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night, anime style, lo-fi aesthetic\n\n자, 6번째 퀘스트입니다! 우리는 [배경] 블록에서 이미 at night (밤)이라고 \'시간\'을 지정했습니다.\n\n하지만 [조명 & 시간] 블록은 여기서 한 걸음 더 나아가, 그 \'밤\'의 \'빛\'을 **"어떻게 디자인할 것인가?"**를 결정하는 퀘스트입니다. 그냥 \'어두운 밤\'이 아니라, \'감성적인 밤\'을 만들어야죠!',
        type: 'tutorial',
        audioFile: 'lighting.wav',
        parts: [
            {
                title: '1. 🕰️ \'시간\' 블록 (Time - 감성 숏컷)',
                description: '이 키워드들은 그 자체로 강력한 \'조명\'과 \'분위기\'를 포함하고 있습니다.',
                keywords: [
                    'golden hour (골든 아워 - 따뜻하고 부드러운 빛)',
                    'blue hour (블루 아워 - 해질녘의 차갑고 푸른 빛)',
                    'sunset / sunrise (일몰 / 일출)',
                    'midnight (자정 - 더 깊은 밤)',
                    '1980s / Victorian era (특정 시대의 색감과 분위기)'
                ],
                example: 'golden hour'
            },
            {
                title: '2. 💡 \'조명\' 블록 - 자연광/분위기광',
                description: '\'시간\'을 정했더라도, \'어떤 광원\'이 비추는지 구체적으로 지정하면 퀄리티가 훨씬 올라갑니다.',
                keywords: [
                    'moonlight (달빛)',
                    'candlelight (촛불)',
                    'firelight (모닥불)',
                    'glowing streetlights (빛나는 가로등)',
                    'car headlights (자동차 헤드라이트)',
                    'warm light from shop windows (가게 창문에서 새어 나오는 따뜻한 불빛)',
                    'bioluminescent (생물 발광, 판타지 숲 등)'
                ],
                example: 'glowing streetlights and warm light from shop windows'
            },
            {
                title: '3. 🎬 극적 조명 (Dramatic Lighting)',
                description: '영화처럼 극적인 빛의 효과를 만들어냅니다.',
                keywords: [
                    'cinematic lighting (영화적 조명, 강한 대비)',
                    'volumetric lighting (부피감이 느껴지는 빛, 안개 속 빛줄기)',
                    'rim lighting (림 라이팅, 캐릭터의 외곽선을 비추는 역광)',
                    'dramatic shadows (극적인 그림자)'
                ],
                example: 'cinematic lighting'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"\'시간\'과 \'조명\'은 항상 둘 다 필요한가요?"\n\n아닙니다! \'시간\' 블록은 그 자체로 조명 값을 포함합니다. golden hour라고 쓰면 굳이 warm light를 또 쓸 필요가 없죠.\n\n[시간] 블록은 \'전체적인 분위기\'를 잡을 때 쓰세요.\n[조명] 블록은 \'특정 광원\'을 눈에 보이게 그리고 싶을 때 쓰세요. (예: glowing streetlights)\n\n[배경]에서 at night를 썼다면, [조명] 블록에서 glowing streetlights를 추가해 \'어떤 밤인지\'를 구체화하는 것이 좋습니다!'
        },
        completion: {
            title: '🏆 퀘스트 6 완료!',
            message: '이제 여섯 번째 [조명 & 시간] 블록을 장착해 봅시다.',
            choice: '\'네온사인\' 대신, \'로파이(lo-fi)\' 감성에 어울리는 따뜻한 불빛을 선택할게요."\n\n"비 오는 밤거리에 <strong style="color: #ff6b6b;">\'glowing streetlights\'</strong> (빛나는 가로등) 불빛과 <strong style="color: #ff6b6b;">\'warm light from shop windows\'</strong> (가게 창문에서 새어 나오는 따뜻한 불빛)**이 젖은 바닥에 반사되는 모습을 상상했어요!',
            result: 'a young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night, anime style, lo-fi aesthetic, glowing streetlights and warm light from shop windows',
            image: 'https://cdn.midjourney.com/83add2b7-38a2-40a5-8685-fa7840b0909b/0_3.png',
            status: '캐릭터(Character) → 행동(Action) → 소품(Props) → 배경(Setting) → 스타일(Style) → <strong style="color: #ff6b6b;">\'조명&시간(Lighting&Time)\'</strong> → 카메라(Camera)',
            nextStep: '6개의 블록이 모두 조립되었습니다! 프롬프트가 훨씬 더 풍부해졌네요!\n\n드디어 마지막 퀘스트입니다! 우리는 이제 \'어떤 장면\'을 그릴지 완벽하게 기획했습니다.\n\n이제 이 장면을 \'어떤 카메라로\', \'어떤 각도에서\' 찍을지만 결정하면 됩니다!\n\n마지막 퀘스트, \'블록 7: 카메라(Camera)\' 퀘스트에서 이 모든 것을 마무리합니다! 계속 진행할까요?'
        },
        usage: [],
        images: []
    },

    'tutorial-block7': {
        title: '[튜토리얼 7] 🤖 ai툴비 프롬프트 빌더 퀘스트: 챕터 7 (최종)',
        koreanTitle: '블록 7: 카메라(Camera)',
        prompt: '[블록 7: 카메라(Camera)] 블록 장착하기',
        description: '안녕하세요! 여러분의 AI 가이드, ai툴비입니다. 🐝\n\n우리는 6개의 퀘스트를 통해 \'어떤 장면\'을 \'어떤 스타일\'과 \'어떤 빛\'으로 그릴지 완벽하게 기획했습니다.\n\n(현재까지 조립된 풀 프롬프트 예시)\na young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night, anime style, lo-fi aesthetic, glowing streetlights and warm light from shop windows\n\n이제 정말 마지막 퀘스트입니다. 이 멋진 장면을 "어떻게, 어떤 각도에서 찍을 것인지" 결정할 차례입니다.\n\n[카메라(Camera)] 블록은 우리가 \'관찰자\'가 되어 이미지의 \'시점\'과 \'구도\'를 정하는, 감독의 큐사인과도 같은 블록입니다!',
        type: 'tutorial',
        audioFile: 'camera.wav',
        parts: [
            {
                title: '1. 샷 크기 (Shot Size)',
                description: '얼마나 가깝게 찍을지를 결정합니다. 인물 중심인지, 배경 중심인지 정하는 핵심이죠.',
                keywords: [
                    'close-up shot (클로즈업: 인물의 얼굴과 감정에 집중)',
                    'medium shot (미디엄 샷: 인물의 상반신과 약간의 배경)',
                    'full shot (풀 샷: 인물의 전신을 보여줌)',
                    'wide shot (와이드 샷: 인물보다 배경을 더 넓게 보여줌)',
                    'extreme wide shot (익스트림 와이드 샷: 웅장한 풍경 속 인물)'
                ],
                example: 'wide shot'
            },
            {
                title: '2. 카메라 앵글 (Camera Angle)',
                description: '어떤 높이에서 찍을지를 결정합니다. 앵글에 따라 인물의 느낌이 완전히 달라집니다.',
                keywords: [
                    'eye level shot (아이 레벨: 가장 표준적인 눈높이)',
                    'low angle shot (로우 앵글: 아래에서 위로, 인물이 웅장해 보임)',
                    'high angle shot (하이 앵글: 위에서 아래로, 인물이 아담해 보임)',
                    'bird\'s eye view (버즈 아이 뷰: 하늘에서 수직으로 내려다봄)',
                    'worm\'s eye view (웜즈 아이 뷰: 바닥에 붙어 위를 봄)'
                ],
                example: 'eye level shot'
            },
            {
                title: '3. 렌즈 효과 / 구도 (Lens / Composition)',
                description: '전문적인 촬영 효과를 추가합니다.',
                keywords: [
                    'bokeh (보케: 배경의 불빛을 동그랗게 뭉개는 효과)',
                    'shallow depth of field (얕은 심도: 아웃포커싱, 배경 흐림)',
                    'deep focus (깊은 심도: 배경까지 모두 선명함)',
                    'rule of thirds (삼등분 법칙: 안정적인 구도)'
                ],
                example: 'bokeh'
            }
        ],
        tip: {
            title: '🐝 ai툴비의 꿀팁 (Tip!)',
            content: '"\'카메라\' 블록은 프롬프트의 \'맨 앞\'에 두세요!"\n\n[카메라] 블록의 키워드(예: medium shot)는 다른 블록들과 달리, 프롬프트의 맨 앞에 두는 것이 효과적일 때가 많습니다.\n\na girl... (중략)... medium shot (X - 덜 효과적)\nmedium shot of a girl... (중략) (O - 강력함!)\n\nAI에게 "이봐! 지금부터 내가 말하는 장면을 \'미디엄 샷\'으로 찍어줘!"라고 가장 먼저 지시하는 \'감독의 명령\' 역할을 하기 때문입니다!'
        },
        completion: {
            title: '🏆✨ 퀘스트 대성공! "궁극의 프롬프트" 완성! ✨🏆',
            message: '축하합니다! 여러분은 7개의 모든 퀘스트를 완료하고, 흩어져 있던 블록들을 모아 \'여러분만의 궁극의 프롬프트\' 조립에 성공했습니다!',
            choice: '저는 1~6챕터까지 만든 제 캐릭터(우비 소녀)의 감성적인 표정에 집중하고 싶어요. 그래서 <strong style="color: #ff6b6b;">\'high angle full shot\'</strong> (하이앵글 샷)을 선택할게요.\n\n그리고 꿀팁을 활용해서, \'비 오는 밤\'과 \'로파이 감성\'을 극대화하기 위해 bokeh (보케) 효과를 추가해서 뒷배경의 가로등 불빛이 예쁘게 뭉개지도록 할 거예요!',
            result: 'high angle, full shot, bokeh of a young Korean girl with short black hair, wearing a yellow raincoat, walking, holding a transparent umbrella, in a rainy city street at night, anime style, lo-fi aesthetic, glowing streetlights and warm light from shop windows --ar 16:9 --v 7',
            image: 'images/lowhigh.png',
            status: '캐릭터(Character) → 행동(Action) → 소품(Props) → 배경(Setting) → 스타일(Style) → 조명&시간(Lighting&Time) → <strong style="color: #ff6b6b;">\'카메라(Camera)\'</strong>',
            nextStep: '이제 이 완성된 프롬프트를 미드저니, 이미지FX, 픽루멘, 위스크 등 어떤 AI 툴에 넣어도, 여러분이 상상했던 \'비 오는 밤거리의 노란 우비 소녀\' 이미지를 정확하게 얻을 수 있을 것입니다.\n\n이 7-블록 조립 방식만 기억한다면, 여러분은 앞으로 어떤 이미지든 자유자재로 창조할 수 있는 \'AI 프롬프트 마스터\'가 될 수 있습니다!\n\n지금까지 튜토리얼을 따라오시느라 정말 고생 많으셨습니다! 🐝'
        },
        usage: [],
        images: []
    },


    // ============= 전문가 과정 =============
    'expert-ch1': {
        title: 'Chapter 1. AI 아트 디렉터처럼 생각하기',
        koreanTitle: '시작하며',
        prompt: '',
        description: '',
        type: 'expert',
        parts: [
            {
                title: 'AI 이미지 생성의 현실',
                content: 'AI 이미지 생성 툴이 쏟아지는 시대입니다. 누구나 몇 초 만에 이미지를 만들 수 있습니다.\n\n하지만 아무나 정확히 원하는 이미지를 만들지는 못합니다.'
            },
            {
                title: '프롬프트 룰렛 (Prompt Roulette)',
                content: '아마 당신도 이런 경험이 있을 것입니다.\n\n(Before) 당신의 프롬프트:\n"밤에 혼자 사무실에서 일하는 남자"\n\n(AI의 결과물):\n- 어딘가 어색한 구도...\n- 내가 원한 고독한 느낌이 아니라 그냥 밝은 사무실...\n- 전혀 감성적이지 않은 평범한 스톡 이미지...\n\n원하는 이미지가 나올 때까지 단어 몇 개를 바꿔가며 시도합니다.\n\n우리는 이것을 프롬프트 룰렛(Prompt Roulette)이라 부릅니다. 원하는 숫자가 나올 때까지 레버를 당기는 것과 같습니다.'
            },
            {
                title: '왜 이런 일이 발생할까요?',
                content: '대부분의 사용자가 AI에게 단순한 키워드 나열을 하고 있기 때문입니다.\n\n이는 마치 영화감독이 배우에게 "자, 알아서 연기해 봐!"라고 말하는 것과 같습니다.\n\n훌륭한 결과물은 명령이 아닌 설계에서 나옵니다.'
            },
            {
                title: '이 책은 무엇인가?',
                content: '이 책은 마법의 프롬프트 키워드를 나열한 주문서가 아닙니다.\n\n이 책은 당신의 사고방식을 AI 아트 디렉터(Art Director)로 바꾸는 훈련 가이드입니다.\n\nAI 아트 디렉터는 룰렛을 돌리지 않습니다. 그들은 청사진(Blueprint)을 그립니다.'
            },
            {
                title: 'AI 아트 디렉터의 프롬프트',
                content: '(After) 아트 디렉터의 프롬프트:\n\n"[Cinematic] 스타일로, [Low Angle Shot]으로 잡은, 텅 빈 사무실 [네온 조명]이 비치는 책상에 앉아 [고뇌하는 표정]으로 모니터를 응시하는 30대 남자, [어둡고 차가운 톤], [--ar 16:9]"\n\n(AI의 결과물):\n- 정확히 의도한 구도와 분위기\n- 스토리텔링이 담긴 한 편의 영화 스틸 컷\n\n차이가 느껴지시나요?'
            },
            {
                title: '이 책의 목표',
                content: '이 책의 목표는 명확합니다.\n\n당신이 룰렛을 멈추고 청사진을 그리도록 돕는 것입니다.\n\n우리는 이 청사진을 8요소 프레임워크(8-Element Framework)라고 부릅니다.'
            },
            {
                title: '8요소 프레임워크',
                content: '이 프레임워크는 미드저니(Midjourney) V7을 비롯한 최신 생성 AI에 최적화되어 있으며, 당신의 추상적인 아이디어를 전문가 수준의 구체적인 이미지로 변환하는 가장 확실한 공식이 될 것입니다.\n\n8가지 핵심 요소:\n1. 스타일 (Style/Mood)\n2. 파라미터 (Parameters)\n3. 주제/피사체 (Subject)\n4. 액션/포즈 (Action/Pose)\n5. 환경/배경 (Environment)\n6. 조명 (Lighting)\n7. 카메라 앵글/구도 (Angle/Composition)\n8. 색감 및 품질/효과 (Color & Quality/Effects)'
            }
        ],
        usage: [],
        images: []
    },

    'expert-ch2': {
        title: 'Chapter 2. 완벽한 프롬프트의 핵심 워크플로우',
        koreanTitle: '3단계로 청사진 그리기',
        prompt: '',
        description: '',
        type: 'expert',
        parts: [
            {
                title: '8요소 프레임워크는 체크리스트가 아닙니다',
                content: '8요소 프레임워크는 단순히 8개의 요소를 나열한 체크리스트가 아닙니다.\n\n이는 AI가 가장 잘 알아들을 수 있도록 설계된 단계별 사고 과정(Workflow)입니다.\n\n복잡한 프롬프트를 한 번에 떠올리려 하지 마세요. 단순한 질문에서 시작해 한 단계씩 살을 붙여나가는 것이 핵심입니다.'
            },
            {
                title: 'AI 아트 디렉터의 3단계 워크플로우',
                content: 'AI 아트 디렉터는 이 3단계 워크플로우로 작업합니다:\n\n1단계: [스타일]과 [비율] 먼저 정하기 (캔버스 결정)\n2단계: 5W1H로 [상세 요소] 질문하기 (디테일 설계)\n3단계: 조합 및 [최종 프롬프트] 생성하기 (청사진 완성)'
            },
            {
                title: '1단계: 스타일과 비율 먼저 정하기',
                content: '가장 먼저 할 일은 무엇을 그릴지 정하는 것이 아닙니다. 어떻게 보일지, 즉 전체적인 캔버스와 톤을 결정하는 것입니다.\n\n영화감독이 시나리오를 쓰기 전에:\n- "이건 누아르 영화야" (스타일)\n- "그리고 와이드 스크린 비율로 찍을 거야" (비율)\n\n라고 정하는 것과 같습니다.\n\n--ar 16:9의 시네마틱 샷과 --ar 1:1의 인물 샷은 완전히 다른 접근이 필요합니다.'
            },
            {
                title: '2단계: 5W1H로 상세 요소 질문하기',
                content: '캔버스가 정해졌다면, 이제 그 안을 채울 차례입니다.\n\n한 번에 하나씩, 5W1H 원칙에 따라 스스로에게 질문을 던집니다:\n\nWHO? (주제/피사체): 주인공은 누구인가?\nWHAT? (액션/포즈): 그는 무엇을 하고 있는가?\nWHERE? (환경/배경): 여긴 어디인가?\nWHEN/HOW? (조명): 지금은 몇 시이며, 빛은 어디에서 오는가?\nHOW? (카메라 앵글): 이 장면을 어떤 각도에서 보여줄 것인가?\n\n이 질문들에 답하는 과정에서 프롬프트의 뼈대가 완성됩니다.'
            },
            {
                title: '3단계: 최종 프롬프트 조합하기',
                content: '마지막으로, 1, 2단계에서 수집한 모든 설계 요소들을 AI가 이해할 수 있는 언어(주로 영어 키워드)로 조립합니다.\n\n조합 공식:\n(스타일) + (비율) + (주제) + (액션) + (배경) + (조명) + (앵글) + (품질) = 완벽한 프롬프트\n\n이 워크플로우를 따르는 순간, 당신은 더 이상 AI에게 부탁하는 사람이 아니라, AI라는 유능한 어시스턴트에게 명확한 지시를 내리는 아트 디렉터가 됩니다.'
            },
            {
                title: '다음 단계',
                content: '다음 장(Part 2)부터 이 8가지 요소를 하나씩 해부하며 청사진을 그리는 실전 훈련을 시작하겠습니다.\n\n준비되셨나요? 이제 본격적으로 AI 아트 디렉터의 세계로 들어가 봅시다!'
            }
        ],
        usage: [],
        images: []
    },

    'expert-ch3': {
        title: 'Chapter 3. 요소 1: 스타일 (Style/Mood)',
        koreanTitle: '이미지의 첫인상을 결정하는 가장 강력한 요소',
        prompt: '',
        description: 'Part 1에서 우리는 아트 디렉터의 3단계 워크플로우를 배웠습니다. 가장 첫 번째 단계는 "무엇을" 그릴지가 아니라 "어떻게" 보일지를 정하는 것이라고 했습니다.\n\nPart 2에서는 이 첫인상을 결정하는 가장 강력한 두 가지 요소, 스타일과 파라미터에 대해 알아봅니다.',
        type: 'expert-style',
        keywordType: 'style',
        intro: {
            title: '스타일은 모든 것입니다',
            content: '프롬프트 엔지니어링에서 스타일은 모든 것입니다. 스타일 키워드는 AI에게 "이 이미지는 어떤 렌즈를 통해 세상을 바라봐야 하는가?"를 알려주는 핵심 지침입니다.\n\n같은 카페에 앉아있는 남자라는 주제도, 어떤 스타일을 선택하느냐에 따라 180도 다른 결과물을 내놓습니다.'
        },
        styleExamples: [
            {
                title: 'Photorealistic',
                subtitle: '사진처럼 사실적인',
                description: 'Photorealistic을 선택하면, AI는 현실의 조명, 질감, 렌즈의 특성을 계산합니다.',
                prompt: 'Photorealistic, a man sitting in a cafe, natural afternoon light',
                result: '실제 카메라로 찍은 듯한 스냅샷. 피부의 질감, 창문으로 들어오는 자연광, 커피잔의 반사광이 현실적으로 표현됨',
                keywords: ['photorealistic', 'hyperrealistic', 'professional photography', 'natural lighting', 'realistic textures']
            },
            {
                title: 'Anime Style',
                subtitle: '애니메이션 스타일',
                description: 'Anime Style을 선택하면, AI는 현실의 물리 법칙 대신 셀 채색, 과장된 표정, 만화적 구도를 계산합니다.',
                prompt: 'Anime Style, Studio Ghibli style, a man sitting in a cafe, warm and cozy colors',
                result: '따뜻한 색감의 지브리 스튜디오 풍 작화. 부드러운 파스텔톤, 손으로 그린 듯한 배경, 감성적인 캐릭터 표현',
                keywords: ['anime style', 'Studio Ghibli', 'manga style', 'cel shading', 'kawaii']
            },
            {
                title: 'Cinematic',
                subtitle: '영화처럼',
                description: 'Cinematic을 선택하면, AI는 극적인 조명 대비, 영화적인 색 보정, 와이드한 구도를 우선적으로 고려합니다.',
                prompt: 'Cinematic, Noir Style, a man sitting in a cafe, dramatic side lighting, shadows, smoking',
                result: '1940년대 흑백 영화의 한 장면. 창문 틈으로 들어오는 한 줄기 빛(Rim light), 얼굴의 절반이 그림자에 잠겨 있으며, 고독하고 무거운 분위기',
                keywords: ['cinematic', 'film noir', 'dramatic lighting', 'chiaroscuro', 'color grading']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '스타일 키워드를 정할 때는 부록으로 제공하는 키워드 사전을 참고하세요.\n\n미술 사조: Impressionism, Surrealism, Cubism\n아티스트: by Van Gogh, by Hayao Miyazaki\n매체: Oil Painting, Watercolor, 3D Render, Pixel Art\n장르: Cyberpunk, Steampunk, Fantasy'
        },
        conclusion: {
            title: '스타일이 AI의 해석 방식을 결정합니다',
            content: '보시다시피, 스타일은 단순히 이미지를 꾸미는 요소가 아닙니다. 스타일은 AI가 이미지를 해석하는 방식 그 자체를 결정합니다.\n\n당신이 원하는 분위기가 따뜻함인지, 사실적임인지, 극적임인지를 가장 먼저 정해야 하는 이유입니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch4': {
        title: 'Chapter 4. 요소 2: 파라미터 (Parameters)',
        koreanTitle: '화면 비율이 구도를 결정한다',
        prompt: '',
        description: '스타일(톤 앤 매너)을 정했다면, 다음은 이미지가 담길 틀, 즉 캔버스의 형태를 정할 차례입니다.',
        type: 'expert-style',
        keywordType: 'parameter',
        intro: {
            title: '화면 비율의 중요성',
            content: '미드저니에서는 --ar (Aspect Ratio, 화면 비율) 파라미터로 캔버스 형태를 제어합니다.\n\n많은 초보자가 이 파라미터를 생략합니다. (기본값은 1:1 정사각형) 하지만 아트 디렉터는 화면 비율이 구도와 스토리에 얼마나 큰 영향을 미치는지 잘 알고 있습니다.'
        },
        styleExamples: [
            {
                title: '--ar 16:9',
                subtitle: '가로형 (시네마틱)',
                description: '영화, 풍경, 여러 인물이 등장하는 장면에 최적화되어 있습니다. 안정감과 광활함을 줍니다.',
                prompt: 'cinematic, a knight standing on a mountain peak, vast landscape --ar 16:9',
                result: '기사는 다소 작게 표현되더라도, 좌우로 펼쳐진 광활한 하늘과 산맥이 강조됨. 영화 반지의 제왕의 한 장면처럼 보임',
                keywords: ['--ar 16:9', '--ar 21:9', '--ar 2:1', 'cinematic wide', 'landscape']
            },
            {
                title: '--ar 1:1',
                subtitle: '정사각형 (SNS)',
                description: '인스타그램 등 SNS에 적합합니다. 시선을 중앙으로 집중시켜 인물 사진이나 오브젝트에 좋습니다.',
                prompt: 'cinematic, a knight standing on a mountain peak, vast landscape --ar 1:1',
                result: '배경과 인물이 균형 있게 배치됨. 기사의 모습에 시선이 집중되지만, 16:9만큼의 광활함은 덜함',
                keywords: ['--ar 1:1', '--ar 4:5', 'square format', 'instagram', 'centered']
            },
            {
                title: '--ar 9:16',
                subtitle: '세로형 (모바일)',
                description: '스마트폰 배경화면, 틱톡/릴스 콘텐츠에 사용됩니다. 인물의 전신을 담거나 수직적인 느낌을 강조할 때 강력합니다.',
                prompt: 'cinematic, a knight standing on a mountain peak, vast landscape --ar 9:16',
                result: '산봉우리의 높이와 기사의 웅장한 전신이 강조됨. 하늘이나 좌우 풍경보다 수직적인 위압감이 살아남',
                keywords: ['--ar 9:16', '--ar 2:3', 'vertical', 'mobile', 'portrait']
            }
        ],
        tip: {
            title: '기타 유용한 파라미터',
            content: '--v 6: 미드저니 최신 버전 사용\n--s 750: 스타일 강도 조절 (0-1000, 기본값 100)\n--style raw: 더 자연스럽고 덜 양식화된 결과물\n--chaos 50: 변화도 조절 (0-100, 높을수록 다양한 결과)'
        },
        conclusion: {
            title: '습관을 들이세요',
            content: '프롬프트를 시작할 때, [스타일]과 [--ar 비율]을 먼저 입력하는 습관을 들이세요.\n\n이 두 가지만으로도 당신의 결과물은 80% 이상 예측 가능하고 통제 가능한 범위로 들어옵니다.\n\n이제 첫인상을 결정했으니, 다음 파트(Part 3)부터는 이 캔버스 안을 채워 넣을 5W1H 요소들을 하나씩 설계해 보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch5': {
        title: 'Chapter 5. 요소 3: 주제/피사체 (Subject)',
        koreanTitle: 'WHO - 누가 주인공인가?',
        prompt: '',
        description: 'Part 2에서 우리는 스타일과 비율이라는 캔버스를 설정했습니다. 이제 아트 디렉터로서 캔버스 위에 무엇을 그릴지 구체적으로 설계할 차례입니다.\n\nPart 3에서는 5W1H 원칙을 따라 장면의 핵심 요소를 하나씩 쌓아 올립니다. 이 단계의 핵심은 한 번에 하나씩 요소를 더해가는 것입니다.',
        type: 'expert-style',
        keywordType: 'subject',
        intro: {
            title: '주인공을 캐스팅하세요',
            content: '모든 훌륭한 이미지에는 주인공이 있습니다. 5W1H의 첫 번째 질문인 WHO? (누가?)는 이미지의 시선이 머무를 단 하나의 닻(Anchor)을 설정하는 과정입니다.\n\nAI에게 "사람"이나 "개"라고 말하는 것은, 배우에게 "그냥 사람처럼 연기해"라고 말하는 것과 같습니다. AI는 누구를 캐스팅해야 할지 몰라 가장 평균적인(generic) 이미지를 가져올 것입니다.\n\n아트 디렉터는 캐스팅 디렉터가 되어야 합니다. 어떤 사람인지, 어떤 동물인지, 어떤 사물인지 구체적으로 명시해야 합니다.'
        },
        styleExamples: [
            {
                title: '모호한 캐스팅',
                subtitle: 'Bad Prompt',
                description: '특징 없는 평균적인 이미지가 생성됩니다.',
                prompt: 'cinematic, a man standing --ar 16:9',
                result: '특징 없는 평균적인 남자가 밋밋하게 서 있음. 나이, 직업, 스타일을 알 수 없는 스톡 이미지',
                keywords: ['a man', 'a woman', 'a person', 'generic', 'average']
            },
            {
                title: '구체적인 인물 캐스팅',
                subtitle: 'Good Prompt',
                description: '나이, 특징, 의상까지 구체적으로 명시하면 캐릭터의 역사가 느껴집니다.',
                prompt: 'cinematic, a 60-year-old grizzled warrior, deep scar over one eye, wearing heavy iron armor, fantasy style --ar 16:9',
                result: '얼굴의 주름, 흉터의 질감, 갑옷의 반사광까지 캐릭터의 역사가 느껴지는 구체적인 인물이 생성됨',
                keywords: ['60-year-old warrior', 'young woman', 'elderly man', 'teenage girl', 'grizzled veteran']
            },
            {
                title: '사물 캐스팅',
                subtitle: 'Good Prompt',
                description: '사물도 주인공이 될 수 있습니다. 구체적인 특징을 부여하세요.',
                prompt: 'cinematic, an ancient magical book, glowing runes on the leather cover, sitting on a stone pedestal --ar 1:1',
                result: '책의 가죽 질감, 룬 문자의 빛 효과, 받침대의 거친 표면 등 주인공으로서의 존재감이 명확한 사물이 생성됨',
                keywords: ['ancient book', 'vintage camera', 'magical sword', 'glowing crystal', 'rusty robot']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '주제/피사체를 설계할 때는 다음 요소들을 조합해 보세요. (전부 다 쓸 필요는 없지만, 구체적일수록 좋습니다.)\n\n핵심 정체성: man, woman, dragon, robot, tree\n수식어 (외형): young, old, tall, glowing, rusty\n패션/의상: wearing a 1980s retro jacket, in a victorian dress\n얼굴/특징: with a sharp jawline, blue eyes, long beard\n액세서리: holding a vintage camera, with cyberpunk goggles\n\n부록의 주제/피사체 키워드 사전을 참고하여 당신의 주인공을 구체화해 보세요.'
        },
        conclusion: {
            title: '다음 단계',
            content: '자, 이제 주인공 캐스팅이 끝났습니다. 그렇다면 이 주인공이 캔버스 위에서 "무엇을 하고 있나요? (WHAT?)"\n\n다음 챕터에서는 장면에 생동감을 불어넣는 [액션/포즈]에 대해 알아보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch6': {
        title: 'Chapter 6. 요소 4: 액션/포즈 (Action/Pose)',
        koreanTitle: 'WHAT - 무엇을 하고 있는가?',
        prompt: '',
        description: 'Chapter 5에서 우리는 누가(WHO) 주인공인지 명확하게 캐스팅했습니다. 하지만 훌륭하게 캐스팅된 주인공이라도 캔버스 위에 그냥 서 있기만 한다면, 그건 살아있는 캐릭터가 아니라 마네킹이나 다름없습니다.\n\n장면에 생명력을 불어넣는 두 번째 질문은 WHAT? (무엇을 하고 있는가?)입니다.',
        type: 'expert-style',
        keywordType: 'action',
        intro: {
            title: '스토리를 만드는 액션과 포즈',
            content: '[액션/포즈]는 당신의 주인공이 어떤 상태에 있는지, 어떤 이야기의 한가운데에 있는지를 AI에게 알려주는 핵심 연기 디렉션입니다.\n\n서 있는 전사는 단순한 설명입니다. 검을 높이 들고 함성을 지르며 달려가는 전사는 스토리입니다.\n\n액션이 꼭 달리기나 점프처럼 커다란 움직임일 필요는 없습니다. 포즈, 표정, 시선의 미묘한 조합이 때로는 더 많은 이야기를 전달합니다.'
        },
        styleExamples: [
            {
                title: '액션이 없는 캐스팅',
                subtitle: 'Bad Prompt',
                description: '어떤 상황인지 알 수 없는 증명사진처럼 보입니다.',
                prompt: 'cinematic, a detective in a trench coat --ar 16:9',
                result: '탐정이 밋밋하게 서 있거나 정면을 보고 있음. 어떤 상황인지 알 수 없는 증명사진이나 카탈로그 샷처럼 보임',
                keywords: ['standing', 'sitting', 'looking at camera', 'neutral pose', 'static']
            },
            {
                title: '동적인 액션',
                subtitle: 'Good Prompt - Dynamic',
                description: '역동적인 움직임으로 추격전이라는 스토리가 명확해집니다.',
                prompt: 'cinematic, a detective in a trench coat, running down a dark alleyway, holding a revolver, determined expression --ar 16:9',
                result: '역동적인 달리기 자세, 흔들리는 코트 자락, 긴박한 표정 등 추격전이라는 스토리가 명확하게 담긴 장면이 생성됨',
                keywords: ['running', 'jumping', 'fighting', 'chasing', 'flying through air']
            },
            {
                title: '정적인 포즈와 감정',
                subtitle: 'Good Prompt - Static',
                description: '큰 움직임 없이도 고뇌와 잠복이라는 스토리가 느껴집니다.',
                prompt: 'cinematic, a detective in a trench coat, leaning against a brick wall, arms crossed, looking away pensively, face half in shadow --ar 16:9',
                result: '큰 움직임은 없지만 고뇌와 잠복이라는 스토리가 느껴짐. 팔짱 낀 자세, 시선 처리, 그림자를 통해 캐릭터의 복잡한 심리가 드러남',
                keywords: ['leaning against wall', 'arms crossed', 'looking away', 'sitting pensively', 'eyes closed']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '액션/포즈를 지시할 때는 다음 요소들을 조합해 보세요. AI는 이 디테일한 연기 지시를 기가 막히게 알아듣습니다.\n\n동작 (Action): running, jumping, fighting, walking, dancing\n자세 (Pose): standing confidently, sitting cross-legged, leaning against\n감정/표정 (Emotion): laughing, crying, frowning, surprised expression\n시선 (Gaze): looking directly at camera, looking away, eyes closed'
        },
        conclusion: {
            title: '다음 단계',
            content: '주인공(WHO)이 정해지고, 그가 무엇을 하는지(WHAT)가 정해졌습니다. 이제 아트 디렉터로서 가장 흥미로운 질문이 남았습니다.\n\n"그래서 여긴 어디인가? (WHERE?)"\n\n다음 챕터에서는 이 모든 이야기가 펼쳐질 무대, [환경/배경]을 설계해 보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch7': {
        title: 'Chapter 7. 요소 5: 환경/배경 (Environment)',
        koreanTitle: 'WHERE - 여기가 어디인가?',
        prompt: '',
        description: '지금까지 우리는 주인공을 캐스팅(WHO)하고, 그에게 생동감 넘치는 연기(WHAT)를 지시했습니다. 하지만 배우가 하얀 방(White Room)에서 연기한다면 어떨까요? 아무리 훌륭한 연기도 스토리가 완성되지 않습니다.\n\n세 번째 질문, WHERE? (여기가 어디인가?)는 당신의 이야기를 완성하는 무대(Stage)를 설치하는 작업입니다.',
        type: 'expert-style',
        keywordType: 'environment',
        intro: {
            title: '무대를 설치하세요',
            content: '[환경/배경]은 단순히 뒤에 깔리는 배경화면이 아닙니다. 이것은 주인공의 맥락(Context)을 설명하고, 장면의 분위기(Mood)를 지배하며, 때로는 그 자체로 또 다른 주인공이 됩니다.\n\n폭우 속의 탐정과 맑은 날의 탐정은 완전히 다른 이야기를 품고 있습니다. 성 안의 전사와 늪지대의 전사는 처한 상황이 다릅니다.\n\n당신은 이제 아트 디렉터이자, 이 장면의 무대 디자이너(Set Designer)입니다.'
        },
        styleExamples: [
            {
                title: '무대가 없는 배우',
                subtitle: 'Bad Prompt',
                description: '배경이 없으면 스토리도 없습니다.',
                prompt: 'cinematic, a wizard casting a spell --ar 16:9',
                result: '흰색이나 단색 배경, 혹은 AI가 임의로 생성한 의미 없는 배경 앞에 마법사가 덩그러니 서 있음. 스토리가 전혀 없음',
                keywords: ['no background', 'white background', 'simple background', 'plain', 'empty']
            },
            {
                title: '신비로운 무대',
                subtitle: 'Good Prompt - Mystery',
                description: '고대 도서관이라는 무대가 지식과 신비로움을 전달합니다.',
                prompt: 'cinematic, a wizard casting a spell, inside an ancient library, tall bookshelves reaching the ceiling, dust particles floating in the air, a single shaft of moonlight --ar 16:9',
                result: '지식, 비밀, 신비로움이라는 키워드가 느껴지는 장면. 마법사는 아마도 고대의 주문을 연구 중일 것임',
                keywords: ['in ancient library', 'in mystical cave', 'in wizard tower', 'surrounded by books', 'in secret chamber']
            },
            {
                title: '긴박한 무대',
                subtitle: 'Good Prompt - Tension',
                description: '폭풍우 치는 산봉우리가 전투와 위험을 암시합니다.',
                prompt: 'cinematic, a wizard casting a spell, on a stormy mountain peak, dark storm clouds swirling, rain lashing down, defensive magic shield glowing --ar 16:9',
                result: '전투, 위험, 방어라는 키워드가 느껴지는 장면. 마법사는 무언가와 싸우고 있거나 위험한 의식을 치르는 중일 것임',
                keywords: ['on mountain peak', 'in stormy battlefield', 'in dark forest', 'on cliff edge', 'in ruins']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '환경/배경을 설계할 때는 다음 요소들을 조합해 보세요. 이 요소들은 서로 강력하게 상호작용합니다.\n\n장소 (Location): in a space station, on a tropical beach, in a medieval castle hall\n장소 묘사: cluttered with gadgets, with pristine white sand, decorated with royal banners\n날씨 (Weather): sunny, rainy, foggy, snowstorm, thunder and lightning\n\n환경을 묘사할 때는 단순히 어디인지만 말하지 마세요. 그곳의 상태를 함께 묘사해야 합니다.\n\n그냥 city (X) → a neon-lit cyberpunk city, wet reflective streets (O)\n그냥 forest (X) → a dark, foggy forest, tall pine trees, spooky mood (O)'
        },
        conclusion: {
            title: '다음 단계',
            content: '자, 이제 훌륭한 무대(WHERE)가 완성되었습니다. 배우(WHO)도 그 위에서 연기(WHAT)를 하고 있습니다. 이제 이 무대에 조명 감독이 들어올 차례입니다.\n\n"지금은 몇 시이며, 빛은 어디에서 오는가? (WHEN/HOW?)"\n\n다음 챕터에서는 장면의 분위기를 완성하는 마지막 한 방, [조명]에 대해 알아보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch8': {
        title: 'Chapter 8. 요소 6: 조명 (Lighting)',
        koreanTitle: 'WHEN/HOW - 빛이 감정을 만든다',
        prompt: '',
        description: '우리는 배우(WHO), 연기(WHAT), 그리고 무대(WHERE)까지 완벽하게 준비했습니다. 하지만 이 모든 것이 보이게 하려면, 그리고 더 나아가 느껴지게 하려면, 이 장면의 가장 감성적인 요소인 [빛]이 필요합니다.\n\n조명은 단순히 사물을 밝히는 기능이 아닙니다. 조명은 그 자체로 분위기(Mood)이자 스토리입니다.',
        type: 'expert-style',
        keywordType: 'lighting',
        intro: {
            title: '조명 감독이 되세요',
            content: 'WHEN (시간대)은 Golden Hour(골든 아워)의 따뜻함인지, Midday Sun(한낮)의 쨍함인지, Blue Hour(블루 아워)의 차가움인지를 결정합니다.\n\nHOW (방식/기법)는 Soft lighting(부드러운 빛)의 평온함인지, Hard lighting(강한 빛)의 긴장감인지, Rim lighting(윤곽선 빛)의 극적인 효과인지를 결정합니다.\n\n어둠 속에 숨겨진 것은 무엇인지, 빛이 강조하는 것은 무엇인지를 통해 관객의 감정을 조종합니다.'
        },
        styleExamples: [
            {
                title: '조명이 모호할 때',
                subtitle: 'Bad Prompt',
                description: '시간대나 감정을 알 수 없는 평범한 조명입니다.',
                prompt: 'cinematic, a woman sitting by a window --ar 16:9',
                result: '특징 없는 평범한 조명. 시간대나 감정을 알 수 없는, 가장 평균적인 실내 조명',
                keywords: ['normal lighting', 'default light', 'ambient light', 'flat lighting', 'no specific lighting']
            },
            {
                title: '따뜻한 자연광',
                subtitle: 'Good Prompt - WHEN',
                description: '골든 아워의 따뜻한 빛이 평화로운 분위기를 만듭니다.',
                prompt: 'cinematic, a woman sitting by a window, soft golden hour light streaming in, warm tones, peaceful mood --ar 16:9',
                result: '오후, 휴식, 따뜻함, 향수 등의 감정이 느껴짐. 부드러운 그림자와 따뜻한 색감이 장면을 지배함',
                keywords: ['golden hour', 'soft sunlight', 'warm natural light', 'sunset glow', 'morning light']
            },
            {
                title: '차가운 인공광',
                subtitle: 'Good Prompt - HOW',
                description: '네온사인의 차가운 빛이 도시의 고독을 표현합니다.',
                prompt: 'cinematic, a woman sitting by a window, lit only by the blue and pink neon signs outside, dark moody shadows, reflective light on her face --ar 16:9',
                result: '밤, 도시, 고독, 미스터리 등의 감정이 느껴짐. 차가운 색감과 강한 명암 대비가 장면을 지배함',
                keywords: ['neon lights', 'blue hour', 'moonlight', 'candlelight', 'street lights']
            },
            {
                title: '극적인 조명 기법',
                subtitle: 'Good Prompt - Dramatic',
                description: '림 라이트가 실루엣을 만들어 극적인 효과를 냅니다.',
                prompt: 'cinematic, a woman sitting by a window, dramatic rim lighting from behind, silhouette, her face is hidden in shadows, only her outline is visible --ar 16:9',
                result: '익명성, 비밀, 드라마 등의 감정이 느껴짐. 인물의 정체성보다 형태와 분위기를 강조하는 극적인 샷',
                keywords: ['rim lighting', 'back lighting', 'hard shadows', 'chiaroscuro', 'volumetric lighting']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '조명을 설계할 때는 부록의 조명 키워드 사전에서 원하는 무기를 골라보세요.\n\n자연광 (WHEN): Sunrise, Midday harsh sunlight, Golden Hour, Blue Hour, Moonlight\n인공광 (HOW): Neon lights, Candlelight, Studio lights, Street lights, Volumetric lighting\n조명 기법 (HOW): Soft lighting, Hard dramatic shadows, Back lighting, Rim lighting, Chiaroscuro'
        },
        conclusion: {
            title: '다음 단계',
            content: '이제 완벽한 무대(WHERE)에, 완벽한 조명(WHEN/HOW)이 설치되었습니다. 배우(WHO)는 연기(WHAT)를 하고 있습니다.\n\n자, 이제 당신은 촬영 감독이 되어 마지막 결정을 내려야 합니다.\n\n"이 완벽한 장면을 어떤 각도에서 찍을 것인가? (HOW?)"\n\n다음 챕터에서는 장면에 의도를 담는 [카메라 앵글/구도]에 대해 알아보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch9': {
        title: 'Chapter 9. 요소 7: 카메라 앵글/구도 (Camera)',
        koreanTitle: 'HOW - 관점을 설계하다',
        prompt: '',
        description: '우리는 무엇을 볼지 결정했습니다. 이제 아홉 번째 질문, "시청자는 그것을 어떻게 바라보는가?"입니다.\n\n관객이 장면을 인식하는 방식을 결정하는 것, 그것이 바로 카메라 앵글과 구도입니다. 카메라는 관객의 눈입니다.',
        type: 'expert-style',
        keywordType: 'camera',
        intro: {
            title: '카메라는 감정의 언어입니다',
            content: '카메라는 단순히 장면을 비추는 도구가 아니라, 감독이 관객에게 말을 거는 어조(Tone)입니다.\n\n카메라의 높낮이는 캐릭터와 관객 사이의 심리적 관계를 즉각적으로 설정합니다. 구도는 프레임 안에 요소들을 어떻게 배치할 것인가에 대한 계획입니다.\n\n카메라 앵글과 구도는 감독이 관객에게 "이것을 이런 관점으로 봐라"라고 지시하는 가장 강력한 시각적 언어입니다.'
        },
        styleExamples: [
            {
                title: 'Eye-Level (아이 레벨)',
                subtitle: '중립적 시선',
                description: '가장 중립적이고 현실적인 시선입니다. 관객은 피사체와 동등한 입장에서 감정적으로 연결됩니다.',
                prompt: 'cinematic, eye-level medium shot of a woman talking, natural perspective --ar 16:9',
                result: '일상적인 대화 장면처럼 편안하고 자연스러운 느낌. 관객과 캐릭터가 동등한 위치',
                keywords: ['eye-level shot', 'medium shot', 'close-up', 'wide shot', 'full body shot']
            },
            {
                title: 'Low Angle (로우 앵글)',
                subtitle: '권력과 위압감',
                description: '피사체를 강하고, 위압적이며, 중요하게 만듭니다. 영웅이나 악당의 힘을 시각적으로 증폭시킵니다.',
                prompt: 'cinematic, low-angle shot of a towering superhero, looking down at camera, powerful stance --ar 16:9',
                result: '피사체가 거대하고 강력해 보임. 관객이 올려다보는 느낌으로 경외감을 줌',
                keywords: ['low angle', 'worm\'s eye view', 'looking up', 'heroic angle', 'dramatic low shot']
            },
            {
                title: 'High Angle (하이 앵글)',
                subtitle: '취약함과 고립',
                description: '피사체를 약하고, 고립되었으며, 취약하게 만듭니다. 곤경에 처한 주인공의 무력감을 표현합니다.',
                prompt: 'cinematic, high-angle shot of a lost child in a crowd, looking small and vulnerable --ar 16:9',
                result: '피사체가 작고 약해 보임. 관객이 내려다보는 느낌으로 연민이나 우월감을 줌',
                keywords: ['high angle', 'bird\'s eye view', 'overhead shot', 'looking down', 'top-down view']
            },
            {
                title: 'Dutch Angle (더치 앵글)',
                subtitle: '불안과 혼란',
                description: '카메라를 의도적으로 기울여 불안, 긴장, 혼란, 광기를 유발합니다.',
                prompt: 'cinematic, dutch angle shot of a chaotic street fight, tilted camera, disorienting perspective --ar 16:9',
                result: '안정적인 구도를 깨뜨려 관객을 심리적으로 불편하게 만듦. 긴장감과 혼란 표현',
                keywords: ['dutch angle', 'tilted shot', 'canted angle', 'diagonal composition', 'unstable frame']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '카메라 앵글과 구도 키워드:\n\n앵글: Eye-level, Low angle, High angle, Dutch angle, Bird\'s eye view\n샷 크기: Extreme close-up, Close-up, Medium shot, Full shot, Wide shot\n구도: Rule of thirds, Center composition, Leading lines, Symmetrical, Frame within frame\n\nAI에게 이미지를 생성시킬 때, 단순히 무엇을 그려달라고 하는 것과 로우 앵글로 그려달라고 하는 것은 완전히 다른 결과물을 만듭니다. 전자는 정보를 그리지만, 후자는 감정과 의도를 그립니다.'
        },
        conclusion: {
            title: '다음 단계',
            content: '이제 완벽한 카메라 앵글과 구도까지 설정했습니다. 하지만 이 모든 것이 합쳐져도 이미지가 밋밋하거나 흐릿하다면, 관객의 시선을 사로잡을 수 없습니다.\n\n다음 챕터에서는 이미지의 첫인상과 신뢰도를 결정하는 마지막 마감재, [색감 및 품질]에 대해 알아보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch10': {
        title: 'Chapter 10. 요소 8: 색감 및 품질/효과 (Color & Quality)',
        koreanTitle: 'HOW - 마지막 마감재',
        prompt: '',
        description: '지금까지 우리는 7가지 요소를 통해 장면의 뼈대와 형태를 완성했습니다. 하지만 이 모든 것이 합쳐져도 이미지가 밋밋하거나 흐릿하다면, 관객의 시선을 사로잡을 수 없습니다.\n\n이제 여덟 번째 마지막 요소, "이 장면을 어떤 톤으로 채색하고, 얼마나 선명하게 완성할 것인가?"입니다.',
        type: 'expert-style',
        keywordType: 'quality',
        intro: {
            title: '색감과 품질은 첫인상을 결정합니다',
            content: '색감(Color Tones)과 품질(Quality)은 이미지의 첫인상과 신뢰도를 결정하는 강력한 마감재입니다.\n\n색상의 온도(Warm vs Cool), 채도(Vibrant vs Muted), 그리고 해상도와 디테일이 이미지를 작품과 낙서로 가르는 기준이 됩니다.\n\nAI 아트 디렉터는 이 마지막 10%의 마감을 절대 소홀히 하지 않습니다.'
        },
        styleExamples: [
            {
                title: 'Warm Tones (따뜻한 톤)',
                subtitle: '편안함과 향수',
                description: '노란색, 주황색, 붉은색 기운이 편안함, 행복, 에너지, 향수를 표현합니다.',
                prompt: 'cinematic, a cozy cafe interior, warm color palette, golden tones, inviting atmosphere, 8K, highly detailed --ar 16:9',
                result: '따뜻하고 편안한 느낌. 골든아워 조명과 잘 어울리며 빈티지하고 감성적인 분위기',
                keywords: ['warm tones', 'golden palette', 'orange hues', 'cozy colors', 'vintage warm']
            },
            {
                title: 'Cool Tones (차가운 톤)',
                subtitle: '신비감과 미래',
                description: '파란색, 녹색, 보라색 기운이 차분함, 신비감, 슬픔, 미래적인 느낌을 표현합니다.',
                prompt: 'cinematic, a futuristic city at night, cool toned moody lighting, blue and purple hues, cyberpunk atmosphere, 8K, ultra detailed --ar 16:9',
                result: '차갑고 신비로운 느낌. 야간이나 안개 낀 장면에 효과적이며 SF적인 분위기',
                keywords: ['cool tones', 'blue palette', 'cold colors', 'moody blues', 'cyberpunk colors']
            },
            {
                title: 'Vibrant Colors (선명한 색상)',
                subtitle: '활기와 강렬함',
                description: '색이 밝고 쨍합니다. 활기, 기쁨, 판타지, 강렬함을 전달합니다.',
                prompt: 'cinematic, a magical fantasy forest, vibrant and colorful, saturated colors, vivid hues, dreamlike, 8K, insane details --ar 16:9',
                result: '시선을 즉각적으로 사로잡는 강렬한 색감. 판타지와 동화 같은 분위기',
                keywords: ['vibrant colors', 'saturated', 'vivid', 'bright colors', 'colorful']
            },
            {
                title: 'High Quality (최고 품질)',
                subtitle: '전문가급 마감',
                description: '해상도와 디테일을 극대화하여 전문가 수준의 완성도를 만듭니다.',
                prompt: 'cinematic, a portrait of a warrior, 8K resolution, ultra realistic, hyper detailed, sharp focus, professionally shot, award-winning photography --ar 16:9',
                result: '피부의 질감, 옷의 재봉선, 배경의 작은 소품까지 살아나는 현실감과 완성도',
                keywords: ['8K', 'ultra realistic', 'hyper detailed', 'sharp focus', 'professionally shot']
            }
        ],
        tip: {
            title: 'Art Director\'s Tip',
            content: '색감과 품질 키워드:\n\n색상 온도: Warm tones, Cool tones, Neutral tones\n색상 채도: Vibrant colors, Muted colors, Desaturated, Pastel colors\n특수 색감: Monochromatic, Black and white, Sepia tone\n품질: 8K, Ultra realistic, Hyper detailed, Sharp focus, Insane details\n전문가급: Professionally shot, Award-winning photography, Cinematic quality\n\n7가지 요소로 아무리 완벽한 장면을 설계했더라도, 마무리가 부족하면 습작처럼 보입니다. 색감은 당신의 의도된 분위기를 장면에 코팅하는 작업이며, 품질 키워드는 그 코팅을 매끄럽고 선명하게 다듬는 폴리싱 작업입니다.'
        },
        conclusion: {
            title: '8요소 프레임워크 완성',
            content: '축하합니다! 이제 당신은 8요소 프레임워크의 모든 요소를 마스터했습니다.\n\n1. 스타일 (Style) - 어떤 느낌인가?\n2. 파라미터 (Parameters) - 어떤 비율인가?\n3. 주제/피사체 (Subject) - 누가 주인공인가?\n4. 액션/포즈 (Action) - 무엇을 하고 있는가?\n5. 환경/배경 (Environment) - 어디인가?\n6. 조명 (Lighting) - 언제, 어떤 빛인가?\n7. 카메라 앵글 (Camera) - 어떤 각도인가?\n8. 색감/품질 (Color/Quality) - 어떤 마감인가?\n\n다음 챕터에서는 이 모든 요소를 조합하는 방법을 배워보겠습니다.'
        },
        usage: [],
        images: []
    },

    'expert-ch11': {
        title: 'Chapter 11. 최종 조합: 프롬프트 조립하기',
        koreanTitle: '8요소를 하나로 묶는 황금 순서',
        prompt: '',
        description: '지금까지 우리는 8개의 강력한 시각적 무기(요소)를 각각 배웠습니다. 하지만 이 무기들을 그저 바닥에 늘어놓는다고 해서 전투에서 승리할 수는 없습니다.\n\n이 요소들을 어떤 순서로, 어떻게 결합하느냐에 따라 AI는 당신을 명확한 지시를 내리는 감독으로 인식할 수도, 혹은 횡설수설하는 초보자로 인식할 수도 있습니다.',
        type: 'expert',
        parts: [
            {
                title: '행동 원칙 1: AI는 영어로 생각한다',
                content: '가장 중요하고 기본적인 원칙입니다. 미드저니를 포함한 대부분의 S급 이미지 AI 모델은 방대한 영어 데이터를 기반으로 학습되었습니다.\n\n물론 한국어를 입력해도 AI가 번역해서 이해하려 노력하지만, 그 과정에서 우리가 의도한 시각적 뉘앙스가 손실됩니다.\n\nAI 아트 디렉터의 공식 언어는 영어입니다. 우리가 배운 8요소의 키워드들은 모두 영어로 조합되어야 그 힘을 100% 발휘합니다.'
            },
            {
                title: '행동 원칙 2: 코드 블록으로 프롬프트를 분리하라',
                content: '우리가 프롬프트를 작성하고 관리할 때, 프롬프트 자체를 명확하게 구분하는 습관은 매우 중요합니다.\n\n가장 좋은 방법은 프롬프트를 코드 블록으로 감싸는 것입니다. 이 간단한 습관은 프롬프트의 시작과 끝을 명확히 하여, 나중에 수정하거나 다른 사람과 공유할 때 혼란을 막아줍니다.'
            },
            {
                title: '프롬프트 조립의 황금 순서',
                content: 'AI는 당신이 가장 먼저 말한 것을 가장 중요하게 받아들입니다.\n\n따라서 우리는 가장 중요한 것부터 순서대로 배치하는 전략을 사용합니다:\n\n[1단계: 무대 설정]\n[스타일 + 파라미터]: 전체 톤 앤 매너와 화면 비율을 가장 먼저 선언\n\n[2단계: 주인공 배치]\n[주제 + 액션/포즈]: 무대 위에 누가 무엇을 하는지 명확히 올림\n\n[3단계: 연출]\n[환경 + 조명 + 앵글]: 주인공을 둘러싼 배경과 빛, 그리고 시점을 지시\n\n[4단계: 후반 작업]\n[색감 + 품질]: 마지막으로 색감과 품질 키워드로 이미지를 다듬음'
            },
            {
                title: 'Before vs After: 조립의 힘',
                content: 'Before (나쁜 예: 단순 나열):\nman, cigarette, rain, street, 8K, neon, detective, 16:9, cinematic, low-angle\n\nAI는 무엇을 메인으로 잡아야 할지 혼란스러워하며, 비나 네온이 주제가 된 엉뚱한 이미지를 생성할 수 있습니다.\n\nAfter (좋은 예: 아트 디렉터의 프롬프트):\nCinematic, photorealistic, a grizzled detective lighting a cigarette, on a rain-slicked neon-lit street, dramatic rim lighting from a streetlamp, low-angle shot, cool tones, ultra-detailed, 8K --ar 16:9 --v 7\n\nAI는 이 프롬프트를 시네마틱한 사진으로, 탐정을 주인공으로 하여, 비 오는 네온 거리를 배경으로, 로우 앵글로 찍으라는 명확한 작업 지시서로 이해합니다.'
            }
        ],
        usage: [],
        images: []
    },

    'expert-ch12': {
        title: 'Chapter 12. 실전 워크샵: Case Study',
        koreanTitle: '시나리오로 프롬프트 만들기',
        prompt: '',
        description: '지금까지 우리는 8가지 요소를 이론적으로 배우고, 그것을 조립하는 방법까지 익혔습니다. 이론은 완벽합니다.\n\n이제 AI 아트 디렉터의 사고방식으로, 머릿속에만 있던 모호한 아이디어를 전문가급 이미지로 변환하는 실제 과정을 낱낱이 보여드리겠습니다.',
        type: 'expert',
        parts: [
            {
                title: '사례 1: 비 오는 밤, 네온사인 골목의 탐정',
                content: 'Before (나쁜 예):\na detective in a neon alley on a rainy night\n\n예상 문제: 키워드 수프 상태입니다. AI는 탐정, 골목, 비, 네온사인 중 무엇이 중요한지 모릅니다. 탐정이 작게 나오거나, 엉뚱한 스타일이 나올 수 있습니다. 감정이나 의도가 없습니다.'
            },
            {
                title: '8요소 프레임워크 적용 과정',
                content: '1단계: 스타일과 파라미터\n- 필름 느와르와 사이버펑크의 느낌\n- Cinematic, Photorealistic, Noir style, Moody\n- --ar 16:9\n\n2단계: 주제와 액션\n- a grizzled detective, wearing a classic trench coat and fedora\n- thoughtfully smoking a cigarette, smoke curling in the air\n\n3단계: 환경과 조명과 앵글\n- in a narrow, dark alley, rain-slicked pavement\n- reflections of bright neon signs (red and blue)\n- Dramatic rim lighting, high contrast, deep shadows\n- Slightly low-angle shot, Medium shot\n\n4단계: 색감과 품질\n- Cool tones, Ultra detailed, 8K, sharp focus on the detective\'s face'
            },
            {
                title: '최종 완성 프롬프트',
                content: 'After (좋은 예):\n\nCinematic, photorealistic, Noir style, a grizzled detective in a trench coat and fedora, thoughtfully smoking a cigarette, in a narrow dark alley, rain-slicked pavement with reflections of bright red and blue neon signs, dramatic rim lighting, high contrast, slightly low-angle medium shot, cool tones, ultra detailed, 8K --ar 16:9 --v 7\n\n결과: Before 프롬프트는 AI에게 묘사를 던졌습니다. After 프롬프트는 AI에게 감독의 지시서를 전달했습니다.'
            },
            {
                title: '사례 2: 마법 도서관의 현자',
                content: 'Before (나쁜 예):\na wise sage in a magic library\n\n예상 문제: 너무 일반적입니다. AI는 간달프나 덤블도어의 아류작을, 배경은 호그와트의 아류작을 생성할 확률이 99%입니다. 독창성이 없습니다.'
            },
            {
                title: '8요소 프레임워크 적용 과정 2',
                content: '1단계: 스타일과 파라미터\n- Digital painting, Fantasy art, Epic, Mystical mood\n- --ar 1:1\n\n2단계: 주제와 액션\n- an ancient wise sage, long white beard\n- wearing intricate blue and gold robes\n- reading a giant, ancient glowing book\n- one hand raised, casting a small magic orb of light\n\n3단계: 환경과 조명과 앵글\n- a vast, grand library, floor-to-ceiling bookshelves\n- floating books, a large stained-glass window in the background\n- Magical glow from the book illuminating his face\n- Close-up shot, eye-level\n\n4단계: 색감과 품질\n- Deep blues and rich golds, Warm tones\n- Highly detailed, intricate details'
            },
            {
                title: '최종 완성 프롬프트 2',
                content: 'After (좋은 예):\n\nDigital painting, fantasy art, mystical mood, a close-up shot of an ancient wise sage with a long white beard, wearing intricate blue and gold robes, reading a giant ancient glowing book, one hand casting a small magic orb of light, in a vast library with floating books, magical glow from the book illuminating his face, warm tones, highly detailed --ar 1:1 --v 7\n\n결과: Before는 아이디어를 검색했습니다. After는 이야기를 주문했습니다. 빛이 어디서 오는지, 현자가 무엇을 하는지 등을 명확히 지시함으로써, AI는 훨씬 더 역동적이고 독창적인 작품을 만들어냅니다.'
            }
        ],
        usage: [],
        images: []
    },

    'expert-ch13': {
        title: 'Chapter 13. AI 아트 디렉터의 키워드 사전',
        koreanTitle: 'Ver 2.0 - 실전 키워드 무기고',
        prompt: '',
        description: '지금까지 8가지 요소를 열심히 배웠으니, 이제 실전에서 바로 써먹을 수 있는 키워드 무기고를 장착할 시간입니다!\n\n이 챕터는 여러분이 프롬프트를 만들 때 바로바로 찾아볼 수 있는 AI 아트 디렉터의 비밀노트입니다.\n\n아래에서 원하는 키워드를 선택하면 자동으로 프롬프트가 조합됩니다.',
        type: 'expert-dictionary',
        keywordCategories: [
            {
                title: '요소 1: 스타일',
                categories: [
                    {
                        name: '사진 기반',
                        keywords: [
                            { en: 'Photorealistic', ko: '사진처럼 사실적인' },
                            { en: 'Cinematic', ko: '영화 같은' },
                            { en: 'Documentary', ko: '다큐멘터리' },
                            { en: 'Portrait', ko: '인물 사진' },
                            { en: 'Landscape', ko: '풍경 사진' },
                            { en: 'Vintage', ko: '빈티지' },
                            { en: 'Lo-Fi', ko: '로파이' },
                            { en: 'Noir', ko: '느와르' }
                        ]
                    },
                    {
                        name: '일러스트 & 아트',
                        keywords: [
                            { en: 'Digital Painting', ko: '디지털 페인팅' },
                            { en: 'Concept Art', ko: '컨셉 아트' },
                            { en: 'Anime', ko: '애니메이션' },
                            { en: 'Manga', ko: '만화' },
                            { en: 'Cartoon', ko: '카툰' },
                            { en: 'Fantasy Illustration', ko: '판타지 일러스트' }
                        ]
                    },
                    {
                        name: '분위기',
                        keywords: [
                            { en: 'Moody', ko: '분위기 있는' },
                            { en: 'Mystical', ko: '신비로운' },
                            { en: 'Dreamy', ko: '꿈꾸는 듯한' },
                            { en: 'Epic', ko: '웅장한' },
                            { en: 'Cozy', ko: '아늑한' }
                        ]
                    }
                ]
            },
            {
                title: '요소 2: 파라미터',
                categories: [
                    {
                        name: '화면 비율',
                        keywords: [
                            { en: '--ar 1:1', ko: '정사각형' },
                            { en: '--ar 16:9', ko: '가로 와이드' },
                            { en: '--ar 9:16', ko: '세로' },
                            { en: '--ar 4:3', ko: '표준' },
                            { en: '--ar 21:9', ko: '시네마스코프' }
                        ]
                    },
                    {
                        name: '기타 파라미터',
                        keywords: [
                            { en: '--v 6', ko: '버전 6' },
                            { en: '--style raw', ko: '자연스러운 스타일' },
                            { en: '--s 750', ko: '스타일 강도' }
                        ]
                    }
                ]
            },
            {
                title: '요소 3: 주제/피사체',
                categories: [
                    {
                        name: '인물',
                        keywords: [
                            { en: 'a man', ko: '남자' },
                            { en: 'a woman', ko: '여자' },
                            { en: 'a child', ko: '아이' },
                            { en: 'a detective', ko: '탐정' },
                            { en: 'a knight', ko: '기사' },
                            { en: 'a wizard', ko: '마법사' }
                        ]
                    },
                    {
                        name: '동물',
                        keywords: [
                            { en: 'a cat', ko: '고양이' },
                            { en: 'a dog', ko: '개' },
                            { en: 'a dragon', ko: '용' },
                            { en: 'a butterfly', ko: '나비' }
                        ]
                    }
                ]
            },
            {
                title: '요소 4: 액션/포즈',
                categories: [
                    {
                        name: '동작',
                        keywords: [
                            { en: 'standing', ko: '서 있는' },
                            { en: 'sitting', ko: '앉아 있는' },
                            { en: 'running', ko: '달리는' },
                            { en: 'jumping', ko: '점프하는' },
                            { en: 'dancing', ko: '춤추는' },
                            { en: 'fighting', ko: '싸우는' }
                        ]
                    }
                ]
            },
            {
                title: '요소 5: 환경/배경',
                categories: [
                    {
                        name: '장소',
                        keywords: [
                            { en: 'in a forest', ko: '숲 속에서' },
                            { en: 'in a city', ko: '도시에서' },
                            { en: 'on a beach', ko: '해변에서' },
                            { en: 'in a library', ko: '도서관에서' },
                            { en: 'in outer space', ko: '우주에서' }
                        ]
                    },
                    {
                        name: '날씨',
                        keywords: [
                            { en: 'sunny', ko: '맑은' },
                            { en: 'rainy', ko: '비 오는' },
                            { en: 'foggy', ko: '안개 낀' },
                            { en: 'snowy', ko: '눈 오는' }
                        ]
                    }
                ]
            },
            {
                title: '요소 6: 조명',
                categories: [
                    {
                        name: '시간대',
                        keywords: [
                            { en: 'golden hour', ko: '골든 아워' },
                            { en: 'blue hour', ko: '블루 아워' },
                            { en: 'midday sun', ko: '한낮' },
                            { en: 'night', ko: '밤' }
                        ]
                    },
                    {
                        name: '조명 스타일',
                        keywords: [
                            { en: 'dramatic lighting', ko: '극적인 조명' },
                            { en: 'soft lighting', ko: '부드러운 조명' },
                            { en: 'rim lighting', ko: '윤곽광' },
                            { en: 'neon lights', ko: '네온 조명' }
                        ]
                    }
                ]
            },
            {
                title: '요소 7: 카메라 앵글',
                categories: [
                    {
                        name: '앵글',
                        keywords: [
                            { en: 'eye-level shot', ko: '눈높이' },
                            { en: 'low-angle shot', ko: '로우 앵글' },
                            { en: 'high-angle shot', ko: '하이 앵글' },
                            { en: 'bird\'s-eye view', ko: '조감도' }
                        ]
                    },
                    {
                        name: '샷 크기',
                        keywords: [
                            { en: 'close-up', ko: '클로즈업' },
                            { en: 'medium shot', ko: '미디엄 샷' },
                            { en: 'wide shot', ko: '와이드 샷' }
                        ]
                    }
                ]
            },
            {
                title: '요소 8: 색감 및 품질',
                categories: [
                    {
                        name: '색감',
                        keywords: [
                            { en: 'warm tones', ko: '따뜻한 톤' },
                            { en: 'cool tones', ko: '차가운 톤' },
                            { en: 'vibrant colors', ko: '선명한 색상' },
                            { en: 'black and white', ko: '흑백' }
                        ]
                    },
                    {
                        name: '품질',
                        keywords: [
                            { en: '8K', ko: '8K 해상도' },
                            { en: 'ultra detailed', ko: '초고해상도' },
                            { en: 'sharp focus', ko: '선명한 초점' },
                            { en: 'bokeh', ko: '보케 효과' }
                        ]
                    }
                ]
            }
        ],
        usage: [],
        images: []
    }

};
