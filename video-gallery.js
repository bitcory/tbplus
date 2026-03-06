// Video Gallery JavaScript

let currentVideoIndex = 0;
const videos = document.querySelectorAll('.video-item');
const carousel = document.querySelector('.video-carousel');
const indicators = document.querySelectorAll('.indicator-dot');

// Initialize video thumbnails
function initializeVideos() {
    const videoElements = document.querySelectorAll('video');

    videoElements.forEach((video, index) => {
        // Load video source
        const src = video.getAttribute('data-src');
        if (src) {
            video.src = src;
        }

        // Create thumbnail from first frame
        video.addEventListener('loadedmetadata', function() {
            // Seek to 1 second to get a better thumbnail
            this.currentTime = 1;
        });

        video.addEventListener('seeked', function() {
            // Create canvas for thumbnail
            const canvas = document.createElement('canvas');
            canvas.width = this.videoWidth;
            canvas.height = this.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(this, 0, 0, canvas.width, canvas.height);

            // Convert to image and set as poster
            canvas.toBlob(function(blob) {
                const url = URL.createObjectURL(blob);
                video.poster = url;
            });

            // Reset video time
            this.currentTime = 0;
        });

        // Add play overlay click handler
        const wrapper = video.closest('.video-wrapper');
        const playOverlay = wrapper.querySelector('.play-overlay');

        playOverlay.addEventListener('click', function() {
            // Pause all other videos
            videoElements.forEach((v, i) => {
                if (i !== index) {
                    v.pause();
                    const otherWrapper = v.closest('.video-wrapper');
                    otherWrapper.classList.remove('playing');
                    const otherOverlay = otherWrapper.querySelector('.play-overlay');
                    if (otherOverlay) {
                        otherOverlay.classList.remove('hidden');
                    }
                }
            });

            // Play current video
            video.play();
            wrapper.classList.add('playing');
            this.classList.add('hidden');
        });

        // Show overlay when video ends or is paused
        video.addEventListener('pause', function() {
            wrapper.classList.remove('playing');
            playOverlay.classList.remove('hidden');
        });

        video.addEventListener('ended', function() {
            wrapper.classList.remove('playing');
            playOverlay.classList.remove('hidden');
        });

        // Hide overlay when video plays
        video.addEventListener('play', function() {
            wrapper.classList.add('playing');
            playOverlay.classList.add('hidden');
        });
    });
}

// Scroll to specific video
function scrollToVideo(index) {
    if (index < 0 || index >= videos.length) return;

    currentVideoIndex = index;
    const videoItem = videos[index];

    // Scroll to the video
    videoItem.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });

    // Update indicators
    updateIndicators();
}

// Update scroll indicators
function updateIndicators() {
    indicators.forEach((dot, index) => {
        if (index === currentVideoIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Scroll gallery left or right
function scrollGallery(direction) {
    if (direction === 'left') {
        currentVideoIndex = Math.max(0, currentVideoIndex - 1);
    } else {
        currentVideoIndex = Math.min(videos.length - 1, currentVideoIndex + 1);
    }
    scrollToVideo(currentVideoIndex);
}

// Handle scroll indicator clicks
indicators.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        scrollToVideo(index);
    });
});

// Handle scroll events to update indicators
let scrollTimeout;
carousel.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        // Find which video is currently in view
        const carouselRect = carousel.getBoundingClientRect();
        const carouselCenter = carouselRect.left + carouselRect.width / 2;

        videos.forEach((video, index) => {
            const videoRect = video.getBoundingClientRect();
            const videoCenter = videoRect.left + videoRect.width / 2;

            if (Math.abs(videoCenter - carouselCenter) < videoRect.width / 2) {
                currentVideoIndex = index;
                updateIndicators();
            }
        });
    }, 100);
});

// Handle keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        scrollGallery('left');
    } else if (e.key === 'ArrowRight') {
        scrollGallery('right');
    }
});

// Toggle menu sections (for sidebar)
function toggleSection(sectionId) {
    const items = document.getElementById(sectionId + '-items');
    const chevron = document.getElementById(sectionId + '-chevron');

    if (items && chevron) {
        if (items.style.display === 'none' || !items.style.display) {
            items.style.display = 'block';
            chevron.style.transform = 'rotate(180deg)';
        } else {
            items.style.display = 'none';
            chevron.style.transform = 'rotate(0deg)';
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeVideos();

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Open AIFI info section by default
    const aifiItems = document.getElementById('aifi-info-items');
    const aifiChevron = document.getElementById('aifi-info-chevron');
    if (aifiItems && aifiChevron) {
        aifiItems.style.display = 'block';
        aifiChevron.style.transform = 'rotate(180deg)';
    }
});

// Handle touch gestures for mobile
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swiped left
            scrollGallery('right');
        } else {
            // Swiped right
            scrollGallery('left');
        }
    }
}

// Lazy loading for videos
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const video = entry.target.querySelector('video');
            if (video && !video.src && video.getAttribute('data-src')) {
                video.src = video.getAttribute('data-src');
                video.load();
            }
        }
    });
}, observerOptions);

// Observe all video items
videos.forEach(videoItem => {
    videoObserver.observe(videoItem);
});