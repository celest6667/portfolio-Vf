// ========================================
// Project Page Animations
// ========================================

gsap.registerPlugin(ScrollTrigger);

// ========================================
// Hero Animations
// ========================================
function initProjectHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    
    tl.to('.project-label', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2
    })
    .to('.project-hero .project-title', {
        opacity: 1,
        y: 0,
        duration: 1
    }, '-=0.5')
    .to('.project-subtitle', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '-=0.6')
    .to('.cover-image', {
        opacity: 1,
        y: 0,
        duration: 1
    }, '-=0.4');
}

// ========================================
// Info Animations
// ========================================
function initInfoAnimations() {
    gsap.utils.toArray('.info-item').forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.project-info',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });
}

// ========================================
// Description Animations
// ========================================
function initDescriptionAnimations() {
    gsap.utils.toArray('.description-content p').forEach((p, index) => {
        gsap.to(p, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: p,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });
}

// ========================================
// Initialize All
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initProjectHeroAnimations();
    initInfoAnimations();
    initDescriptionAnimations();
});
