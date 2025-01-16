$(document).ready(function () {
  $(".darkmode").click(function () {
    $(".navbar").addClass("dark");
    $(".user").addClass("dark");
    $("#home").addClass("dark");
    $(".links a").addClass("dark");
    $(".navbar a").addClass("dark");
    $(".about").addClass("dark");
    $("#about").addClass("dark");
    $(".skills").addClass("dark");
    // $(".skills-heading h2").addClass("dark");
    // $(".skills-details").addClass("dark");
    $(".project").addClass("dark");
    $(".content").addClass("dark");
    $(".contact-container").addClass("dark");
    $("#contact").addClass("dark");
    $("h2").addClass("dark");
    $("h3").addClass("dark");
    $("p").addClass("dark");
    $("a.btn").addClass("dark");
    $("a.btn:hover").addClass("dark");
    $("footer").addClass("dark");
    $(".darkmode").hide();
    $(".lightmode").show();
  });

  $(".lightmode").click(function () {
    $("*").removeClass("dark");
    $(".lightmode").hide();
    $(".darkmode").show();
  })
});

// for-responsive menu
// $(document).ready(function () {
//   $(".nav-menu").click(function () {
//     $(".nav-menu").toggleClass("active");
//     $(".nav").toggleClass("active");
//   });
// });

    // const menuToggle = document.getElementById('menu-toggle');
    // const navSidebar = document.getElementById('nav-sidebar');

    // menuToggle.addEventListener('click', () => {
    //     navSidebar.classList.toggle('active');
    // });

    const menuToggle = document.getElementById('menu-toggle');
    const navSidebar = document.getElementById('nav-sidebar');
    const backdrop = document.getElementById('backdrop');
    
    // Toggle Sidebar
    menuToggle.addEventListener('click', () => {
        navSidebar.classList.toggle('active');
        backdrop.classList.toggle('active');
    });
    
    // Close Sidebar when clicking the backdrop
    backdrop.addEventListener('click', () => {
        navSidebar.classList.remove('active');
        backdrop.classList.remove('active');
    });

const boxes = document.querySelectorAll('#box');

window.addEventListener('scroll', slideBoxes);

slideBoxes();

function slideBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

