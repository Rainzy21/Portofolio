document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.nav-toggler');
    const aside = document.querySelector('.aside');
    const mainContent = document.querySelector('.main-content');
    toggler.addEventListener('click', function() {
        aside.classList.toggle('closed');
        mainContent.classList.toggle('full');
    });
});