
const postContainer = document.querySelector(".swiper-wrapper");

const fetchData = function () {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then(response => response.json())
    .then(data => {

      data.meals.forEach((meal) => {
        const postElement = document.createElement("div");
        postElement.className = "swiper-slide";

        postElement.innerHTML = `<h1 class="post-title">${meal.idMeal}</h1>`;

        postContainer.appendChild(postElement);
      });

    });
};

fetchData();


var swiper = new Swiper(".mySwiper" ,{
  slidesPerView: 5,
  spaceBetween: 8,
  loop:true,
  grabCursor:true,
  followFinger:true,
  preloadImages:true,
  preventClicks:true,
  autoplay: {
  delay: 1000,

  disableOnInteraction: false,
  },

});


/*
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: false,
    },
  
    autoplay: {
      delay: 1000,
    },


 
  });

  */