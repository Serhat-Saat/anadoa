document.addEventListener('DOMContentLoaded', () => {
    const backToTop = document.getElementById('backToTop');
    const stickyBar = document.getElementById('sticky-buy-bar');

    if (backToTop || stickyBar) {
        const handleScroll = () => {
            const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
            const isScrolled = scrollY > 350;

            if (backToTop) {
                if (isScrolled) {
                    backToTop.classList.remove('opacity-0', 'pointer-events-none');
                    backToTop.classList.add('opacity-100', 'pointer-events-auto');
                } else {
                    backToTop.classList.add('opacity-0', 'pointer-events-none');
                    backToTop.classList.remove('opacity-100', 'pointer-events-auto');
                }
            }

            if (stickyBar) {
                if (isScrolled) {
                    stickyBar.classList.add('is-visible');
                    stickyBar.classList.remove('translate-y-full', 'opacity-0');
                    stickyBar.classList.add('translate-y-0', 'opacity-100');
                } else {
                    stickyBar.classList.remove('is-visible');
                    stickyBar.classList.add('translate-y-full', 'opacity-0');
                    stickyBar.classList.remove('translate-y-0', 'opacity-100');
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
    }

    if (backToTop) {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});