import Script from 'next/script'

export function ScrollHighlightScript() {
  const scriptContent = String.raw`
    (function() {
      const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
      };

      const updateActiveLink = (id) => {
        const navLinks = document.querySelectorAll('[data-nav-link]');
        navLinks.forEach((link) => {
          const href = link.getAttribute('data-nav-link');
          const isMobile = link.closest('.md\\:hidden');
          const activeClass = isMobile ? 'nav-link-active' : 'nav-link-active-desktop';
          
          if (href === id) {
            link.classList.add(activeClass);
          } else {
            link.classList.remove(activeClass);
          }
        });
      };

      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = '#' + entry.target.id;
            updateActiveLink(id);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, observerOptions);
      
      const init = () => {
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));
        
        // Initial check for home if at top
        if (window.scrollY < 100) {
          updateActiveLink('#home');
        }
      };

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();
  `;

  return (
    <Script 
      id="scroll-highlight-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: scriptContent }} 
    />
  );
}
