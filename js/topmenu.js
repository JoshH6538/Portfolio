document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("dropdown-toggle");
    const menu = document.getElementById("dropdown-menu");
  
    // ✅ All logic stays inside this block
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        menu.classList.toggle("show");
        document.body.classList.toggle("menu-open");
      });
  
      // ✅ Close menu when a link is clicked
      menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          menu.classList.remove("show");
          document.body.classList.remove("menu-open");
        });
      });
    }
  });
  