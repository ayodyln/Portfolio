import { SiteUtils } from "./SiteUtils.js"

const site = new SiteUtils('body')
console.log(site)

// App initialization
window.onload = () => {
  site.pageLoadAnimation()
}
// site.observer()

// document.addEventListener('DOMContentLoaded', function() {
//   const sections = document.querySelectorAll('.sticky-element');

//   sections.forEach(section => {
//     section.addEventListener('click', () => {
//       section.scrollIntoView({ behavior: 'smooth' });
//     });
//   });
// });
