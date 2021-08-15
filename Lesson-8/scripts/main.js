function showMenu() {
    var intViewportWidth = window.innerWidth;
    var menu = document.querySelector(".navigation");
    var menuToggler = document.getElementsByClassName("menu__toggler")[0];

    if (intViewportWidth <= 680) {
      menuToggler.style.display = "flex";
      menu.classList.add("menu_vertical");
    } else {
      menuToggler.style.display = "none";
      menu.classList.remove("menu_vertical");
    }
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    showMenu();
  });

  window.addEventListener('resize', function(event) {
    showMenu();
  }, true);

  function menuToggler() {
    var menu = document.querySelector(".navigation");
    var menuToggler = document.querySelector(".menu__toggler");

    menu.classList.toggle("opened");
    menuToggler.classList.toggle("opened");
  }