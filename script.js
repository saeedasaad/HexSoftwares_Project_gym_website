
// NAVIGATION MENU FUNCTIONALITY
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-menu ul li a");
const sections = document.querySelectorAll("section");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Scroll-based active link highlighting
window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-buttons button");
    const classItems = document.querySelectorAll(".class-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {

            filterButtons.forEach(btn => btn.classList.remove("active"));

            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            classItems.forEach(item => {
                const itemCategory = item.getAttribute("data-category");

                if (filterValue === "all" || itemCategory === filterValue) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

// testimonial-section
const wrapper = document.querySelector('.testimonial-wrapper');
const slides = document.querySelectorAll('.testimonial-slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const circles = document.querySelectorAll('.cricle');
let currentIndex = 0;

function updateSlider() {
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;

    circles.forEach((circle, i) => {
        circle.classList.toggle('active', i === currentIndex);
    });

    prevBtn.classList.toggle('disabled', currentIndex === 0);
    nextBtn.classList.toggle('disabled', currentIndex === slides.length - 1);
}

nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlider();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

circles.forEach(circle => {
    circle.addEventListener('click', () => {
        currentIndex = parseInt(circle.dataset.index);
        updateSlider();
    });
});

updateSlider();

// FAQ Section

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(el => {
            if (el !== item) el.classList.remove("active");
        });

        item.classList.toggle("active");
    });
});

// Contact section - Character count
const message = document.getElementById("message");
const charCount = document.getElementById("charCount");

message.addEventListener("input", () => {
    const count = message.value.length;
    charCount.textContent = `(${count}/500)`;
});

// BACK TO TOP BUTTON
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
    scrollBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
};

// Scroll to top
scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// LOADING SCREEN ANIMATION

window.addEventListener("load", () => {
    const loading = document.getElementById("loading-screen");

    gsap.to(loading, {
        opacity: 0,
        duration: 1,
        delay: 0.8,
        onComplete: () => loading.style.display = "none"
    });
});


// NAVBAR ANIMATION
gsap.from("nav", {
    y: -80,
    opacity: 0,
    duration: 2,
    ease: "power3.out"
});


// HERO SECTION ANIMATION

const tl = gsap.timeline();

tl.from(".hero-content h1", {
    x: -80,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
})
    .from(".hero-content p", {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.3")

    .from(".hero-buttons", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out"
    }, "-=0.4")

    .from(".hero-image img", {
        scale: 1.3,
        opacity: 0,
        duration: 1.4,
        ease: "power2.out"
    }, "-=1");


// SCROLL-REVEAL ANIMATIONS
gsap.utils.toArray(".card, .service-card, .trainer-card, .schedule-day, .plan-card").forEach((item) => {
    gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
        }
    });
});


// SECTION HEADING ANIMATION
gsap.utils.toArray("section h2").forEach((title) => {
    gsap.from(title, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });
});

gsap.utils.toArray("#para").forEach((title) => {
    gsap.from(title, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: title,
            start: "top 90%",
            toggleActions: "play none none reverse"
        }
    });
});



