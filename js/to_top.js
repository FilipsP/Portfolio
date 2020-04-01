button = document.getElementById("to_top_btn");
navbar = document.getElementById("navbar");
button.addEventListener("click", scroll_To_Top);

window.onscroll = function() {
  scroll();
};

function scroll() {
  if (pageYOffset >= 150) {
    button.style.visibility = "visible";
  } else {
    button.style.visibility = "hidden";
  }
}

function scroll_To_Top() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
