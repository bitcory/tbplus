// Camera Guide Application

// Global variables
let currentData = null;
let contentKey = null;
let expertCourseUnlocked = false; // 전문가 과정 접근 권한
const EXPERT_PASSWORD = '1004'; // 전문가 과정 비밀번호

// Toggle Mobile Menu
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const sidebar = document.querySelector('.sidebar');
    const menuToggle = document.querySelector('.mobile-menu-toggle');

    if (sidebar && menuToggle) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target) && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('App initialized');

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Hide pagination by default
    const pagination = document.getElementById('pagination');
    if (pagination) {
        pagination.style.display = 'none';
    }

    // Hide all major categories by default
    const imageCategory = document.getElementById('image-category');
    const videoCategory = document.getElementById('video-category');
    const practiceCategory = document.getElementById('practice-category');

    if (imageCategory) {
        imageCategory.style.display = 'none';
    }

    if (videoCategory) {
        videoCategory.style.display = 'none';
    }

    if (practiceCategory) {
        practiceCategory.style.display = 'none';
    }

    // Reset all chevron icons to default position
    const imageCategoryIcon = document.getElementById('image-category-icon');
    const videoCategoryIcon = document.getElementById('video-category-icon');
    const practiceCategoryIcon = document.getElementById('practice-category-icon');

    if (imageCategoryIcon) {
        imageCategoryIcon.style.transform = 'rotate(0deg)';
    }

    if (videoCategoryIcon) {
        videoCategoryIcon.style.transform = 'rotate(0deg)';
    }

    if (practiceCategoryIcon) {
        practiceCategoryIcon.style.transform = 'rotate(0deg)';
    }

    // Add click event to content area to close all dropdowns
    const contentArea = document.querySelector('.content');
    if (contentArea) {
        contentArea.addEventListener('click', closeAllDropdowns);
    }

    // Prevent sidebar clicks from closing dropdowns
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
});

// Close all dropdowns function
function closeAllDropdowns() {
    // Close major categories
    const imageCategory = document.getElementById('image-category');
    const videoCategory = document.getElementById('video-category');
    const practiceCategory = document.getElementById('practice-category');
    const imageCategoryIcon = document.getElementById('image-category-icon');
    const videoCategoryIcon = document.getElementById('video-category-icon');
    const practiceCategoryIcon = document.getElementById('practice-category-icon');

    if (imageCategory && imageCategory.style.display === 'block') {
        imageCategory.style.display = 'none';
        if (imageCategoryIcon) imageCategoryIcon.style.transform = 'rotate(0)';
    }

    if (videoCategory && videoCategory.style.display === 'block') {
        videoCategory.style.display = 'none';
        if (videoCategoryIcon) videoCategoryIcon.style.transform = 'rotate(0)';
    }

    if (practiceCategory && practiceCategory.style.display === 'block') {
        practiceCategory.style.display = 'none';
        if (practiceCategoryIcon) practiceCategoryIcon.style.transform = 'rotate(0)';
    }

    // Close all sections
    const allSectionItems = document.querySelectorAll('[id$="-items"]');
    const allSectionChevrons = document.querySelectorAll('[id$="-chevron"]');

    allSectionItems.forEach(item => {
        if (item.style.display === 'block') {
            item.style.display = 'none';
        }
    });

    allSectionChevrons.forEach(chevron => {
        chevron.style.transform = 'rotate(0)';
    });

    // Close all submenus
    const allSubmenus = document.querySelectorAll('.submenu-items');
    const allSubmenuIcons = document.querySelectorAll('[id$="-submenu-icon"]');

    allSubmenus.forEach(submenu => {
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
        }
    });

    allSubmenuIcons.forEach(icon => {
        icon.style.transform = 'rotate(0)';
    });
}

// Toggle Major Category
function toggleMajorCategory(categoryId, event) {
    if (event) event.stopPropagation();
    console.log('Toggling major category:', categoryId);

    // Check if this is expert category and needs password
    if (categoryId === 'expert-category' && !expertCourseUnlocked) {
        showExpertPasswordModal();
        return;
    }

    const category = document.getElementById(categoryId);
    const icon = document.getElementById(categoryId + '-icon');

    if (category) {
        if (category.style.display === 'none' || !category.style.display) {
            category.style.display = 'block';
            if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
            category.style.display = 'none';
            if (icon) icon.style.transform = 'rotate(0)';
        }
    }
}

// Toggle Section
function toggleSection(sectionId, event) {
    if (event) event.stopPropagation();
    console.log('Toggling section:', sectionId);
    const items = document.getElementById(sectionId + '-items');
    const chevron = document.getElementById(sectionId + '-chevron');

    if (items) {
        if (items.style.display === 'none' || !items.style.display) {
            items.style.display = 'block';
            if (chevron) chevron.style.transform = 'rotate(180deg)';
        } else {
            items.style.display = 'none';
            if (chevron) chevron.style.transform = 'rotate(0)';
        }
    }
}

// Toggle Submenu
function toggleSubmenu(submenuId, event) {
    if (event) event.stopPropagation();
    console.log('Toggling submenu:', submenuId);
    const submenu = document.getElementById(submenuId);
    const icon = document.getElementById(submenuId + '-icon');

    if (submenu) {
        if (submenu.style.display === 'none' || !submenu.style.display) {
            submenu.style.display = 'block';
            if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
            submenu.style.display = 'none';
            if (icon) icon.style.transform = 'rotate(0)';
        }
    }
}

