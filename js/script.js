document.addEventListener('DOMContentLoaded', () => {
    // --- (Код для счетчиков полностью удален) ---

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
    sections.forEach(section => { observer.observe(section); });

    // --- ВЫДЕЛЕНИЕ АКТИВНОЙ ССЫЛКИ В МЕНЮ ---
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const activeLink = document.querySelector(`nav a[href="${currentPage}"]`);
    if (activeLink) { activeLink.classList.add('active'); }

    // --- ИНИЦИАЛИЗАЦИЯ ГАЛЕРЕИ ---
    if (document.getElementById('cheat-gallery')) { new SimpleLightbox('#cheat-gallery a', { className: 'sl-theme-dark' }); }
    // Проверка для sicko-gallery остается внутри ее HTML файла, что тоже хорошо

    // --- УВЕДОМЛЕНИЕ ДЛЯ СКАЧИВАНИЯ КОНФИГОВ ---
    const configButtons = document.querySelectorAll('.config-download-btn');
    configButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            showNotification('Конфиги скоро будут добавлены на сайт!');
        });
    });
});

window.onload = function() {
    const preloader = document.getElementById('preloader');
    if (preloader) { preloader.classList.add('hidden'); }
};

function showNotification(message) {
    let popup = document.getElementById('notification-popup');
    if (!popup) {
        popup = document.createElement('div');
        popup.id = 'notification-popup';
        document.body.appendChild(popup);
    }
    popup.textContent = message;
    popup.classList.add('show');
    setTimeout(() => { popup.classList.remove('show'); }, 3000);
}
