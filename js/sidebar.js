document.addEventListener('DOMContentLoaded', function () {
  // Get a reference to the animated element
  const animatedElement = document.getElementById('sidebar');

  // Add mouseenter event listener
  animatedElement.addEventListener('mouseenter', function () {
    // Animate the element to slide in from the left
    animatedElement.style.left = '0';
  });

  // Add mouseleave event listener
  animatedElement.addEventListener('mouseleave', function () {
    // Animate the element to slide out to the left
    animatedElement.style.left = '-250px';
  });
});