// Show Content
function showContent(contentId) {
    console.log('Showing content:', contentId);
    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    // Store the content key globally for use in displayContent
    contentKey = contentId;

    // Check if content exists in contentData or cameraData
    if (typeof contentData !== 'undefined' && contentData[contentId]) {
        currentData = contentData[contentId];
        displayContent();
    } else if (typeof cameraData !== 'undefined' && cameraData[contentId]) {
        currentData = cameraData[contentId];
        // Special handling for banana-magic content
        if (contentId === 'banana-magic') {
            displayBananaContent();
        } else {
            displayContent();
        }
    } else {
        // Show error message
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="content-not-found">
                    <h3>컨텐츠를 찾을 수 없습니다</h3>
                    <p>요청하신 컨텐츠 "${contentId}"가 존재하지 않거나 아직 준비중입니다.</p>
                </div>
            `;
        }

        if (pagination) {
            pagination.style.display = 'none';
        }

        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Display Content
function displayContent() {
    if (!currentData) return;

    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    if (!contentArea) return;

    // Check if it's a tool type (AIFI tool)
    if (currentData.type === 'tool') {
        displayAIFITool();
        return;
    }

    // Check if it's a reviews type (강의후기)
    if (currentData.type === 'reviews') {
        displayReviewsContent();
        return;
    }

    // Check if it's a practice type (실습과제)
    if (currentData.type === 'practice') {
        displayPracticeContent();
        return;
    }

    // Check if it's a tutorial type
    if (currentData.type === 'tutorial' && currentData.parts) {
        displayTutorialContent();
        return;
    }

    // Check if it's an expert type
    if (currentData.type === 'expert' && currentData.parts) {
        displayExpertContent();
        return;
    }

    // Check if it's an expert-style type (Chapter 3)
    if (currentData.type === 'expert-style') {
        displayExpertStyleContent();
        return;
    }

    // Check if it's an expert-dictionary type (Chapter 13)
    if (currentData.type === 'expert-dictionary') {
        displayKeywordDictionary();
        return;
    }

    // Special layout for hairstyles
    if (contentKey === 'hairstyles' && (currentData.womanHairstyles || currentData.manHairstyles)) {
        const currentTab = currentData.currentTab || 'woman';
        const currentHairstyles = currentTab === 'woman' ? currentData.womanHairstyles : currentData.manHairstyles;
        const promptPrefix = currentTab === 'woman' ? 'A beautiful Korean actress with' : 'Korean man with';
        const promptSuffix = currentTab === 'woman' ? 'hair style with blonde color' : 'haircut';

        let html = `
            <div class="content-container hairstyle-container">
                <div class="content-header">
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
                </div>

                <!-- Tabs -->
                <div class="hairstyle-tabs" style="display: flex; gap: 10px; margin-bottom: 20px;">
                    <button class="hairstyle-tab ${currentTab === 'woman' ? 'active' : ''}" onclick="switchHairstyleTab('woman')">
                        <i data-lucide="user" style="width: 16px; height: 16px; margin-right: 8px;"></i>
                        WOMAN
                    </button>
                    <button class="hairstyle-tab ${currentTab === 'man' ? 'active' : ''}" onclick="switchHairstyleTab('man')">
                        <i data-lucide="user-check" style="width: 16px; height: 16px; margin-right: 8px;"></i>
                        MAN
                    </button>
                </div>

                <!-- Prompt Preview Section -->
                <div class="hairstyle-prompt-preview">
                    <div class="prompt-preview-text" id="hairstyle-prompt">
                        ${promptPrefix} { <span class="highlight-keyword">STYLE</span> } <span class="highlight-hair">${promptSuffix}</span>
                    </div>
                    <button class="copy-prompt-btn" onclick="copyHairstylePrompt()">
                        <i data-lucide="copy" style="width: 16px; height: 16px; margin-right: 5px;"></i>
                        복사하기
                    </button>
                </div>

                <!-- Description -->
                <div class="content-section-box">
                    <p class="section-text">${currentData.description}</p>
                </div>

                <!-- Hairstyles Grid -->
                <div class="hairstyles-grid">
                    ${currentHairstyles.map((style, index) => `
                        <div class="hairstyle-item" onclick="selectHairstyle('${style.name}', '${style.description}', '${currentTab}')">
                            <div class="hairstyle-image">
                                <img src="${style.image}" alt="${style.name}">
                            </div>
                            <div class="hairstyle-label">
                                <span class="style-name">${style.name}</span>
                                <span class="style-korean">${style.koreanName}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>

            </div>
        `;

        contentArea.innerHTML = html;
        if (pagination) {
            pagination.style.display = 'none';
        }

        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        return;
    }

    // Special layout for VEO prompts
    if (currentData.type === 'veo-prompts' && currentData.prompts) {
        let html = `
            <div class="content-container">
                <div class="content-header">
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
                </div>

                <div class="content-section-box" style="margin-bottom: 30px;">
                    <p class="section-text">${currentData.description}</p>
                </div>

                <div class="veo-prompts-grid">
                    ${currentData.prompts.map((prompt, index) => `
                        <div class="veo-prompt-card">
                            <div class="prompt-header">
                                <h3 class="prompt-title">${prompt.title}</h3>
                                <button class="copy-prompt-btn" onclick="copyVeoPrompt(${index})" title="프롬프트 복사">
                                    <i data-lucide="copy"></i>
                                    <span>복사</span>
                                </button>
                            </div>
                            <div class="prompt-content">
                                <pre class="prompt-text">${prompt.content.substring(0, 400)}...</pre>
                            </div>
                            <div class="prompt-actions">
                                <button class="view-full-prompt-btn" onclick="viewFullPrompt(${index})">
                                    <i data-lucide="eye"></i>
                                    전체 보기
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        contentArea.innerHTML = html;
        if (pagination) {
            pagination.style.display = 'none';
        }

        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        return;
    }

    // Special layout for team assignments
    if (currentData.type === 'team-videos' && currentData.teams) {
        let html = `
            <div class="content-container">
                <div class="content-header">
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
                </div>

                <div class="content-section-box" style="margin-bottom: 30px;">
                    <p class="section-text">${currentData.description}</p>
                </div>

                <div class="team-tabs">
                    <div class="tab-buttons">
                        ${Object.keys(currentData.teams).filter(key => key !== 'team3').map((teamKey, index) => `
                            <button class="tab-button ${index === 0 ? 'active' : ''}"
                                    onclick="switchTeamTab('${teamKey}')"
                                    data-team="${teamKey}">
                                ${currentData.teams[teamKey].name}
                            </button>
                        `).join('')}
                    </div>

                    ${Object.keys(currentData.teams).filter(key => key !== 'team3').map((teamKey, index) => `
                        <div class="team-content ${index === 0 ? 'active' : ''}" id="team-${teamKey}" data-team="${teamKey}">
                            <div class="videos-grid">
                                ${currentData.teams[teamKey].videos.map((video, videoIndex) => `
                                    <div class="video-card">
                                        <div class="video-thumbnail" onclick="openVideoModal('${video.url || ''}')">
                                            ${video.url && (video.url.includes('.mp4') || video.url.includes('dropbox.com')) ? `
                                                <video src="${video.url}" muted></video>
                                                <div class="video-play-overlay">
                                                    <i data-lucide="play-circle"></i>
                                                </div>
                                            ` : video.url ? `
                                                <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
                                                <div class="video-play-overlay">
                                                    <i data-lucide="play-circle"></i>
                                                </div>
                                            ` : `
                                                <img src="${video.thumbnail}" alt="${video.title}">
                                                <div class="video-play-overlay">
                                                    <i data-lucide="play-circle"></i>
                                                </div>
                                            `}
                                        </div>
                                        <div class="video-info">
                                            <h4 class="video-title">${video.title}</h4>
                                            <p class="video-description">${video.description}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        contentArea.innerHTML = html;
        if (pagination) {
            pagination.style.display = 'none';
        }

        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        return;
    }

    // Special layout for framework stages
    if (contentKey === 'framework-stages' && currentData.stages) {
        let html = `
            <div class="content-container">
                <div class="content-header">
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
                </div>

                <div class="content-section-box" style="margin-bottom: 30px;">
                    <p class="section-text">${currentData.description}</p>
                </div>

                <div class="stages-grid">
                    ${currentData.stages.map((stage) => `
                        <div class="stage-card">
                            <div class="stage-content">
                                <h3 class="stage-title">${stage.title}</h3>
                                <p class="stage-subtitle">${stage.subtitle}</p>
                                <p class="stage-description">${stage.description}</p>
                            </div>
                            <a href="${stage.url}" target="_blank" class="stage-link-button">
                                <i data-lucide="external-link"></i>
                                <span>바로가기</span>
                            </a>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        contentArea.innerHTML = html;
        if (pagination) {
            pagination.style.display = 'none';
        }

        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        return;
    }

    // Special layout for instructor introduction
    if (currentData.instructorInfo) {
        let html = `
            <div class="content-container">
                <div class="content-header">
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
                </div>

                <div class="instructor-layout">
                    <div class="instructor-photo">
                        <img src="${currentData.instructorInfo.image}" alt="${currentData.instructorInfo.name}" style="max-width: 250px; width: 100%; height: auto;">
                    </div>
                    <div class="instructor-details">
                        <div class="instructor-info-item">
                            <span class="info-label">이름:</span>
                            <span class="info-value">${currentData.instructorInfo.name}</span>
                        </div>
                        <div class="instructor-info-item">
                            <span class="info-label">소속:</span>
                            <span class="info-value">${currentData.instructorInfo.position}</span>
                        </div>
                        ${currentData.instructorInfo.company.map(comp => `
                            <div class="instructor-info-item company">
                                <span class="info-value">${comp}</span>
                            </div>
                        `).join('')}
                        <div class="instructor-info-item" style="margin-top: 15px;">
                            <span class="info-label">Email:</span>
                            <span class="info-value">${currentData.instructorInfo.email}</span>
                        </div>

                        <div class="instructor-experience">
                            <h4>주요 활동</h4>
                            <ul>
                                ${currentData.usage.map(exp => `<li>${exp}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;

        contentArea.innerHTML = html;
        if (pagination) {
            pagination.style.display = 'none';
        }

        // Re-initialize icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        return;
    }

    let html = `
        <div class="content-container">
            <div class="content-header">
                <h2 class="content-title">${currentData.title || ''}</h2>
                ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
            </div>

            <div class="content-sections-wrapper">
                <!-- 설명 및 프롬프트 섹션 -->
                <div class="content-section-box" style="grid-column: 1 / -1;">
                    <h3 class="section-title">설명 및 프롬프트</h3>
                    ${currentData.description ? `
                        <div class="description-area">
                            <p class="section-text">${currentData.description.replace(/\n/g, '<br>')}</p>
                        </div>
                    ` : ''}
                    ${currentData.prompt ? `
                        <div class="prompt-area">
                            <h4 class="subsection-title">프롬프트</h4>
                            <div class="prompt-box">
                                <code>${currentData.prompt}</code>
                                <button class="copy-btn" onclick="copyToClipboard('${currentData.prompt.replace(/'/g, "\\'")}')">
                                    복사
                                </button>
                            </div>
                        </div>
                    ` : ''}
                    ${currentData.usage && currentData.usage.length > 0 ? `
                        <div class="usage-area" style="margin-top: 20px;">
                            <div class="usage-content">
                                ${currentData.usage.map(item => {
                                    if (item === '') {
                                        return '<br>';
                                    } else if (item.startsWith('📜') || item.startsWith('🏆')) {
                                        return `<h4 style="color: #ff6b6b; margin-top: 20px; margin-bottom: 10px; font-size: 18px;">${item}</h4>`;
                                    } else if (item.startsWith('▶')) {
                                        return `<h5 style="color: #4CAF50; margin-top: 15px; margin-bottom: 10px; font-size: 16px;">${item}</h5>`;
                                    } else if (item.startsWith('•')) {
                                        return `<p style="margin-left: 20px; color: #ccc; line-height: 1.8;">${item}</p>`;
                                    } else if (item.startsWith('[🐝')) {
                                        return `<div style="background: rgba(255, 107, 107, 0.1); padding: 15px; border-left: 3px solid #ff6b6b; margin: 10px 0; border-radius: 5px;"><p style="color: #fff; line-height: 1.8;">${item}</p></div>`;
                                    } else if (item.startsWith('(')) {
                                        return `<div style="background: rgba(76, 175, 80, 0.1); padding: 15px; border-left: 3px solid #4CAF50; margin: 10px 0; border-radius: 5px;"><p style="color: #4CAF50; font-weight: 600; line-height: 1.8;">${item}</p></div>`;
                                    } else {
                                        return `<p style="color: #e0e0e0; line-height: 1.8; margin: 8px 0;">${item}</p>`;
                                    }
                                }).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>


                <!-- 예시 영상 또는 이미지 섹션 (그리드 내부) -->
                ${currentData.videos && currentData.videos.length > 0 ? `
                    <div class="content-section-box" style="grid-column: 1 / -1;">
                        <h3 class="section-title">예시 영상</h3>
                        <div class="video-grid">
                            ${currentData.videos.map((video, index) => `
                                <div class="video-item">
                                    <video controls autoplay loop muted playsinline>
                                        <source src="${video.src}" type="video/mp4">
                                        Your browser does not support the video tag.
                                    </video>
                                    ${video.caption ? `<p class="video-caption">${video.caption}</p>` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : currentData.images && currentData.images.length > 0 ? `
                    <div class="content-section-box" style="grid-column: 1 / -1;">
                        <h3 class="section-title">예시 이미지</h3>
                        <div class="image-grid">
                            ${currentData.images.slice(0, 2).map(img => {
                                const escapedCaption = (img.caption || '').replace(/'/g, "\\'");
                                return `
                                    <div class="image-item"
                                         onclick="openImageModal('${img.src}', '${escapedCaption}')">
                                        <img src="${img.src}"
                                             alt="${img.caption || ''}">
                                        ${img.caption ? `<p class="image-caption">${img.caption}</p>` : ''}
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
    `;

    // Always hide pagination
    if (pagination) {
        pagination.style.display = 'none';
    }

    html += `</div>`;

    contentArea.innerHTML = html;

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Display Reviews Content
function displayReviewsContent() {
    if (!currentData) return;

    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    if (!contentArea) return;

    // Generate images grid HTML
    let imagesHtml = '';
    if (currentData.images && currentData.images.length > 0) {
        imagesHtml = `
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 10px 0;">
                ${currentData.images.map(img => `
                    <div style="text-align: center;">
                        <img src="${img.src}" alt="${img.caption}"
                             style="width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); cursor: pointer;"
                             onclick="openImageModal('${img.src}', '${img.caption}')">
                        <p style="color: #e0e0e0; margin-top: 12px; font-size: 15px; font-weight: 500;">${img.caption}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    let html = `
        <div class="content-container">
            <div class="content-header">
                <h2 class="content-title">${currentData.title || ''}</h2>
                ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
            </div>

            ${currentData.description ? `
                <div style="background: rgba(76, 175, 80, 0.05); padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <p style="color: #e0e0e0; line-height: 1.8; font-size: 16px;">${currentData.description}</p>
                </div>
            ` : ''}

            ${imagesHtml}
        </div>
    `;

    contentArea.innerHTML = html;

    if (pagination) {
        pagination.style.display = 'none';
    }

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Display Tutorial Content
function displayTutorialContent() {
    if (!currentData) return;

    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    if (!contentArea) return;

    let html = `
        <div class="content-container">
            <div class="content-header" style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
                </div>
                ${currentData.audioFile ? `
                    <button onclick="playTutorialAudio('${currentData.audioFile}', event)" class="voice-button" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 24px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; display: flex; align-items: center; gap: 8px; transition: all 0.3s; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(102, 126, 234, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(102, 126, 234, 0.3)'">
                        <i data-lucide="volume-2" style="width: 18px; height: 18px;"></i>
                        Voice
                    </button>
                ` : ''}
            </div>

            ${currentData.description ? `
                <div class="tutorial-intro" style="background: rgba(255, 107, 107, 0.05); padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <p style="color: #e0e0e0; line-height: 1.8; font-size: 16px;">${currentData.description.replace(/\n/g, '<br>')}</p>
                </div>
            ` : ''}

            <h3 style="color: #ff6b6b; font-size: 24px; margin: 40px 0 20px 0;">📜 퀘스트 1: '캐릭터' 블록 조립하기</h3>

            <div class="tutorial-parts-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 25px; margin: 30px 0;">
                ${currentData.parts.map((part, index) => `
                    <div class="tutorial-part-card" style="background: #1a1a1a; border: 1px solid #333; border-radius: 12px; padding: 25px; transition: all 0.3s;">
                        <h4 style="color: #4CAF50; font-size: 18px; margin-bottom: 15px;">${part.title}</h4>
                        <p style="color: #ccc; line-height: 1.6; margin-bottom: 20px;">${part.description}</p>
                        
                        <div style="margin: 20px 0;">
                            <p style="color: #999; font-size: 14px; margin-bottom: 10px;">키워드 예시 (Keywords):</p>
                            <ul style="list-style: none; padding: 0;">
                                ${part.keywords.map(keyword => `
                                    <li style="color: #aaa; padding: 6px 0; padding-left: 15px; position: relative;">
                                        <span style="position: absolute; left: 0; color: #ff6b6b;">•</span>
                                        ${keyword}
                                    </li>
                                `).join('')}
                            </ul>
                        </div>

                        <div style="background: rgba(255, 107, 107, 0.1); padding: 15px; border-radius: 5px; margin-top: 20px;">
                            <p style="color: #fff; line-height: 1.6; font-size: 14px;">${part.example}</p>
                        </div>
                    </div>
                `).join('')}
            </div>

            ${currentData.tip ? `
                <div class="tutorial-tip" style="background: rgba(255, 193, 7, 0.1); padding: 25px; border-radius: 10px; margin: 40px 0;">
                    <h4 style="color: #FFC107; font-size: 20px; margin-bottom: 15px;">${currentData.tip.title}</h4>
                    <p style="color: #e0e0e0; line-height: 1.8; font-size: 15px; white-space: pre-line;">${currentData.tip.content}</p>
                </div>
            ` : ''}

            ${currentData.completion ? `
                <div class="tutorial-completion" style="margin: 50px 0;">
                    <h3 style="color: #ff6b6b; font-size: 24px; margin-bottom: 20px;">${currentData.completion.title}</h3>
                    <p style="color: #e0e0e0; line-height: 1.8; font-size: 16px; margin-bottom: 20px;">${currentData.completion.message}</p>
                    
                    ${currentData.completion.choice ? `
                        <div style="background: rgba(255, 107, 107, 0.1); padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <p style="color: #fff; line-height: 1.8; font-size: 15px;">${currentData.completion.choice}</p>
                        </div>
                    ` : ''}

                    <p style="color: #4CAF50; font-weight: 600; margin-bottom: 10px; font-size: 16px; margin-top: 30px;">(조립된 [${currentData.koreanTitle}] 블록)</p>
                    <div style="display: flex; gap: 25px; align-items: stretch;">
                        <div style="background: rgba(76, 175, 80, 0.1); padding: 20px; border-radius: 8px; flex: 1; display: flex; align-items: center; justify-content: space-between; min-height: 300px;">
                            <p style="color: #fff; font-size: 18px; font-family: monospace; margin: 0; line-height: 1.6;">${currentData.completion.result}</p>
                            <button onclick="copyToClipboard('${currentData.completion.result.replace(/'/g, "\\'")}', this)" style="background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 14px; white-space: nowrap; margin-left: 20px; align-self: flex-start;">
                                복사
                            </button>
                        </div>
                        ${currentData.completion.image ? `
                            <div style="width: 300px; height: 300px; border-radius: 8px; overflow: hidden; border: 3px solid #4CAF50; flex-shrink: 0; cursor: pointer; transition: transform 0.3s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='scale(1)'">
                                <img src="${currentData.completion.image}" alt="Result" style="width: 100%; height: 100%; object-fit: cover;" onclick="openImageModal('${currentData.completion.image}', '조립된 결과')">
                            </div>
                        ` : ''}
                    </div>

                    <p style="color: #4CAF50; font-weight: 600; margin-bottom: 10px; font-size: 16px; margin-top: 30px;">(현재 프롬프트 조립 상태)</p>
                    <div style="background: rgba(76, 175, 80, 0.1); padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <p style="color: #fff; font-size: 16px; font-family: monospace;">${currentData.completion.status}</p>
                    </div>

                    <p style="color: #e0e0e0; line-height: 1.8; font-size: 16px; margin-top: 30px;">${currentData.completion.nextStep.replace(/\n/g, '<br>')}</p>
                </div>
            ` : ''}
        </div>
    `;

    contentArea.innerHTML = html;

    if (pagination) {
        pagination.style.display = 'none';
    }

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Display Expert Content
function displayExpertContent() {
    if (!currentData) return;

    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    if (!contentArea) return;

    let html = `
        <div class="content-container">
            <div class="content-header">
                <h2 class="content-title">${currentData.title || ''}</h2>
                ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
            </div>

            ${currentData.description ? `
                <div class="expert-intro" style="background: rgba(255, 193, 7, 0.05); padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <p style="color: #e0e0e0; line-height: 1.8; font-size: 16px;">${currentData.description.replace(/\n/g, '<br>')}</p>
                </div>
            ` : ''}

            <div class="expert-parts" style="margin: 40px 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px;">
                ${currentData.parts.map((part, index) => `
                    <div class="expert-part-section" style="background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 30px;">
                        <h3 style="color: #4CAF50; font-size: 18px; margin-bottom: 20px; display: flex; align-items: center;">
                            <span style="background: #4CAF50; color: white; width: 32px; height: 32px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px; font-weight: bold;">${index + 1}</span>
                            ${part.title}
                        </h3>
                        <div style="color: #ccc; line-height: 1.8; font-size: 15px; white-space: pre-line;">
                            ${part.content}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    contentArea.innerHTML = html;

    if (pagination) {
        pagination.style.display = 'none';
    }

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Display Expert Style Content (Chapter 3)
function displayExpertStyleContent() {
    if (!currentData) return;

    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    if (!contentArea) return;

    let html = `
        <div class="content-container">
            <div class="content-header">
                <h2 class="content-title">${currentData.title || ''}</h2>
                ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
            </div>

            ${currentData.description ? `
                <div class="expert-intro" style="background: rgba(255, 193, 7, 0.05); padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <p style="color: #e0e0e0; line-height: 1.8; font-size: 16px;">${currentData.description.replace(/\n/g, '<br>')}</p>
                </div>
            ` : ''}

            ${currentData.intro ? `
                <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 30px; margin: 30px 0;">
                    <h3 style="color: #4CAF50; font-size: 20px; margin-bottom: 15px;">${currentData.intro.title}</h3>
                    <p style="color: #ccc; line-height: 1.8; font-size: 15px; white-space: pre-line;">${currentData.intro.content}</p>
                </div>
            ` : ''}

            <h3 style="color: #ff6b6b; font-size: 24px; margin: 40px 0 20px 0;">실전 예시: 스타일이 모든 것을 바꾸는 순간</h3>
            <p style="color: #aaa; margin-bottom: 30px;">기본 주제: <span style="color: #FFC107;">a man sitting in a cafe (카페에 앉아있는 남자)</span></p>

            <div class="style-examples" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; margin: 30px 0;">
                ${currentData.styleExamples.map((example, index) => `
                    <div class="style-example-card" style="background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 25px;">
                        <div style="display: flex; align-items: center; margin-bottom: 15px;">
                            <span style="background: #ff6b6b; color: white; width: 32px; height: 32px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; margin-right: 12px; font-size: 16px; font-weight: bold;">${index + 1}</span>
                            <div>
                                <h4 style="color: #4CAF50; font-size: 18px; margin: 0;">${example.title}</h4>
                                <p style="color: #999; font-size: 14px; margin: 5px 0 0 0;">${example.subtitle}</p>
                            </div>
                        </div>
                        
                        <p style="color: #ccc; line-height: 1.6; margin-bottom: 20px; font-size: 14px;">${example.description}</p>
                        
                        <div style="background: rgba(76, 175, 80, 0.1); padding: 15px; border-radius: 8px; margin: 15px 0;">
                            <p style="color: #4CAF50; font-size: 12px; margin-bottom: 8px; font-weight: bold;">프롬프트:</p>
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <p id="prompt-text-${index}" style="color: #fff; font-family: monospace; font-size: 13px; margin: 0; flex: 1; line-height: 1.5;">${example.prompt}</p>
                                <button onclick="copyToClipboard(document.getElementById('prompt-text-${index}').textContent, this)" style="background: #4CAF50; color: white; border: none; padding: 6px 12px; border-radius: 5px; cursor: pointer; font-size: 12px; white-space: nowrap; margin-left: 10px;">
                                    복사
                                </button>
                            </div>
                        </div>
                        
                        <div style="background: rgba(255, 193, 7, 0.1); padding: 15px; border-radius: 8px; margin: 15px 0;">
                            <p style="color: #FFC107; font-size: 12px; margin-bottom: 8px; font-weight: bold;">결과물:</p>
                            <p style="color: #e0e0e0; font-size: 13px; line-height: 1.6; margin: 0;">${example.result}</p>
                        </div>
                        
                        <div style="margin-top: 15px;">
                            <p style="color: #999; font-size: 12px; margin-bottom: 10px;">주요 키워드 (클릭하면 프롬프트에 적용):</p>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${example.keywords.map(keyword => `
                                    <span style="background: rgba(76, 175, 80, 0.2); color: #4CAF50; padding: 4px 10px; border-radius: 5px; font-size: 12px; font-family: monospace; cursor: pointer; transition: all 0.2s;" 
                                          onclick="updatePromptWithKeyword(${index}, '${keyword.replace(/'/g, "\\'")}', '${currentData.keywordType || 'style'}', this)"
                                          onmouseover="this.style.background='rgba(76, 175, 80, 0.4)'"
                                          onmouseout="this.style.background='rgba(76, 175, 80, 0.2)'">
                                        ${keyword}
                                    </span>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>

            ${currentData.tip ? `
                <div style="background: rgba(255, 193, 7, 0.1); padding: 25px; border-radius: 10px; margin: 40px 0;">
                    <h4 style="color: #FFC107; font-size: 20px; margin-bottom: 15px;">${currentData.tip.title}</h4>
                    <p style="color: #e0e0e0; line-height: 1.8; font-size: 15px; white-space: pre-line;">${currentData.tip.content}</p>
                </div>
            ` : ''}

            ${currentData.conclusion ? `
                <div style="background: #1a1a1a; border: 1px solid #333; border-radius: 10px; padding: 30px; margin: 30px 0;">
                    <h3 style="color: #4CAF50; font-size: 20px; margin-bottom: 15px;">${currentData.conclusion.title}</h3>
                    <p style="color: #ccc; line-height: 1.8; font-size: 15px; white-space: pre-line;">${currentData.conclusion.content}</p>
                </div>
            ` : ''}
        </div>
    `;

    contentArea.innerHTML = html;

    if (pagination) {
        pagination.style.display = 'none';
    }

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Update prompt with selected keyword
function updatePromptWithKeyword(exampleIndex, keyword, keywordType, element) {
    const promptElement = document.getElementById(`prompt-text-${exampleIndex}`);
    if (!promptElement) return;
    
    let currentPrompt = promptElement.textContent;
    let newPrompt;
    
    // Split prompt into parts: style, subject, details, parameters
    const parts = currentPrompt.split(',').map(p => p.trim());
    
    switch(keywordType) {
        case 'style':
            // Replace first part (style)
            parts[0] = keyword;
            newPrompt = parts.join(', ');
            break;
            
        case 'parameter':
            // Replace --ar parameter at the end
            const arRegex = /--ar\s+[\d:]+/g;
            if (arRegex.test(currentPrompt)) {
                newPrompt = currentPrompt.replace(arRegex, keyword);
            } else {
                newPrompt = currentPrompt + ' ' + keyword;
            }
            break;
            
        case 'subject':
            // Replace second part (subject - after style, before action)
            // Format: "style, subject, action/details... --ar"
            if (parts.length >= 2) {
                parts[1] = keyword;
                newPrompt = parts.join(', ');
            } else {
                // If only style exists, add subject
                newPrompt = parts[0] + ', ' + keyword;
            }
            break;
            
        case 'action':
            // Replace third part (action)
            if (parts.length >= 3) {
                parts[2] = keyword;
                newPrompt = parts.join(', ');
            } else {
                newPrompt = currentPrompt + ', ' + keyword;
            }
            break;
            
        case 'environment':
            // Replace environment part (usually after action)
            if (parts.length >= 4) {
                parts[3] = keyword;
                newPrompt = parts.join(', ');
            } else {
                newPrompt = currentPrompt + ', ' + keyword;
            }
            break;
            
        default:
            // Default: replace first part
            parts[0] = keyword;
            newPrompt = parts.join(', ');
    }
    
    // Update the prompt text
    promptElement.textContent = newPrompt;
    
    // Visual feedback
    promptElement.style.transition = 'all 0.3s';
    promptElement.style.background = 'rgba(76, 175, 80, 0.2)';
    setTimeout(() => {
        promptElement.style.background = 'transparent';
    }, 500);
    
    // Highlight the clicked keyword
    const allKeywords = element.parentElement.querySelectorAll('span');
    allKeywords.forEach(k => {
        k.style.background = 'rgba(76, 175, 80, 0.2)';
        k.style.fontWeight = 'normal';
    });
    element.style.background = 'rgba(76, 175, 80, 0.5)';
    element.style.fontWeight = 'bold';
}

// Display Keyword Dictionary (Chapter 13)
function displayKeywordDictionary() {
    if (!currentData) return;

    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    if (!contentArea) return;

    let html = `
        <div class="content-container">
            <div class="content-header">
                <h2 class="content-title">${currentData.title || ''}</h2>
                ${currentData.koreanTitle ? `<span class="content-subtitle">${currentData.koreanTitle}</span>` : ''}
            </div>

            ${currentData.description ? `
                <div class="expert-intro" style="background: rgba(255, 193, 7, 0.05); padding: 25px; border-radius: 10px; margin: 30px 0;">
                    <p style="color: #e0e0e0; line-height: 1.8; font-size: 16px;">${currentData.description.replace(/\n/g, '<br>')}</p>
                </div>
            ` : ''}

            <!-- 프롬프트 결과 창 -->
            <div style="background: #1a1a1a; border: 2px solid #4CAF50; border-radius: 10px; padding: 25px; margin: 30px 0;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="color: #4CAF50; margin: 0;">생성된 프롬프트</h3>
                    <div>
                        <button onclick="copyDictionaryPrompt()" style="background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; margin-right: 10px;">
                            복사
                        </button>
                        <button onclick="clearDictionaryPrompt()" style="background: #ff6b6b; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer;">
                            초기화
                        </button>
                    </div>
                </div>
                <div 
                    id="dictionary-prompt" 
                    contenteditable="true"
                    style="background: #0a0a0a; padding: 20px; border-radius: 5px; min-height: 100px; color: #fff; font-family: monospace; font-size: 14px; line-height: 1.8; white-space: pre-wrap; outline: none; cursor: text;"
                    onfocus="if(this.textContent.includes('여기에 선택한 키워드가 표시됩니다')) { this.textContent = ''; this.style.color = '#fff'; }"
                    onblur="if(this.textContent.trim() === '') { this.textContent = '여기에 선택한 키워드가 표시됩니다...'; this.style.color = '#666'; }">여기에 선택한 키워드가 표시됩니다...
                </div>
            </div>

            <!-- 키워드 카테고리 (드롭다운) -->
            <div class="keyword-categories" style="margin: 40px 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px;">
                ${currentData.keywordCategories.map((category, catIndex) => `
                    <div class="keyword-category" style="background: #1a1a1a; border: 1px solid #333; border-radius: 10px; overflow: hidden;">
                        <!-- 드롭다운 헤더 -->
                        <button 
                            onclick="toggleKeywordCategory('keyword-cat-${catIndex}')"
                            style="width: 100%; background: transparent; border: none; padding: 20px 25px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.3s;"
                            onmouseover="this.style.background='rgba(255, 107, 107, 0.1)'"
                            onmouseout="this.style.background='transparent'">
                            <h3 style="color: #ff6b6b; font-size: 20px; margin: 0;">${category.title}</h3>
                            <i data-lucide="chevron-down" style="width: 24px; height: 24px; color: #ff6b6b; transition: transform 0.3s;" id="keyword-cat-${catIndex}-icon"></i>
                        </button>
                        
                        <!-- 드롭다운 컨텐츠 -->
                        <div id="keyword-cat-${catIndex}" style="display: none; padding: 0 25px 25px 25px;">
                            ${category.categories.map((subcat, subcatIndex) => `
                                <div style="margin-bottom: 15px; background: rgba(0,0,0,0.3); border-radius: 8px; overflow: hidden;">
                                    <!-- 서브카테고리 헤더 -->
                                    <button 
                                        onclick="toggleKeywordSubcategory('keyword-subcat-${catIndex}-${subcatIndex}')"
                                        style="width: 100%; background: transparent; border: none; padding: 12px 15px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.3s;"
                                        onmouseover="this.style.background='rgba(76, 175, 80, 0.1)'"
                                        onmouseout="this.style.background='transparent'">
                                        <h4 style="color: #4CAF50; font-size: 16px; margin: 0;">${subcat.name}</h4>
                                        <i data-lucide="chevron-down" style="width: 20px; height: 20px; color: #4CAF50; transition: transform 0.3s;" id="keyword-subcat-${catIndex}-${subcatIndex}-icon"></i>
                                    </button>
                                    
                                    <!-- 서브카테고리 키워드 -->
                                    <div id="keyword-subcat-${catIndex}-${subcatIndex}" style="display: none; padding: 15px;">
                                        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                                            ${subcat.keywords.map((keyword, kwIndex) => `
                                                <button 
                                                    onclick="addKeywordToPrompt('${keyword.en.replace(/'/g, "\\'")}', this)"
                                                    style="background: rgba(76, 175, 80, 0.2); color: #4CAF50; border: 1px solid #4CAF50; padding: 8px 15px; border-radius: 5px; cursor: pointer; font-size: 13px; transition: all 0.2s;"
                                                    onmouseover="this.style.background='rgba(76, 175, 80, 0.4)'"
                                                    onmouseout="this.style.background='rgba(76, 175, 80, 0.2)'"
                                                    title="${keyword.en}">
                                                    ${keyword.en} <span style="color: #aaa; font-size: 11px;">(${keyword.ko})</span>
                                                </button>
                                            `).join('')}
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    contentArea.innerHTML = html;

    if (pagination) {
        pagination.style.display = 'none';
    }

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Add keyword to dictionary prompt
function addKeywordToPrompt(keyword, element) {
    const promptDiv = document.getElementById('dictionary-prompt');
    if (!promptDiv) return;

    let currentPrompt = promptDiv.textContent;
    
    // 초기 메시지 제거
    if (currentPrompt.includes('여기에 선택한 키워드가 표시됩니다')) {
        currentPrompt = '';
    }

    // 파라미터(--로 시작)와 일반 키워드 분리
    const isParameter = keyword.startsWith('--');
    
    if (currentPrompt.trim() === '') {
        // 빈 프롬프트인 경우
        promptDiv.textContent = keyword;
    } else {
        // 기존 프롬프트를 일반 키워드와 파라미터로 분리
        // 먼저 쉼표로 분리된 부분과 공백으로 분리된 부분을 나눔
        let mainPart = currentPrompt;
        let paramPart = '';
        
        // --로 시작하는 파라미터들을 찾아서 분리
        const paramMatch = currentPrompt.match(/(.*?)\s+(--\S+.*)/);
        if (paramMatch) {
            mainPart = paramMatch[1].trim();
            paramPart = paramMatch[2].trim();
        }
        
        if (isParameter) {
            // 파라미터는 맨 뒤에 추가
            if (paramPart) {
                promptDiv.textContent = mainPart + ' ' + paramPart + ' ' + keyword;
            } else {
                promptDiv.textContent = mainPart + ' ' + keyword;
            }
        } else {
            // 일반 키워드는 파라미터 앞에 추가 (쉼표로 구분)
            if (mainPart) {
                promptDiv.textContent = mainPart + ', ' + keyword + (paramPart ? ' ' + paramPart : '');
            } else {
                promptDiv.textContent = keyword + (paramPart ? ' ' + paramPart : '');
            }
        }
    }

    // Visual feedback
    promptDiv.style.transition = 'all 0.3s';
    promptDiv.style.borderLeft = '4px solid #4CAF50';
    setTimeout(() => {
        promptDiv.style.borderLeft = 'none';
    }, 500);

    // Button feedback
    element.style.background = 'rgba(76, 175, 80, 0.6)';
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        element.style.background = 'rgba(76, 175, 80, 0.2)';
        element.style.transform = 'scale(1)';
    }, 200);
}

// Toggle keyword category dropdown
function toggleKeywordCategory(categoryId) {
    const content = document.getElementById(categoryId);
    const icon = document.getElementById(categoryId + '-icon');
    
    if (!content) return;
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        if (icon) {
            icon.style.transform = 'rotate(180deg)';
        }
    } else {
        content.style.display = 'none';
        if (icon) {
            icon.style.transform = 'rotate(0deg)';
        }
    }
    
    // Re-initialize icons after DOM update
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Toggle keyword subcategory dropdown
function toggleKeywordSubcategory(subcategoryId) {
    const content = document.getElementById(subcategoryId);
    const icon = document.getElementById(subcategoryId + '-icon');
    
    if (!content) return;
    
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        if (icon) {
            icon.style.transform = 'rotate(180deg)';
        }
    } else {
        content.style.display = 'none';
        if (icon) {
            icon.style.transform = 'rotate(0deg)';
        }
    }
    
    // Re-initialize icons after DOM update
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Copy dictionary prompt
function copyDictionaryPrompt() {
    const promptDiv = document.getElementById('dictionary-prompt');
    if (!promptDiv) return;

    const text = promptDiv.textContent;
    
    if (text.includes('여기에 선택한 키워드가 표시됩니다')) {
        alert('먼저 키워드를 선택해주세요!');
        return;
    }

    navigator.clipboard.writeText(text).then(() => {
        // Show success message
        const originalText = promptDiv.textContent;
        promptDiv.style.background = 'rgba(76, 175, 80, 0.2)';
        setTimeout(() => {
            promptDiv.style.background = '#0a0a0a';
        }, 500);
        
        alert('프롬프트가 복사되었습니다!');
    });
}

// Clear dictionary prompt
function clearDictionaryPrompt() {
    const promptDiv = document.getElementById('dictionary-prompt');
    if (!promptDiv) return;

    promptDiv.textContent = '여기에 선택한 키워드가 표시됩니다...';
    promptDiv.style.color = '#666';
    
    setTimeout(() => {
        promptDiv.style.color = '#fff';
    }, 100);
}

// Pagination functions (deprecated - kept for compatibility)
function previousPage() {
    // No longer needed
}

function nextPage() {
    // No longer needed
}

// Image Modal functions
function openImageModal(src, caption) {
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');

    if (modal && modalImg) {
        modal.style.display = 'block';
        modalImg.src = src;
        if (modalCaption) {
            modalCaption.textContent = caption || '';
        }
    }
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// ESC key to close modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
        closeImageModal();
    }
});

// Copy to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        alert('프롬프트가 클립보드에 복사되었습니다!');
    } catch (err) {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다. 수동으로 복사해주세요.');
    }

    document.body.removeChild(textarea);
}

// Play tutorial audio
let currentAudio = null;
let currentAudioFile = null;
let isAudioPlaying = false;

function playTutorialAudio(audioFile, evt) {
    const voiceButton = evt ? evt.currentTarget : document.querySelector('.voice-button');
    if (!voiceButton) {
        console.error('Voice button not found');
        return;
    }
    
    // If same audio is playing, toggle pause/play
    if (currentAudio && currentAudioFile === audioFile) {
        if (isAudioPlaying) {
            // Pause
            currentAudio.pause();
            isAudioPlaying = false;
            voiceButton.classList.remove('playing');
            voiceButton.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            voiceButton.innerHTML = '<i data-lucide="play" style="width: 18px; height: 18px;"></i> Play';
            if (typeof lucide !== 'undefined') lucide.createIcons();
        } else {
            // Resume
            currentAudio.play().catch(err => {
                console.error('오디오 재생 실패:', err);
                alert('오디오 파일을 재생할 수 없습니다.');
            });
            isAudioPlaying = true;
            voiceButton.classList.add('playing');
            voiceButton.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
            voiceButton.innerHTML = '<i data-lucide="pause" style="width: 18px; height: 18px;"></i> Pause';
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }
        return;
    }

    // Stop current audio if playing different file
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        // Reset previous button
        const prevButtons = document.querySelectorAll('.voice-button');
        prevButtons.forEach(btn => {
            btn.classList.remove('playing');
            btn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            btn.innerHTML = '<i data-lucide="volume-2" style="width: 18px; height: 18px;"></i> Voice';
        });
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }

    // Create and play new audio
    currentAudio = new Audio(`audio/${audioFile}`);
    currentAudioFile = audioFile;
    isAudioPlaying = true;
    
    // Update button to playing state
    voiceButton.classList.add('playing');
    voiceButton.style.background = 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)';
    voiceButton.innerHTML = '<i data-lucide="pause" style="width: 18px; height: 18px;"></i> Pause';
    if (typeof lucide !== 'undefined') lucide.createIcons();
    
    currentAudio.play().catch(err => {
        console.error('오디오 재생 실패:', err);
        alert('오디오 파일을 재생할 수 없습니다.');
        isAudioPlaying = false;
        voiceButton.classList.remove('playing');
        voiceButton.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        voiceButton.innerHTML = '<i data-lucide="volume-2" style="width: 18px; height: 18px;"></i> Voice';
        if (typeof lucide !== 'undefined') lucide.createIcons();
    });

    // Clean up when audio ends
    currentAudio.addEventListener('ended', () => {
        currentAudio = null;
        currentAudioFile = null;
        isAudioPlaying = false;
        voiceButton.classList.remove('playing');
        voiceButton.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        voiceButton.innerHTML = '<i data-lucide="volume-2" style="width: 18px; height: 18px;"></i> Voice';
        if (typeof lucide !== 'undefined') lucide.createIcons();
    });
}

// AIFI Tool Variables
let aifiApiKey = localStorage.getItem('aifi_api_key') || '';
let aifiCurrentTab = 'generator';
let aifiUploadedImages = {
    variator: null,
    extractor: null
};

// Display AIFI Tool
function displayAIFITool() {
    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    // Hide pagination
    if (pagination) {
        pagination.style.display = 'none';
    }

    let html = `
        <div class="content-container">
            <div class="content-header" style="position: relative;">
                <div>
                    <h2 class="content-title">${currentData.title || ''}</h2>
                    <span class="content-subtitle">${currentData.koreanTitle || ''}</span>
                </div>
                <button class="aifi-settings-btn" onclick="openAifiSettings()" title="API 설정">
                    <i data-lucide="settings" style="width: 20px; height: 20px;"></i>
                    <span>API 설정</span>
                </button>
            </div>

            ${!aifiApiKey ? `
            <div class="aifi-warning-card">
                <i data-lucide="alert-circle" style="width: 24px; height: 24px;"></i>
                <div>
                    <p>API 키가 설정되지 않았습니다.</p>
                    <small>상단의 'API 설정' 버튼을 클릭하여 설정해주세요.</small>
                </div>
            </div>
            ` : ''}

            <!-- Tabs -->
            <div class="aifi-tabs">
                <button class="aifi-tab ${aifiCurrentTab === 'generator' ? 'active' : ''}"
                        onclick="switchAifiTab('generator')">
                    이미지 생성
                </button>
                <button class="aifi-tab ${aifiCurrentTab === 'variator' ? 'active' : ''}"
                        onclick="switchAifiTab('variator')">
                    이미지 변형
                </button>
                <button class="aifi-tab ${aifiCurrentTab === 'extractor' ? 'active' : ''}"
                        onclick="switchAifiTab('extractor')">
                    프롬프트 추출
                </button>
                <button class="aifi-tab ${aifiCurrentTab === 'video' ? 'active' : ''}"
                        onclick="switchAifiTab('video')">
                    영상 프롬프트
                </button>
            </div>

            <!-- Tab Contents -->
            <div class="aifi-tab-content">
                ${renderAifiTabContent(aifiCurrentTab)}
            </div>

            <div id="aifi-alerts"></div>
        </div>
    `;

    contentArea.innerHTML = html;

    // Setup drag and drop if needed
    if (aifiCurrentTab === 'variator' || aifiCurrentTab === 'extractor') {
        setupAifiDragDrop();
    }

    // Update icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Render AIFI Tab Content
function renderAifiTabContent(tab) {
    switch(tab) {
        case 'generator':
            return `
                <div class="aifi-content-wrapper">
                    <div class="aifi-left-panel">
                        <div class="aifi-panel-title">텍스트로 이미지 생성하기</div>
                        <div class="form-group" style="flex: 1; display: flex; flex-direction: column;">
                            <label>프롬프트 입력</label>
                            <textarea id="gen-prompt" class="aifi-textarea aifi-large-textarea"
                                      placeholder="생성하고 싶은 이미지를 자세히 설명해주세요..."></textarea>
                        </div>
                        <button class="button aifi-button" onclick="generateAifiImage()" style="width: 100%;">
                            이미지 생성
                        </button>
                        <div class="aifi-loading" id="gen-loading" style="display: none; margin-top: 15px;">
                            <div class="spinner"></div>
                            <p>이미지를 생성하는 중...</p>
                        </div>
                    </div>
                    <div class="aifi-right-panel">
                        <div class="aifi-panel-title">생성된 이미지</div>
                        <div id="gen-result" class="aifi-result-area">
                            <div class="aifi-empty-state">이곳에 생성된 이미지가 표시됩니다.</div>
                        </div>
                    </div>
                </div>
            `;

        case 'variator':
            return `
                <div class="aifi-content-wrapper">
                    <div class="aifi-left-panel">
                        <div class="aifi-panel-title">이미지 변형</div>
                        <div style="flex: 1; display: flex; flex-direction: column;">
                            <div class="aifi-upload-area" id="var-upload" onclick="document.getElementById('var-file').click()" style="flex: 0 0 250px;">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="17 8 12 3 7 8"></polyline>
                                    <line x1="12" y1="3" x2="12" y2="15"></line>
                                </svg>
                                <p>이미지를 업로드하세요</p>
                                <p style="font-size: 12px; color: #666;">PNG, JPG, WEBP (최대 10MB)</p>
                                <input type="file" id="var-file" accept="image/*" style="display: none;"
                                       onchange="handleAifiFile(event, 'variator')">
                            </div>
                            <div id="var-preview"></div>
                            <div class="form-group" style="margin-top: 20px; flex: 1; display: flex; flex-direction: column;">
                                <label>변형 지시사항</label>
                                <textarea id="var-prompt" class="aifi-textarea" placeholder="예: 이 고양이에게 우주 헬멧을 씌워줘" style="flex: 1; resize: none;"></textarea>
                            </div>
                        </div>
                        <button class="button aifi-button" onclick="variateAifiImage()" style="width: 100%; margin-top: 20px;">
                            이미지 변형 생성
                        </button>
                        <div class="aifi-loading" id="var-loading" style="display: none; margin-top: 15px;">
                            <div class="spinner"></div>
                            <p>이미지를 변형하는 중...</p>
                        </div>
                    </div>
                    <div class="aifi-right-panel">
                        <div class="aifi-panel-title">변형된 이미지</div>
                        <div id="var-result" class="aifi-result-area">
                            <div class="aifi-empty-state">이곳에 변형된 이미지가 표시됩니다.</div>
                        </div>
                    </div>
                </div>
            `;

        case 'extractor':
            return `
                <div class="aifi-content-wrapper">
                    <div class="aifi-left-panel">
                        <div class="aifi-panel-title">프롬프트 추출</div>
                        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center;">
                            <div class="aifi-upload-area" id="ext-upload" onclick="document.getElementById('ext-file').click()" style="flex: 0 0 auto;">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="17 8 12 3 7 8"></polyline>
                                    <line x1="12" y1="3" x2="12" y2="15"></line>
                                </svg>
                                <p>이미지를 업로드하세요</p>
                                <p style="font-size: 12px; color: #666;">PNG, JPG, WEBP (최대 10MB)</p>
                                <input type="file" id="ext-file" accept="image/*" style="display: none;"
                                       onchange="handleAifiFile(event, 'extractor')">
                            </div>
                            <div id="ext-preview"></div>
                        </div>
                        <button class="button aifi-button" onclick="extractAifiPrompt()" style="width: 100%; margin-top: auto;">
                            프롬프트 추출
                        </button>
                        <div class="aifi-loading" id="ext-loading" style="display: none; margin-top: 15px;">
                            <div class="spinner"></div>
                            <p>이미지를 분석하는 중...</p>
                        </div>
                    </div>
                    <div class="aifi-right-panel">
                        <div class="aifi-panel-title">추출된 프롬프트</div>
                        <div id="ext-result" class="aifi-result-area">
                            <div class="aifi-empty-state">이곳에 추출된 프롬프트가 표시됩니다.</div>
                        </div>
                    </div>
                </div>
            `;

        case 'video':
            return `
                <div class="aifi-content-wrapper">
                    <div class="aifi-left-panel">
                        <div class="aifi-panel-title">영상 프롬프트 생성</div>
                        <div class="form-group" style="flex: 1; display: flex; flex-direction: column;">
                            <label>영상 아이디어</label>
                            <textarea id="video-prompt" class="aifi-textarea" placeholder="장면, 캐릭터, 동작에 대한 아이디어를 입력하세요. Veo 3 모델에 최적화된 상세한 JSON 프롬프트를 생성해 드립니다.\n\n예: 은행 강도 두 명이서 사무실에서 볼펜으로 서류를 작성하는 체크 정면 은행에서 촬영한 장면" style="flex: 1; resize: none;"></textarea>
                        </div>
                        <button class="button aifi-button" onclick="generateAifiVideoPrompt()" style="width: 100%; margin-top: 20px;">
                            프롬프트 생성
                        </button>
                        <div class="aifi-loading" id="video-loading" style="display: none; margin-top: 15px;">
                            <div class="spinner"></div>
                            <p>영상 프롬프트를 생성하는 중...</p>
                        </div>
                    </div>
                    <div class="aifi-right-panel">
                        <div class="aifi-panel-title">생성된 프롬프트</div>
                        <div id="video-result" class="aifi-result-area">
                            <div class="aifi-empty-state">이곳에 생성된 영상 프롬프트가 표시됩니다.</div>
                        </div>
                    </div>
                </div>
            `;

        default:
            return '';
    }
}

// AIFI Tool Functions
function openAifiSettings() {
    const modal = document.getElementById('aifi-settings-modal');
    if (modal) {
        modal.style.display = 'flex';
        // Load existing key
        const existingKey = localStorage.getItem('aifi_api_key') || '';
        const apiInput = document.getElementById('modal-api-key');

        if (apiInput) {
            apiInput.value = existingKey;
        }

        updateApiStatus(existingKey ? '설정됨' : '미설정');
    }
}

function closeAifiSettings() {
    const modal = document.getElementById('aifi-settings-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function saveAifiSettings() {
    const apiKey = document.getElementById('modal-api-key').value.trim();

    if (!apiKey) {
        showAifiAlert('error', 'API 키를 입력해주세요.');
        return;
    }

    // Save key
    aifiApiKey = apiKey;
    localStorage.setItem('aifi_api_key', apiKey);

    updateApiStatus('설정됨');
    showAifiAlert('success', 'API 키가 저장되었습니다!');

    // Refresh display and close modal
    setTimeout(() => {
        closeAifiSettings();
        displayAIFITool();
    }, 1000);
}

function updateApiStatus(status, isError = false) {
    const statusText = document.getElementById('api-status-text');
    if (statusText) {
        statusText.textContent = status;
        statusText.style.color = isError ? '#ff6b6b' : (status === '설정됨' ? '#4CAF50' : '#999');
    }
}

async function testAifiApi() {
    const key = document.getElementById('modal-api-key').value.trim();
    const testBtn = document.getElementById('test-api-btn');

    if (!key) {
        showAifiAlert('error', 'API 키를 입력해주세요.');
        return;
    }

    // Update button state
    const originalHTML = testBtn.innerHTML;
    testBtn.disabled = true;
    testBtn.innerHTML = `
        <div class="spinner-small"></div>
        <span>테스트 중...</span>
    `;
    testBtn.classList.add('testing');

    updateApiStatus('연결 테스트 중...', false);

    try {
        // Test 1: Gemini 2.5 Flash 모델 테스트
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: "Hello, this is a test"
                    }]
                }]
            })
        });

        let geminiSuccess = response.ok;
        let nanoSuccess = false;

        // Test 2: Imagen 3 모델 테스트 (실제 이미지 생성 모델)
        if (geminiSuccess) {
            testBtn.innerHTML = `
                <div class="spinner-small"></div>
                <span>Imagen 3 테스트 중...</span>
            `;

            try {
                const imagenResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${key}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        instances: [{
                            prompt: "Test image generation"
                        }],
                        parameters: {
                            sampleCount: 1
                        }
                    })
                });

                nanoSuccess = imagenResponse.ok || imagenResponse.status === 404; // 404도 API 키는 유효하다는 의미
            } catch (nanoError) {
                console.log('Imagen 3 test error:', nanoError);
                nanoSuccess = false;
            }
        }

        if (geminiSuccess) {
            const statusMessage = geminiSuccess
                ? 'Gemini 2.5 Flash 연결 성공!'
                : 'API 연결 실패';

            updateApiStatus(statusMessage, false);
            showAifiAlert('success', statusMessage);

            // Success animation
            testBtn.innerHTML = `
                <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
                <span>연결 성공!</span>
            `;
            testBtn.classList.add('success');
            testBtn.classList.remove('testing');

            setTimeout(() => {
                testBtn.innerHTML = originalHTML;
                testBtn.classList.remove('success');
                testBtn.disabled = false;
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }, 2000);
        } else {
            updateApiStatus('연결 실패', true);
            showAifiAlert('error', 'API 키가 올바르지 않습니다.');

            // Error animation
            testBtn.innerHTML = `
                <i data-lucide="x-circle" style="width: 16px; height: 16px;"></i>
                <span>연결 실패</span>
            `;
            testBtn.classList.add('error');
            testBtn.classList.remove('testing');

            setTimeout(() => {
                testBtn.innerHTML = originalHTML;
                testBtn.classList.remove('error');
                testBtn.disabled = false;
                if (typeof lucide !== 'undefined') lucide.createIcons();
            }, 2000);
        }
    } catch (error) {
        updateApiStatus('연결 실패', true);
        showAifiAlert('error', '연결 테스트에 실패했습니다.');

        // Error animation
        testBtn.innerHTML = `
            <i data-lucide="x-circle" style="width: 16px; height: 16px;"></i>
            <span>오류 발생</span>
        `;
        testBtn.classList.add('error');
        testBtn.classList.remove('testing');

        setTimeout(() => {
            testBtn.innerHTML = originalHTML;
            testBtn.classList.remove('error');
            testBtn.disabled = false;
            if (typeof lucide !== 'undefined') lucide.createIcons();
        }, 2000);
    }
}

function switchAifiTab(tab) {
    aifiCurrentTab = tab;
    displayAIFITool();
}

function showAifiAlert(type, message) {
    const alertsDiv = document.getElementById('aifi-alerts');
    if (!alertsDiv) return;

    const alert = document.createElement('div');
    alert.className = `aifi-alert aifi-alert-${type}`;
    alert.textContent = message;

    alertsDiv.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 5000);
}

function showAifiLoading(id, show) {
    const loading = document.getElementById(`${id}-loading`);
    if (loading) {
        loading.style.display = show ? 'block' : 'none';
    }
}

// File handling
function handleAifiFile(event, type) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
        showAifiAlert('error', '이미지 파일만 업로드 가능합니다.');
        return;
    }

    // 파일 크기 체크 (10MB - Gemini API의 실제 제한)
    if (file.size > 10 * 1024 * 1024) {
        showAifiAlert('error', '파일 크기는 10MB 이하여야 합니다.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const base64 = e.target.result.split(',')[1];
        aifiUploadedImages[type] = {
            base64: base64,
            mimeType: file.type
        };

        // Upload area 자체를 이미지로 교체
        const uploadArea = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-upload`);
        uploadArea.style.padding = '0';
        uploadArea.style.overflow = 'hidden';
        uploadArea.style.background = 'transparent';
        uploadArea.style.border = 'none';
        uploadArea.innerHTML = `
            <div style="position: relative; width: 100%; height: 100%;">
                <img src="${e.target.result}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;">
                <button onclick="clearAifiImage('${type}')"
                        style="position: absolute; top: 10px; right: 10px;
                               background: rgba(0,0,0,0.7); color: white;
                               border: none; border-radius: 50%;
                               width: 30px; height: 30px;
                               cursor: pointer; display: flex;
                               align-items: center; justify-content: center;
                               font-size: 16px; line-height: 1;"
                        title="이미지 제거">
                    ×
                </button>
            </div>
        `;

        // preview div 비우기
        const previewDiv = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-preview`);
        if (previewDiv) previewDiv.innerHTML = '';
    };
    reader.readAsDataURL(file);
}

function clearAifiImage(type) {
    aifiUploadedImages[type] = null;

    // Upload area를 원래 상태로 복구
    const uploadArea = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-upload`);
    uploadArea.style.padding = '40px';
    uploadArea.style.overflow = 'visible';
    uploadArea.style.background = '';
    uploadArea.style.border = '';
    uploadArea.innerHTML = `
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="17 8 12 3 7 8"></polyline>
            <line x1="12" y1="3" x2="12" y2="15"></line>
        </svg>
        <p>이미지를 업로드하세요</p>
        <p style="font-size: 12px; color: #666;">PNG, JPG, WEBP (최대 10MB)</p>
        <input type="file" id="${type === 'variator' ? 'var' : 'ext'}-file" accept="image/*" style="display: none;"
               onchange="handleAifiFile(event, '${type}')">
    `;

    // Reset file input
    const fileInput = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-file`);
    if (fileInput) fileInput.value = '';

    // Clear preview div
    const previewDiv = document.getElementById(`${type === 'variator' ? 'var' : 'ext'}-preview`);
    if (previewDiv) previewDiv.innerHTML = '';
}

// Format file size helper
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

// Drag and drop
function setupAifiDragDrop() {
    const uploadAreas = document.querySelectorAll('.aifi-upload-area');

    uploadAreas.forEach(area => {
        area.addEventListener('dragover', (e) => {
            e.preventDefault();
            area.classList.add('dragover');
        });

        area.addEventListener('dragleave', () => {
            area.classList.remove('dragover');
        });

        area.addEventListener('drop', (e) => {
            e.preventDefault();
            area.classList.remove('dragover');

            const file = e.dataTransfer.files[0];
            if (file && file.type.startsWith('image/')) {
                const input = area.querySelector('input[type="file"]');
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(file);
                input.files = dataTransfer.files;
                input.dispatchEvent(new Event('change'));
            }
        });
    });
}

// API Functions
async function generateAifiImage() {
    if (!aifiApiKey) {
        showAifiAlert('error', 'API 키를 먼저 설정해주세요.');
        return;
    }

    const prompt = document.getElementById('gen-prompt').value.trim();
    if (!prompt) {
        showAifiAlert('error', '프롬프트를 입력해주세요.');
        return;
    }

    showAifiLoading('gen', true);

    try {
        // 향상된 프롬프트 생성
        await generateAifiTextPrompt(prompt);
        showAifiAlert('success', '향상된 프롬프트가 생성되었습니다!');
    } catch (error) {
        console.error('Error in generateAifiImage:', error);
        showAifiAlert('error', '프롬프트 생성에 실패했습니다.');
    } finally {
        showAifiLoading('gen', false);
    }
}


async function generateAifiTextPrompt(prompt) {
    // Using gemini-2.5-flash for text generation
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Convert this idea into a detailed image generation prompt for Midjourney or DALL-E 3. Write in English and include style, lighting, composition, and colors. Provide ONLY the clean prompt without any explanations or additional text:\n\n"${prompt}"`
                    }]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            let enhancedPrompt = data.candidates[0].content.parts[0].text;

            // 불필요한 안내문 제거
            enhancedPrompt = enhancedPrompt
                .replace(/^Here's.*?:\s*/i, '')
                .replace(/^Enhanced prompt.*?:\s*/i, '')
                .replace(/^Prompt.*?:\s*/i, '')
                .replace(/^\*\*.*?\*\*\s*/gm, '')
                .replace(/^#{1,6}\s.*$/gm, '')
                .trim();

            displayAifiPromptResult('gen', enhancedPrompt);
        }
    } catch (error) {
        showAifiAlert('error', '프롬프트 생성에 실패했습니다.');
    }
}

async function variateAifiImage() {
    if (!aifiApiKey) {
        showAifiAlert('error', 'API 키를 먼저 설정해주세요.');
        return;
    }

    if (!aifiUploadedImages.variator) {
        showAifiAlert('error', '먼저 이미지를 업로드해주세요.');
        return;
    }

    const prompt = document.getElementById('var-prompt').value.trim();
    if (!prompt) {
        showAifiAlert('error', '변형 지시사항을 입력해주세요.');
        return;
    }

    showAifiLoading('var', true);

    try {
        // Step 1: Gemini로 프롬프트 생성
        const promptResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        {
                            inline_data: {
                                mime_type: aifiUploadedImages.variator.mimeType,
                                data: aifiUploadedImages.variator.base64
                            }
                        },
                        {
                            text: `이 이미지를 다음과 같이 변형하기 위한 상세한 프롬프트를 생성해주세요: "${prompt}"\n\n원본 이미지의 주요 요소를 유지하면서 요청된 변형을 적용한 새로운 이미지 생성 프롬프트를 영어로 작성해주세요.`
                        }
                    ]
                }]
            })
        });

        const promptData = await promptResponse.json();
        if (promptData.candidates && promptData.candidates[0]) {
            const variationPrompt = promptData.candidates[0].content.parts[0].text;

            // Step 2: 변형된 이미지를 위한 상세 프롬프트 생성
            // (실제 이미지 생성 API가 제한적이므로 프롬프트 최적화에 집중)
            try {
                const imageResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [
                                {
                                    inline_data: {
                                        mime_type: aifiUploadedImages.variator.mimeType,
                                        data: aifiUploadedImages.variator.base64
                                    }
                                },
                                {
                                    text: `Based on this variation request: "${variationPrompt}"\n\nCreate an ultra-detailed Midjourney v6 prompt that maintains the core elements of the original image while applying the requested changes.\n\nInclude:\n- Specific art style and rendering technique\n- Detailed description of the variation\n- Lighting and atmosphere adjustments\n- Color grading changes\n- Technical parameters (--ar, --s, --q, --v 6)\n\nFormat: One detailed paragraph followed by Midjourney parameters.`
                                }
                            ]
                        }],
                        generationConfig: {
                            temperature: 0.8,
                            candidateCount: 1
                        }
                    })
                });

                const imageData = await imageResponse.json();

                if (imageData.candidates && imageData.candidates[0]) {
                    const finalVariationPrompt = imageData.candidates[0].content.parts[0].text;
                    displayAifiPromptResult('var', finalVariationPrompt);
                    showAifiAlert('success', '이미지 변형 프롬프트가 생성되었습니다!');
                } else {
                    // 실패 시 기본 프롬프트 표시
                    displayAifiPromptResult('var', variationPrompt);
                    showAifiAlert('info', '변형 프롬프트가 생성되었습니다.');
                }
            } catch (imageError) {
                console.error('Variation prompt error:', imageError);
                // 오류 발생 시 기본 프롬프트 표시
                displayAifiPromptResult('var', variationPrompt);
                showAifiAlert('info', '기본 변형 프롬프트가 생성되었습니다.');
            }
        }
    } catch (error) {
        console.error('Error:', error);
        showAifiAlert('error', '이미지 변형에 실패했습니다.');
    } finally {
        showAifiLoading('var', false);
    }
}

async function extractAifiPrompt() {
    if (!aifiApiKey) {
        showAifiAlert('error', 'API 키를 먼저 설정해주세요.');
        return;
    }

    if (!aifiUploadedImages.extractor) {
        showAifiAlert('error', '먼저 이미지를 업로드해주세요.');
        return;
    }

    showAifiLoading('ext', true);

    try {
        // Using gemini-2.5-flash for prompt extraction
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        {
                            inline_data: {
                                mime_type: aifiUploadedImages.extractor.mimeType,
                                data: aifiUploadedImages.extractor.base64
                            }
                        },
                        {
                            text: `Analyze this image and create a clean, direct prompt that could recreate it using Midjourney or DALL-E. Write ONLY the prompt text without any explanations, headers, or additional formatting. Just provide the raw prompt that can be copied and used directly.`
                        }
                    ]
                }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            let extractedPrompt = data.candidates[0].content.parts[0].text;

            // 불필요한 안내문 제거
            extractedPrompt = extractedPrompt
                .replace(/^Here's a prompt.*?:\s*/i, '')
                .replace(/^This prompt.*?:\s*/i, '')
                .replace(/^Generated prompt.*?:\s*/i, '')
                .replace(/^Prompt.*?:\s*/i, '')
                .replace(/^\*\*.*?\*\*\s*/gm, '')
                .replace(/^#{1,6}\s.*$/gm, '')
                .replace(/^---+$/gm, '')
                .trim();

            displayAifiPromptResult('ext', extractedPrompt);
        }
    } catch (error) {
        console.error('Error:', error);
        showAifiAlert('error', '프롬프트 추출에 실패했습니다.');
    } finally {
        showAifiLoading('ext', false);
    }
}

async function generateAifiVideoPrompt() {
    if (!aifiApiKey) {
        showAifiAlert('error', 'API 키를 먼저 설정해주세요.');
        return;
    }

    const prompt = document.getElementById('video-prompt').value.trim();
    if (!prompt) {
        showAifiAlert('error', '영상 아이디어를 입력해주세요.');
        return;
    }

    showAifiLoading('video', true);

    try {
        // Using gemini-2.5-flash for video prompt generation
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${aifiApiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Create a detailed video generation prompt in JSON format for: "${prompt}"\n\nInclude these elements in the JSON:\n- metadata (title, duration)\n- scene description\n- camera movements\n- character details (if any)\n- lighting setup\n- audio/dialogue\n- visual style\n- color grading\n\nFormat as a clean JSON object.`
                    }]
                }],
                generationConfig: {
                    temperature: 0.7
                }
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]) {
            let videoPrompt = data.candidates[0].content.parts[0].text;

            // Try to format as JSON
            try {
                const jsonMatch = videoPrompt.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    const jsonObj = JSON.parse(jsonMatch[0]);
                    videoPrompt = JSON.stringify(jsonObj, null, 2);
                }
            } catch (e) {
                // If not valid JSON, use as is
            }

            displayAifiPromptResult('video', videoPrompt);
        }
    } catch (error) {
        console.error('Error:', error);
        showAifiAlert('error', '영상 프롬프트 생성에 실패했습니다.');
    } finally {
        showAifiLoading('video', false);
    }
}

// Hairstyle Functions
let selectedHairstyle = 'STYLE';
let currentHairstyleTab = 'woman';

function switchHairstyleTab(tab) {
    currentHairstyleTab = tab;
    if (typeof cameraData !== 'undefined' && cameraData['hairstyles']) {
        cameraData['hairstyles'].currentTab = tab;
        displayContent();
    }
}

function selectHairstyle(styleName, styleDescription, tab) {
    selectedHairstyle = styleDescription;
    const promptElement = document.getElementById('hairstyle-prompt');
    if (promptElement) {
        const promptPrefix = tab === 'woman' ? 'A beautiful Korean actress with' : 'Korean man with';
        const promptSuffix = tab === 'woman' ? 'hair style with blonde color' : 'haircut';

        promptElement.innerHTML = `${promptPrefix} { <span class="highlight-keyword selected">${styleDescription}</span> } ${promptSuffix}`;

        // Highlight selected hairstyle item
        document.querySelectorAll('.hairstyle-item').forEach(item => {
            item.classList.remove('selected');
        });
        event.currentTarget.classList.add('selected');
    }
}

function copyHairstylePrompt() {
    const tab = currentHairstyleTab;
    const promptPrefix = tab === 'woman' ? 'A beautiful Korean actress with' : 'Korean man with';
    const promptSuffix = tab === 'woman' ? 'hair style with blonde color' : 'haircut';
    const promptText = `${promptPrefix} { ${selectedHairstyle} } ${promptSuffix}`;

    const textarea = document.createElement('textarea');
    textarea.value = promptText;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        const btn = event.currentTarget;
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" style="width: 16px; height: 16px; margin-right: 5px;"></i>복사됨!';
        btn.classList.add('copied');

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.classList.remove('copied');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 2000);
    } catch (err) {
        console.error('복사 실패:', err);
    }

    document.body.removeChild(textarea);
}

// Display results
function displayAifiGeneratedImage(type, base64) {
    const resultDiv = document.getElementById(`${type}-result`);
    resultDiv.innerHTML = `
        <div class="aifi-result">
            <img src="data:image/jpeg;base64,${base64}" class="aifi-result-image">
            <div style="margin-top: 15px;">
                <button class="button aifi-button" onclick="downloadAifiImage('${base64}')">
                    이미지 다운로드
                </button>
            </div>
        </div>
    `;
}

function displayAifiPromptResult(type, prompt) {
    const resultDiv = document.getElementById(`${type}-result`);
    resultDiv.innerHTML = `
        <div class="aifi-result">
            <div class="aifi-result-text">${prompt.replace(/\n/g, '<br>')}</div>
            <div style="margin-top: 15px;">
                <button class="button aifi-button" onclick="copyAifiToClipboard('${btoa(prompt)}')">
                    클립보드에 복사
                </button>
            </div>
        </div>
    `;
}

// 이미지 결과 표시 함수 추가
function displayAifiImageResult(type, imageUrl) {
    const resultDiv = document.getElementById(`${type}-result`);
    resultDiv.style.border = 'none';
    resultDiv.style.background = 'transparent';
    resultDiv.style.padding = '0';
    resultDiv.innerHTML = `
        <div style="flex: 1; display: flex; flex-direction: column;">
            <img src="${imageUrl}" style="width: 100%; height: 100%; object-fit: contain; border-radius: 10px; flex: 1;">
        </div>
        <div style="display: flex; gap: 10px; justify-content: center; margin-top: 20px;">
            <button class="button aifi-button" onclick="downloadAifiImage('${imageUrl}')">
                다운로드
            </button>
            <button class="button aifi-button aifi-button-secondary" onclick="copyAifiImageUrl('${imageUrl}')">
                URL 복사
            </button>
        </div>
    `;
}

// 이미지 다운로드 함수
function downloadAifiImage(imageUrl) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `aifi-image-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 이미지 URL 복사 함수
function copyAifiImageUrl(imageUrl) {
    const textarea = document.createElement('textarea');
    textarea.value = imageUrl;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showAifiAlert('success', 'URL이 클립보드에 복사되었습니다.');
    } catch (err) {
        showAifiAlert('error', 'URL 복사에 실패했습니다.');
    }

    document.body.removeChild(textarea);
}

function copyAifiToClipboard(base64Text) {
    const text = atob(base64Text);
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showAifiAlert('success', '클립보드에 복사되었습니다!');
    } catch (err) {
        showAifiAlert('error', '복사에 실패했습니다.');
    }

    document.body.removeChild(textarea);
}

function downloadAifiImage(base64) {
    const link = document.createElement('a');
    link.href = `data:image/jpeg;base64,${base64}`;
    link.download = `generated-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// AIFI Modal Functions
function testAifiApi() {
    const testBtn = document.getElementById('test-api-btn');
    const apiKey = document.getElementById('modal-api-key').value.trim();

    if (!apiKey) {
        updateApiStatus('API 키를 입력해주세요', 'error');
        return;
    }

    testBtn.disabled = true;
    testBtn.innerHTML = '<i data-lucide="loader" style="width: 16px; height: 16px; animation: spin 1s linear infinite;"></i><span>테스트 중...</span>';

    // Simple validation
    let isValid = apiKey.length > 10; // Basic length check
    let statusMessage = isValid ? 'API 키가 정상적으로 연결되었습니다.' : 'API 키 형식을 확인해주세요';

    setTimeout(() => {
        updateApiStatus(statusMessage, isValid ? 'success' : 'error');
        testBtn.disabled = false;
        testBtn.innerHTML = '<i data-lucide="zap" style="width: 16px; height: 16px;"></i><span>연결 테스트</span>';

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }, 1500);
}

function updateApiStatus(message, type = 'info') {
    const statusEl = document.getElementById('api-status-text');
    if (statusEl) {
        statusEl.textContent = message;
        statusEl.className = 'status-value';

        if (type === 'success') {
            statusEl.style.color = '#4CAF50';
        } else if (type === 'error') {
            statusEl.style.color = '#f44336';
        } else {
            statusEl.style.color = '#ff6b6b';
        }
    }
}

// ============= 실습과제 관련 함수 =============
function displayPracticeContent() {
    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    // Hide pagination
    if (pagination) {
        pagination.style.display = 'none';
    }

    let html = `
        <div class="content-container practice-container">
            <div class="content-header">
                <h2 class="content-title">${currentData.title}</h2>
                <span class="content-subtitle">${currentData.koreanTitle}</span>
            </div>

            <!-- Description -->
            <div class="content-section-box">
                <p class="section-text">${currentData.description}</p>
            </div>

            <!-- Practice Layout: Video + Prompt -->
            <div class="practice-layout">
                <!-- Video Section -->
                <div class="practice-video-section">
                    <h3 class="section-title">참고 영상</h3>
                    <div class="video-container">
                        <video
                            src="${currentData.videoUrl}"
                            controls
                            class="practice-video"
                            onclick="openVideoFullscreen(this)">
                        </video>
                    </div>
                </div>

                <!-- Prompt Section -->
                <div class="practice-prompt-section">
                    <div class="prompt-header">
                        <h3 class="section-title">예시 프롬프트</h3>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            <button class="copy-prompt-btn" onclick="copyPracticePrompt()">
                                <i data-lucide="copy" style="width: 16px; height: 16px; margin-right: 5px;"></i>
                                복사
                            </button>
                            <button class="copy-prompt-btn" onclick="copyCustomPrompt()" style="background: linear-gradient(135deg, #4caf50, #45a049);">
                                <i data-lucide="scissors" style="width: 16px; height: 16px; margin-right: 5px;"></i>
                                1단계
                            </button>
                            <button class="copy-prompt-btn" onclick="copyCustomInstructionsPrompt()" style="background: linear-gradient(135deg, #ff9800, #f57c00);">
                                <i data-lucide="plus-circle" style="width: 16px; height: 16px; margin-right: 5px;"></i>
                                2단계
                            </button>
                        </div>
                    </div>
                    <div class="prompt-container">
                        <pre class="practice-prompt" id="practice-prompt">${currentData.prompt}</pre>
                    </div>
                </div>
            </div>

            <!-- 실습과제 #2 섹션 -->
            <div class="practice-exercises-section">
                <h3 class="section-title">실습과제 #2</h3>
                <div class="exercise-grid">
                    <div class="exercise-item">
                        <h4 class="exercise-title">햄스터 돈가스먹방</h4>
                        <p class="exercise-description">귀여운 햄스터가 돈가스를 먹는 먹방 영상을 만드는 실습과제입니다.</p>
                        <button class="exercise-btn" onclick="showContent('hamster-video')">
                            <i data-lucide="play" style="width: 16px; height: 16px; margin-right: 5px;"></i>
                            실습하기
                        </button>
                    </div>
                    <div class="exercise-item">
                        <h4 class="exercise-title">악어 국수먹방</h4>
                        <p class="exercise-description">우아한 악어가 국수를 먹는 독특한 먹방 영상을 만드는 실습과제입니다.</p>
                        <button class="exercise-btn" onclick="showContent('crocodile-video')">
                            <i data-lucide="play" style="width: 16px; height: 16px; margin-right: 5px;"></i>
                            실습하기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

    contentArea.innerHTML = html;

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function copyPracticePrompt() {
    const promptText = currentData.prompt;

    const textarea = document.createElement('textarea');
    textarea.value = promptText;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');

        // Update button text
        const btn = event.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" style="width: 16px; height: 16px; margin-right: 5px;"></i>복사완료!';
        btn.classList.add('copied');

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 2000);
    } catch (err) {
        console.error('복사 실패:', err);
    }

    document.body.removeChild(textarea);
}

function copyCustomPrompt() {
    // 1단계 버튼을 누르면 복사할 텍스트
    const textToCopy = `커스텀 영상 만들자

실제 VEO AI에 직접 입력하실 수 있는 '핵심 프롬프트' 부분(prompt_object_v6의 내용)만

출력해줘

즉 프롬프트는 prompt_object_v6 --> 이 코드 다음으로

{

"core_module": { ---> 이렇게 시작해`;

    copyToClipboardWithFeedback(textToCopy);
}

function copyToClipboardWithFeedback(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        // Update button text
        const btn = event.currentTarget;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i data-lucide="check" style="width: 16px; height: 16px; margin-right: 5px;"></i>복사완료!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.classList.remove('copied');
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 2000);
    } catch (err) {
        console.error('복사 실패:', err);
    }
    document.body.removeChild(textarea);
}

function copyCustomInstructionsPrompt() {
    // 커스텀 지침만 복사 (예시프롬프트 제외)
    const customInstructions = `1. 대사: 나는 하늘을 날고 있는 슈퍼고슴도치 하루오프다

2. 목소리 톤 : 귀여운 10대의 소년의 목소리

3. 영상길이 : 8초 이내`;

    copyToClipboardWithFeedback(customInstructions);
}

function openVideoFullscreen(videoElement) {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) { // Firefox
        videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) { // IE/Edge
        videoElement.msRequestFullscreen();
    }
}

// Display Banana Content Function
function displayBananaContent() {
    if (!currentData) return;

    const contentArea = document.getElementById('content-area');
    const pagination = document.getElementById('pagination');

    if (!contentArea) return;

    // Hide pagination for tool content
    if (pagination) {
        pagination.style.display = 'none';
    }

    contentArea.innerHTML = `
        <div class="banana-magic-container">
            <div class="magic-prompt-header">
                <h1>마법의프롬프트</h1>
                <p>나노바나나를 이용한 올인원 이미지편집기 구현 가이드</p>
            </div>

            <div class="magic-prompt-content">
                <div class="prompt-text-area">
                    <textarea readonly id="magic-prompt-text">너는 이미지생성과 관련된 전문개발자야 나노바바나를 이용해서 이미지생성, 이미지편집, 이미지합성 탭을 만들어서 올인원 이미지편집기를 만들거야

[1단계] 이미지 생성
이미지생성은 좌측에 이미지프롬프트를 입력하는 창이고 그 아래에는 프롬프트 입력창과 이미지생성버튼이 있어. 그리고 그 우측에는 이미지생성된 결과를 볼 수 있는 창이 있고 이미지는 다운로드 받을 수 있게 다운로드 버튼을 만들어줘.

[2단계] 이미지 편집
이미지편집은 좌측에 이미지업로드 창이 있고 그 아래에는 편집할 내용을 입력하는 프롬프트창이 있고 그아래에는 이미지편집버튼이 있어, 우측에는 이미지편집된 결과를 보여주는 창이 있고 편집된 이미지는 다운로드 받을 수 있게 다운로드 버튼을 만들어줘

[3단계] 이미지 합성
이미지합성은 한줄에 3개의 섹션으로 구성되어서 가장 왼쪽은 기본이미지, 합성이미지, 결과 이미지창을 만들어주고 기본이미지 아래에는 합성하기 버튼을 만들어주고 결과이미지는 합성된 결과를 보여주는 창으로 다운로드 받을 수 있게 다운로드 버튼을 만들어줘.

최종적으로 각 창들의 크기는 통일성을 유지해서 만들어주고 업로드된 이미지는 그 창에 꽉차보이게 해줘
다크테마로 화이트앤 블랙스타일로 만들어주고 아이콘은 루시드 아이콘으로 만들어줘, 모든 제목과 내용은 한글로 만들어줘</textarea>
                    <button class="copy-btn" onclick="copyPromptText('magic-prompt-text')">
                        <i data-lucide="copy"></i>
                        복사하기
                    </button>
                </div>
            </div>
        </div>
    `;

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// 더 이상 필요없는 탭 전환 함수 제거

// Copy Prompt Text Function
function copyPromptText(textareaId) {
    const textarea = document.getElementById(textareaId);
    if (!textarea) return;

    // Select and copy text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');

        // Update button text to show success
        const button = document.querySelector(`[onclick="copyPromptText('${textareaId}')"]`);
        const originalHTML = button.innerHTML;

        button.innerHTML = '<i data-lucide="check"></i>복사완료!';
        button.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';

        setTimeout(() => {
            button.innerHTML = originalHTML;
            button.style.background = '';
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        }, 2000);

    } catch (err) {
        console.error('복사 실패:', err);
        alert('복사에 실패했습니다.');
    }

    // Deselect text
    if (window.getSelection) {
        window.getSelection().removeAllRanges();
    }
}

// Switch team tab function
function switchTeamTab(teamKey) {
    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('.tab-button');
    allTabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Add active class to clicked tab
    const clickedTab = document.querySelector(`.tab-button[data-team="${teamKey}"]`);
    if (clickedTab) {
        clickedTab.classList.add('active');
    }

    // Hide all team contents
    const allTeamContents = document.querySelectorAll('.team-content');
    allTeamContents.forEach(content => {
        content.classList.remove('active');
    });

    // Show selected team content
    const selectedContent = document.getElementById(`team-${teamKey}`);
    if (selectedContent) {
        selectedContent.classList.add('active');
    }
}

// Open video modal function
function openVideoModal(videoUrl) {
    if (!videoUrl) {
        alert('영상 URL이 아직 설정되지 않았습니다.');
        return;
    }

    const modal = document.getElementById('video-modal');

    if (modal) {
        // Check if it's a direct video file (MP4, etc.) or Dropbox link
        if (videoUrl.includes('.mp4') || videoUrl.includes('dropbox.com')) {
            // Create video element for MP4 files
            const modalContent = modal.querySelector('.video-modal-content');
            modalContent.innerHTML = `
                <video id="modal-video-player" controls autoplay style="width: 100%; height: 100%;">
                    <source src="${videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            `;
        } else {
            // Use iframe for YouTube or other embedded content
            const modalContent = modal.querySelector('.video-modal-content');
            let embedUrl = videoUrl;

            // Convert YouTube URL to embed format if necessary
            if (videoUrl.includes('youtube.com/watch')) {
                const videoId = videoUrl.split('v=')[1]?.split('&')[0];
                if (videoId) {
                    embedUrl = `https://www.youtube.com/embed/${videoId}`;
                }
            } else if (videoUrl.includes('youtu.be/')) {
                const videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0];
                if (videoId) {
                    embedUrl = `https://www.youtube.com/embed/${videoId}`;
                }
            }

            modalContent.innerHTML = `
                <iframe id="modal-video" class="modal-video-iframe" src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
            `;
        }

        modal.style.display = 'flex';
    }
}

// Close video modal function
function closeVideoModal() {
    const modal = document.getElementById('video-modal');

    if (modal) {
        modal.style.display = 'none';

        // Clear modal content to stop video playback
        const modalContent = modal.querySelector('.video-modal-content');
        if (modalContent) {
            modalContent.innerHTML = '';
        }
    }
}

// Copy VEO prompt to clipboard
function copyVeoPrompt(promptIndex) {
    if (!currentData || !currentData.prompts || !currentData.prompts[promptIndex]) {
        alert('프롬프트를 찾을 수 없습니다.');
        return;
    }

    const promptContent = currentData.prompts[promptIndex].content;

    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = promptContent;
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');

        // Show success feedback
        const button = event.target.closest('.copy-prompt-btn');
        if (button) {
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i data-lucide="check"></i><span>복사됨!</span>';
            button.style.background = 'linear-gradient(135deg, #4caf50, #45a049)';

            // Reset button after 2 seconds
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.style.background = '';
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }, 2000);
        }
    } catch (err) {
        alert('복사에 실패했습니다.');
        console.error('Copy failed:', err);
    }

    // Remove the temporary textarea
    document.body.removeChild(textarea);
}

