document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.fade-down-header');

    function fadeHeader() {
      const rect = header.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        header.classList.add('visible');
      }
    }

    window.addEventListener('scroll', fadeHeader);
    fadeHeader(); // Run once on page load
  });