// Lay div button
var mybutton = document.getElementById("jump-top");

// Tinh toan khoang cach khi cuon trang
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Click vao day de len dau trang web
function jumpTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}