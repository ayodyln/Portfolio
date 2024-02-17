import { SiteUtils } from "./SiteUtils.js";

const site = new SiteUtils("body");

// App initialization
window.onload = () => {
  site.pageLoadAnimation();
};
