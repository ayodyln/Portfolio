import { SiteUtils } from "./SiteUtils.js";

const options = {}

const site = new SiteUtils("body");

// App initialization
window.onload = () => {
  site.pageLoadAnimation();
};
