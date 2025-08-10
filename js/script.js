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
        new SimpleLightbox('#cheat-gallery a', { className: 'sl-theme-dark' });
    }
    if (document.getElementById('sicko-gallery')) {
        // Проверяем, существует ли галерея, прежде чем инициализировать
    }

    // --- УВЕДОМЛЕНИЕ ДЛЯ СКАЧИВАНИЯ КОНФИГОВ ---
    const configButtons = document.querySelectorAll('.config-download-btn');
    configButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Отменяем стандартное действие ссылки
            showNotification('Конфиги скоро будут добавлены на сайт!');
        });
    });

});

// --- ЛОГИКА ПРЕЛОАДЕРА ---
window.onload = function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('hidden');
    }
};

// --- ФУНКЦИЯ ДЛЯ ПОКАЗА УВЕДОМЛЕНИЙ ---
function showNotification(message) {
    let popup = document.getElementById('notification-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'notification-popup';
        document.body.appendChild(popup);
    }

    popup.textContent = message;
    popup.classList.add('show');

    // Скрываем уведомление через 3 секунды
    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
}
