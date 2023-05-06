  // for-responsive menu
  $(document).ready(function() {
    $(".nav-menu").click(function() {
      $(".nav-menu").toggleClass("active");
      $(".nav").toggleClass("active");
    });
  });

  const boxes = document.querySelectorAll('#box');

  window.addEventListener('scroll', slideBoxes);
  
  slideBoxes();
  
  function slideBoxes() {
      const triggerBottom = window.innerHeight/ 5 * 4;
  
      boxes.forEach(box => {
          const boxTop = box.getBoundingClientRect().top;
  
          if (boxTop < triggerBottom) {
              box.classList.add('show')
          } else {
              box.classList.remove('show')
          }
      })
  }