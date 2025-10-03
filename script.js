<script>
  // Select elements
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  // Toggle menu on button click
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // Close menu when a link is clicked
  links.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
    });
  });
</script>
