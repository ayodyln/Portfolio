/**
 * @class SiteUtils - A class for site utilities
 */
class SiteUtils {
  constructor(selector) {
    this.element = document.querySelector(selector);
  }

  pageLoadAnimation() {
    const parent = document.querySelector('[data-element="hero"]');
    const spans = document.querySelectorAll('[data-element="hero"] > div span');

    let heroWordIndex = 0;
    let intervalID;

    const pageLoadBio = this.pageLoadBio.bind();

    async function transitionWords() {
      // Fade out current word
      spans[heroWordIndex].style.animationName = "fadeOut";
      // Increment index or stop if last word
      if (heroWordIndex === spans.length - 1) {
        clearInterval(intervalID);
        parent.remove();
        pageLoadBio();
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
    intervalID = setInterval(transitionWords, 2500);
  }

  pageLoadBio() {
    console.log("Page load bio");
    const bio = document.querySelector('[data-element="bio"]');
    bio.style.display = "flex";
    bio.style.animationName = "bioFadeIn";
  }
}

export { SiteUtils };
