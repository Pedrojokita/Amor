window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
    } else {
        header.style.boxShadow = 'none';
    }
});
