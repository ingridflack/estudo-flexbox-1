function toggleDropdown(event) {
  event.preventDefault();

  const navbarToggle = document.getElementById("navbar-toggle");

  if (navbarToggle.className === "topnav") {
    navbarToggle.className += " open";
  } else {
    navbarToggle.className = "topnav";
  }
}

document
  .getElementById("toggleDropdownButton")
  .addEventListener("click", toggleDropdown);
