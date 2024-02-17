/* Hunter's example of initialization.

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});
*/
M.AutoInit();

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function toggleCollapsible(id) {
    var content = document.getElementById(id);
    content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    content.parentElement.classList.toggle('active');
}

function toggleCollapsible(id) {
    var content = document.getElementById(id);
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}


