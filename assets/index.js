import { SiteUtils } from "./SiteUtils.js";

const options = {};

const site = new SiteUtils("body", options);

// App initialization
window.onload = () => {
  const ftu = site.checkFTUCookie();

  if (ftu) {
    document.querySelector('[data-element="hero"]').remove();
    const main = document.querySelector("main");
    main.classList.remove("h-full");
    site.pageLoadBio();
  } else {
    site.pageLoadAnimation();
  }
};
