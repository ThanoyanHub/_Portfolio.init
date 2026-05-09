// Initialize Animations
AOS.init({ duration: 1200, once: true });

// Typing Animation
new Typed('#role-typing', {
    strings: ['FullStack Developer', 'UI/UX Designer', 'Solution Architect'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
    backDelay: 2000
});

// 3D Scroll Animation Logic
window.addEventListener('scroll', () => {
    const scrollElements = document.querySelectorAll('.scroll-3d-element');
    const scrollValue = window.scrollY;

    scrollElements.forEach(el => {
        // Rotates the image slightly based on scroll position
        const rotation = scrollValue * 0.05;
        el.style.transform = `perspective(1000px) rotateY(${rotation}deg) rotateX(${rotation * 0.2}deg)`;
    });
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    themeIcon.className = html.classList.contains('dark') ? 'fas fa-sun' : 'fas fa-moon';
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});

// Apply saved theme
if (localStorage.getItem('theme') === 'dark') {
    html.classList.add('dark');
    themeIcon.className = 'fas fa-sun';
}

setTimeout(() => {
    projectContainer.innerHTML = ''; // Clear loaders
    projects.forEach(p => {
        const card = `
            <div class="group relative bg-white dark:bg-slate-800 p-4 rounded-[2rem] overflow-hidden shadow-xl" data-aos="fade-up">
                <div class="h-64 bg-gradient-to-br ${p.gradient} rounded-[1.5rem] flex items-center justify-center text-white mb-6">
                    <i class="fas fa-code text-6xl opacity-20"></i>
                </div>
                <h4 class="text-2xl font-black mb-2">${p.title}</h4>
                <p class="text-slate-500">${p.tech}</p>
            </div>
        `;
        projectContainer.innerHTML += card;
    });
}, 2000); // 2-second loading delay