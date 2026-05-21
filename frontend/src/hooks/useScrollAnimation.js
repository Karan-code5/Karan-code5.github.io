import { useEffect } from 'react';

/**
 * Observes all elements with class "animate-on-scroll" and adds "visible"
 * when they enter the viewport. Also watches for dynamically added elements
 * via MutationObserver (e.g. tab-switched content).
 */
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    const observeNew = () => {
      document.querySelectorAll('.animate-on-scroll:not(.observed)').forEach((el) => {
        el.classList.add('observed');
        observer.observe(el);
      });
    };

    const mutationObserver = new MutationObserver(observeNew);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    observeNew();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};

export default useScrollAnimation;
