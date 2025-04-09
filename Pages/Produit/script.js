let lastScrollTop = 0;
const scrollUpDiv = document.getElementById('scroll-up');
const scrollDownDiv = document.getElementById('scroll-down');

window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
        // Scrolling down
        scrollDownDiv.style.display = 'block';
        scrollUpDiv.style.display = 'none';
    } else {
        // Scrolling up
        scrollUpDiv.style.display = 'block';
        scrollDownDiv.style.display = 'none';
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Avoid negative values
});