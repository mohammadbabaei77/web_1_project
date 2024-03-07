      var swiper = new Swiper(".mystory", {
        slidesPerView: 12.5,
        spaceBetween: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
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

      var swiper = new Swiper(".myamazing", {
        slidesPerView: 7.3,
        spaceBetween: 2,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".myfavorits", {
        slidesPerView: 9.5,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".mysellers", {
        slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      let openLocation=document.querySelector(".location").addEventListener("click",function(){
        document.querySelector(".mudal").style.display="block"
      });

      let closeLocation=document.querySelector(".mudal__exit").addEventListener("click",function(){
        document.querySelector(".mudal").style.display="none"
      });



      let openFooter=document.querySelector(".footer__open").addEventListener("click",function(){
        document.querySelector(".footer__open").style.display="none"
        document.querySelector(".footer__close").style.display="flex"
        document.querySelector(".light").style.opacity="1"
        document.querySelector(".lighter").style.opacity="1"
        document.querySelector(".hide").style.display="block"
        // document.getElementsByClassName(".light").style.opacity="1";
      });

      let closeFooter=document.querySelector(".footer__close").addEventListener("click",function(){
        document.querySelector(".footer__open").style.display="flex"
        document.querySelector(".footer__close").style.display="none"
        document.querySelector(".light").style.opacity="0.7"
        document.querySelector(".lighter").style.opacity="0.3"
        document.querySelector(".hide").style.display="none"
      });

      // Window.onload = function(){
      //   var a = document.getElementById("a");
      //   a.style.opacity="1";
      // }