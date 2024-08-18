var swiper = new Swiper(".slider-contant", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
 
  });
    var swiper = new Swiper(".testimonial-member", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



    const navEl = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 40) {
        navEl.classList.add('scroll');
    }else if (window.scrollY < 40) {
        navEl.classList.remove('scroll')
    }
});
const logoAl = document.querySelector('.navbar-brand');
const logo = document.querySelector (".logo")

window.addEventListener('scroll', () => {
 if (window.scrollY >= 40) {
  logoAl.style.color = "#2c57e4";

  logo.style.color = "#fff"
  logo.style.background = "#2c57e4"
 } else {
  logoAl.style.color = "#fff";

  logo.style.color = "#2c57e4"
   logo.style.background  = "#fff"
 }
});

// scroll to top 
var popup = document.querySelector(".scroll-to-top");

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 40) {

    popup.style.opacity = "1";
  
  } else {
    popup.style.opacity = ".5";
 
  
  }
 });
 navbar = document.querySelector(".navbar-nav").querySelectorAll("a");

 navbar.forEach(element => {
  element.addEventListener("click", function(){
    navbar.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
    console.log(navbar);
  });
 });
 const text = document.querySelector(".text-all");

 const textLoad = () =>  {
  setTimeout(() => {
    text.textContent = 'Creative Agency';
  }, 0);
  setTimeout(() => {
    text.textContent = 'Free Icons Fonts';
  }, 4000);
  setTimeout(() => {
    text.textContent = 'Beautiful Design';
  }, 8000);

 
 
 } 
textLoad();

$(document).ready(function() {
  var scrollLink = $('.scrolly');

  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    })
  })
});

$("html").niceScroll({
  cursorapacitymin: "15",
  cursorcolor: "#2C57E4",
  cursorwidth: "7px",
  scrollspeed:"20",
  mousescrollstep :"50"
});
