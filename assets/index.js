import { SiteUtils } from "./SiteUtils.js";

const options = {};

const site = new SiteUtils("body", options);

// App initialization
window.onload = () => {
  site.pageLoadAnimation();
};

