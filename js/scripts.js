window.onscroll = function() {stick()};
var siderail = document.getElementById("side-rail");
var siderailPos = siderail.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stick() {
  if (window.pageYOffset > siderailPos) {
    siderail.classList.add("sticky");
  } else {
    siderail.classList.remove("sticky");
  }
}