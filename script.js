document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Sprawdź zapisaną preferencję motywu lub użyj domyślnego (jasny)
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(savedTheme + '-mode');

    // Ustaw ikonę przycisku na podstawie motywu
    updateThemeIcon(savedTheme);

    // Przełącz motyw po kliknięciu
    themeToggle.addEventListener('click', function() {
        const isDarkMode = body.classList.contains('dark-mode');
        const newTheme = isDarkMode ? 'light' : 'dark';

        body.classList.remove(isDarkMode ? 'dark-mode' : 'light-mode');
        body.classList.add(newTheme + '-mode');

        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // Funkcja aktualizująca ikonę przycisku
    function updateThemeIcon(theme) {
        themeToggle.textContent = theme === 'dark' ? '🌙' : '☀️';
    }
});