// View full prompt in modal
function viewFullPrompt(promptIndex) {
    if (!currentData || !currentData.prompts || !currentData.prompts[promptIndex]) {
        alert('프롬프트를 찾을 수 없습니다.');
        return;
    }

    const prompt = currentData.prompts[promptIndex];

    // Create modal for full prompt view
    const modal = document.createElement('div');
    modal.className = 'prompt-modal';
    modal.innerHTML = `
        <div class="prompt-modal-content">
            <div class="prompt-modal-header">
                <h2>${prompt.title}</h2>
                <button class="modal-close-btn" onclick="this.closest('.prompt-modal').remove()">×</button>
            </div>
            <div class="prompt-modal-body">
                <pre class="full-prompt-text">${prompt.content}</pre>
            </div>
            <div class="prompt-modal-footer">
                <button class="copy-full-prompt-btn" onclick="copyFullPrompt('${promptIndex}')">
                    <i data-lucide="copy"></i>
                    전체 복사
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Initialize icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Copy full prompt from modal
function copyFullPrompt(promptIndex) {
    copyVeoPrompt(parseInt(promptIndex));
    // Close modal after copying
    document.querySelector('.prompt-modal')?.remove();
}

// ============= Expert Course Password Functions =============

// Show expert password modal
function showExpertPasswordModal() {
    const modal = document.getElementById('expert-password-modal');
    const input = document.getElementById('expert-password-input');
    const error = document.getElementById('password-error');

    if (modal) {
        modal.style.display = 'flex';
        if (input) {
            input.value = '';
            input.focus();
        }
        if (error) {
            error.style.display = 'none';
        }
    }
}

// Close expert password modal
function closeExpertPasswordModal() {
    const modal = document.getElementById('expert-password-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Verify expert password
function verifyExpertPassword() {
    const input = document.getElementById('expert-password-input');
    const error = document.getElementById('password-error');

    if (!input) return;

    const password = input.value.trim();

    if (password === EXPERT_PASSWORD) {
        // Password correct
        expertCourseUnlocked = true;
        closeExpertPasswordModal();

        // Open expert category
        const category = document.getElementById('expert-category');
        const icon = document.getElementById('expert-category-icon');

        if (category) {
            category.style.display = 'block';
            if (icon) icon.style.transform = 'rotate(180deg)';
        }
    } else {
        // Password incorrect
        if (error) {
            error.style.display = 'block';
        }
        input.value = '';
        input.focus();
    }
}

// Handle Enter key press in password input
function handleExpertPasswordKeyPress(event) {
    if (event.key === 'Enter') {
        verifyExpertPassword();
    }
}
