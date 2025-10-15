
function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

document.addEventListener("click", function(event) {
  const dropdown = document.querySelector(".dropdown");
  const dropdownContent = document.getElementById("dropdownContent");
  
  if (!dropdown.contains(event.target)) {
    dropdownContent.classList.remove("show");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        });
        
        const dropdownContent = document.getElementById("dropdownContent");
        dropdownContent.classList.remove("show");
      }
    });
  });
});
