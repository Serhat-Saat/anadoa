document.addEventListener('DOMContentLoaded', () => {
    // Scroll effect for the sticky navigation
    const nav = document.getElementById('global-nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                // When scrolled, we can enhance the shadow or change opacity if needed
                nav.classList.add('shadow-sm', 'bg-white/10', 'backdrop-blur-sm');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/10', 'backdrop-blur-sm');
            }
        });
    }

});
