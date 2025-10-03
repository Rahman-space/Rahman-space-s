<script>
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links a");

    // Toggle sidebar on ☰ click
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Close sidebar when a link is clicked
    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  });
</script>
