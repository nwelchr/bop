document.addEventListener("DOMContentLoaded", function() {

  // background differences for navbar upon scroll
  document.addEventListener('scroll', e => {
    const navbar = document.querySelector('.navbar');
    if (!navbar.classList.contains("sticky") && window.scrollY >= 80) {
      navbar.classList.add("sticky");
    } else if (window.scrollY < 80) {
      navbar.classList.remove("sticky");
    }
  });

  // dropdown navbar fix
  const dropdown = document.querySelector('.dropdown');
  const dropdownMenu = dropdown.querySelector('.dropdown-menu');
  const modalScreen = document.querySelector('.modal-screen');

  dropdown.addEventListener('click', e => {
    e.preventDefault();

    const svg = dropdown.querySelector('svg');
    svg.classList.toggle('fa-angle-down');
    svg.classList.toggle('fa-angle-up');

    dropdownMenu.classList.toggle('clicked');

    modalScreen.classList.toggle('clicked');
  });

});
