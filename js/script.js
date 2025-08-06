document.addEventListener('DOMContentLoaded', () => {

    // --- ЛОГИКА ПЛАВНОГО ПОЯВЛЕНИЯ СЕКЦИЙ ---
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    sections.forEach(section => {
        observer.observe(section);
    });

    // --- ВЫДЕЛЕНИЕ АКТИВНОЙ ССЫЛКИ В МЕНЮ ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const activeLink = document.querySelector(`nav a[href="${currentPage}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // --- ИНИЦИАЛИЗАЦИЯ ГАЛЕРЕИ ---
    if (document.getElementById('cheat-gallery')) {
        new SimpleLightbox('#cheat-gallery a', {
            // ИСПРАВЛЕНИЕ: Принудительно включаем тёмную тему для элементов управления
            className: 'sl-theme-dark',

            // Опциональные настройки для красоты
            animationSpeed: 200,
            fadeSpeed: 250
        });
    }
});

// --- ЛОГИКА ПРЕЛОАДЕРА ---
window.onload = function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
};
