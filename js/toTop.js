toTopBtn = document.getElementById("toTopBtn");

window.onscroll = function() {
  scrollFunction();
};

function toTopFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.onscroll = function() {
  if (pageYOffset >= 400) {
    document.getElementById("toTopBtn").style.visibility = "visible";
  } else {
    document.getElementById("toTopBtn").style.visibility = "hidden";
  }
};
