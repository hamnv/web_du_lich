  // Dat js duoi cung body de load DOM or them code DOM vao

  window.addEventListener("scroll", myFunctionForSticky);
  
  var navbar = document.getElementById("myHeader");
  var sticky = navbar.offsetTop;

  function myFunctionForSticky() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
