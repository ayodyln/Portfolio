/**
 * @class SiteUtils - A class for site utilities
 */
class SiteUtils {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  observer() {
    const stickyElements = document.querySelectorAll(".sticky-element");

    const observer = new IntersectionObserver(
      (entries) => {
        console.log(entries);
        entries.forEach((entry) => {
          this.stopScrollSnop(entry);
          entry.target.classList.toggle("fade-in", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -150px 0px",
      }
    );

    stickyElements.forEach((el) => observer.observe(el));
    observer.observe(
      document.querySelector('section[data-section="experience"]')
    );

    return observer;
  }

  stopScrollSnop(entry) {
    const el = document.querySelector('section[data-section="experience"]');
    if (entry.isIntersecting && entry.target.id === el.id) {
      this.element.style.scrollSnapType = "none";
    }
  }

  pageLoadAnimation() {
    const spans = document.querySelectorAll('[data-element="hero"] > div span');

    let heroWordIndex = 0;
    let intervalID;

    function transitionWords() {
      // Fade out current word
      spans[heroWordIndex].style.animationName = "fadeOut";
      // Increment index or stop if last word
      if (heroWordIndex === spans.length - 1) {
        clearInterval(intervalID);
        return;
      }
      // Fade in next word after a delay
      setTimeout(() => {
        heroWordIndex++;
        spans[heroWordIndex].style.animationName = "fadeIn";
      }, 1000); // Delay between words (1 second in this case)
    }

    // Set initial word content
    spans[heroWordIndex].style.animationName = "fadeIn";

    // Start transitioning between words
    intervalID = setInterval(transitionWords, 3000);
  }
}

export { SiteUtils };
