// ========================================
// GSAP & ScrollTrigger
// ========================================
gsap.registerPlugin(ScrollTrigger);

// ========================================
// Menu Toggle
// ========================================
function initMenu() {
    const toggle = document.querySelector('.nav-toggle');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
    });
    
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('menu-open');
        });
    });
}

// ========================================
// Hero Animations
// ========================================
function initHeroAnimations() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.to('.name-line', {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.15,
        delay: 0.3
    })
    .to('.hero-title', {
        opacity: 1,
        y: 0,
        duration: 0.8
    }, '-=0.6')
    .to('.hero-scroll', {
        opacity: 1,
        duration: 0.6
    }, '-=0.4');
}

// ========================================
// About Animations
// ========================================
function initAboutAnimations() {
    // Text paragraphs
    gsap.utils.toArray('.about-text').forEach((text, index) => {
        gsap.to(text, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: text,
                start: 'top 85%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Skills groups
    gsap.utils.toArray('.skills-group').forEach((group, index) => {
        gsap.to(group, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.skills-section',
                start: 'top 80%',
                toggleActions: 'play none none none'
            }
        });
    });

    // Interests
    gsap.to('.interests-section', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.interests-section',
            start: 'top 85%',
            toggleActions: 'play none none none'
        }
    });
}

// ========================================
// Projects Carousel
// ========================================
function initProjectsCarousel() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.project-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');

    function animateSlide(slide) {
        const index = slide.querySelector('.project-index');
        const name = slide.querySelector('.project-name');
        const desc = slide.querySelector('.project-desc');
        const link = slide.querySelector('.project-link');

        const tl = gsap.timeline();

        tl.to(index, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        })
        .to(name, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')
        .to(desc, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.5')
        .to(link, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out'
        }, '-=0.4');
    }

    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');

        // Animate the slide
        animateSlide(slides[index]);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Animate first slide on scroll
    ScrollTrigger.create({
        trigger: '.projects',
        start: 'top 60%',
        once: true,
        onEnter: () => {
            animateSlide(slides[0]);
        }
    });
}

// ========================================
// Contact Animations
// ========================================
function initContactAnimations() {
    gsap.to('.contact-title', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 60%',
            toggleActions: 'play none none none'
        }
    });

    gsap.utils.toArray('.contact-item').forEach((item, index) => {
        gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.3 + (index * 0.1),
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '.contact',
                start: 'top 60%',
                toggleActions: 'play none none none'
            }
        });
    });
}

// ========================================
// Smooth Scroll
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// Hide Scroll Indicator
// ========================================
function initScrollIndicatorHide() {
    const scrollIndicator = document.querySelector('.hero-scroll');
    
    if (!scrollIndicator) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            gsap.to(scrollIndicator, {
                opacity: 0,
                duration: 0.3
            });
        } else {
            gsap.to(scrollIndicator, {
                opacity: 1,
                duration: 0.3
            });
        }
    });
}

// ========================================
// Nav Background on Scroll
// ========================================
function initNavScroll() {
    const nav = document.querySelector('.nav');
    const contactSection = document.querySelector('.contact');

    window.addEventListener('scroll', () => {
        const contactTop = contactSection.offsetTop;
        const scrollPosition = window.scrollY + 100; // Offset pour déclencher un peu avant

        if (scrollPosition >= contactTop) {
            nav.style.mixBlendMode = 'normal';
            nav.style.color = 'white';
        } else {
            nav.style.mixBlendMode = 'difference';
            nav.style.color = '';
        }
    });
}

// ========================================
// Initialize All
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    initMenu();
    initHeroAnimations();
    initAboutAnimations();
    initProjectsCarousel();
    initContactAnimations();
    initSmoothScroll();
    initScrollIndicatorHide();
    initNavScroll();
});
