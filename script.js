// script.js
document.addEventListener('DOMContentLoaded', () => {

    // Highlight Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');
            const navUrl = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

            if (navUrl) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navUrl.classList.add('active');
                } else {
                    navUrl.classList.remove('active');
                }
            }
        });
    });
});
