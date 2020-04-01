var toggle = document.getElementById("nav_toggle");
var navbar = document.getElementById("nav_list");
toggle.addEventListener("click", function() {
  toggle.classList.toggle("change_toggle");
  navbar.classList.toggle("show_nav");
});
