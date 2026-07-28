document.addEventListener('DOMContentLoaded', () => {
    initTableOfContents();
});

function initTableOfContents() {
    const contentArea = document.querySelector('.blog-content');
    const tocNav = document.getElementById('toc-nav');
    const tocToggle = document.getElementById('toc-toggle');
    const tocChevron = document.getElementById('toc-chevron');

    if (!contentArea || !tocNav) return;

    // Get all H2s in the content
    const headings = contentArea.querySelectorAll('h2');
    if (headings.length === 0) {
        // If no headings, hide the TOC card
        const tocCard = tocNav.closest('.bg-white');
        if (tocCard) tocCard.style.display = 'none';
        return;
    }

    // Clear placeholder content
    tocNav.innerHTML = '';

    // Create a slug helper
    function slugify(text) {
        return text
            .toString()
            .toLowerCase()
            .replace(/\s+/g, '-')           // Replace spaces with -
            .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
            .replace(/\-\-+/g, '-')         // Replace multiple - with single -
            .replace(/^-+/, '')             // Trim - from start
            .replace(/-+$/, '');            // Trim - from end
    }

    // Store map of heading ID to nav link element
    const tocLinks = {};

    headings.forEach((heading, index) => {
        // Generate id if not already present
        if (!heading.id) {
            heading.id = slugify(heading.textContent) || `section-${index}`;
        }

        // Create TOC link item
        const link = document.createElement('a');
        link.href = `#${heading.id}`;
        link.className = 'block transition-all py-1.5 text-ash-light hover:text-gold border-l-2 border-transparent pl-3 text-sm';
        link.textContent = heading.textContent;
        
        // Handle smooth scroll directly in JS (optional, fall back to CSS scroll-smooth)
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.getElementById(heading.id);
            if (targetElement) {
                const headerOffset = 110; // offset for the fixed navbar
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // On mobile, close TOC after clicking a link
                if (window.innerWidth < 1024 && tocToggle) {
                    tocToggle.click();
                }
            }
        });

        tocNav.appendChild(link);
        tocLinks[heading.id] = link;
    });

    // Mobile Accordion toggle
    if (tocToggle && tocChevron) {
        tocToggle.addEventListener('click', () => {
            if (window.innerWidth < 1024) {
                tocNav.classList.toggle('hidden');
                tocChevron.classList.toggle('rotate-180');
            }
        });

        // Ensure we handle window resizing correctly
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                tocNav.classList.remove('hidden');
            } else {
                tocNav.classList.add('hidden');
                tocChevron.classList.remove('rotate-180');
            }
        });
    }

    // Scroll Spy: Track active heading
    const observerOptions = {
        root: null,
        rootMargin: '-120px 0px -60% 0px', // check when heading is in top-third of viewport
        threshold: 0
    };

    let activeHeadingId = null;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                
                // Clear old active style
                if (activeHeadingId && tocLinks[activeHeadingId]) {
                    tocLinks[activeHeadingId].classList.remove('text-gold', 'font-bold', 'border-gold');
                    tocLinks[activeHeadingId].classList.add('text-ash-light', 'border-transparent');
                }

                // Add active style to current link
                if (tocLinks[id]) {
                    tocLinks[id].classList.add('text-gold', 'font-bold', 'border-gold');
                    tocLinks[id].classList.remove('text-ash-light', 'border-transparent');
                    activeHeadingId = id;
                }
            }
        });
    }, observerOptions);

    headings.forEach((heading) => {
        observer.observe(heading);
    });
}
