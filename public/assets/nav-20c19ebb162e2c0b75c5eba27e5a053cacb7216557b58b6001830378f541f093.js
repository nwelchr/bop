document.addEventListener("DOMContentLoaded", function() {

  // background differences for navbar upon scroll
  document.addEventListener('scroll', e => {
    const navbar = document.querySelector('.navbar-logged-in');
    if (!navbar.classList.contains("sticky") && window.scrollY >= 80) {
      navbar.classList.add("sticky");
    } else if (window.scrollY < 80) {
      navbar.classList.remove("sticky");
    }
  });

  // dropdown navbar fix
});
