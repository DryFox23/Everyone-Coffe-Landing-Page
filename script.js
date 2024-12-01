AOS.init({
    once: true // animate only once
  });

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const isTop = window.scrollY < 100;
    
    if (isTop) {
      navbar.classList.add('transparent');
      navbar.classList.remove('scrolled');
    } else {
      navbar.classList.remove('transparent');
      navbar.classList.add('scrolled');
    }
  });
  
  // Set initial state
  window.dispatchEvent(new Event('scroll'));


