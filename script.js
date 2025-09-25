// Toggle product description on click
document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".menu-grid .item");
  
    items.forEach(item => {
      item.addEventListener("click", () => {
        item.classList.toggle("show-description");
      });
    });
  });
  
  // Shrink header on scroll
  window.onscroll = function() {
    let header = document.querySelector('header');
    if (window.pageYOffset > 50) {
      header.style.padding = "5px 20px";
      header.style.transition = "all 0.3s ease";
    } else {
      header.style.padding = "10px 20px";
      header.style.transition = "all 0.3s ease";
    }
  };
  