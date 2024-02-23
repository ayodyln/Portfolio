/**
 * @class SiteUtils - A class for site utilities
 */
class SiteUtils {
  constructor(selector, options) {
    this.element = document.querySelector(selector);
    this.options = options;
  }

  pageLoadAnimation() {
    const parent = document.querySelector('[data-element="hero"]');
    const spans = document.querySelectorAll('[data-element="hero"] > div span');
    let heroWordIndex = 0;
    let intervalID;

    const pageLoadBio = this.pageLoadBio.bind();
    const ftuCookieHndlr = this.ftuCookieHndlr.bind();
    const getFTUDates = this.getFTUDates.bind();

    function transitionWords() {
      spans[heroWordIndex].style.animationName = "fadeOut";
      setTimeout(() => {
        if (heroWordIndex === spans.length - 1) {
          clearInterval(intervalID);
          pageLoadBio();
          parent.remove();
          const main = document.querySelector("main");
          main.classList.remove("h-full");
          ftuCookieHndlr("true", getFTUDates);
          return;
        }
        heroWordIndex++;
        spans[heroWordIndex].style.animationName = "fadeIn";
      }, 1000);
    }

    // Set initial word content
    spans[heroWordIndex].style.animationName = "fadeIn";

    // Start transitioning between words
    intervalID = setInterval(transitionWords, 2500);
  }

  pageLoadBio() {
    const bio = document.querySelector('[data-element="bio"]');
    bio.style.display = "initial";
    bio.style.animationName = "bioFadeIn";
  }

  ftuCookieHndlr(value, expire) {
    // First Time User (FTU) cookie handler
    const ftuCookie = `FTU=${value}; expires=${expire}; path=/;`;
    document.cookie = ftuCookie;
  }

  checkFTUCookie() {
    const ftuCookieMatch = decodeURIComponent(document.cookie);
    const cookieArray = ftuCookieMatch.split(";");
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf("FTU=") === 0) {
        return true;
      } else continue;
    }
  }

  getFTUDates() {
    return {
      currentDate: new Date(),
      futureDate: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000),
    };
  }
}

export { SiteUtils };
