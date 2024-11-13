const btnElement = document.querySelector("#theBtn");
const navElement = document.querySelector("#theNav");

btnElement.addEventListener("click", () => {
  btnElement.classList.toggle("open");
  navElement.classList.toggle("open");
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: 'slide',
    speed: 2000,
    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });