var checkbox = document.querySelector("input[name=theme]");
var switch_icon = document.getElementById("switch_icon");

checkbox.addEventListener("change", function() {
  if (this.checked) {
    transition();
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    transition();
    document.documentElement.setAttribute("data-theme", "light");
  }
});

var transition = function() {
  document.documentElement.classList.add("transition");
  window.setTimeout(function() {
    document.documentElement.classList.remove("transition");
  }, 1000);
};

switch_icon.addEventListener("click", function() {
  switch_icon.classList.toggle("fa-sun");
});
