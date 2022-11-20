let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick =() =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    LoginForm.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick =() =>{
    shoppingCart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    LoginForm.classList.remove('active');
}
let LoginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick =() =>{
    LoginForm.classList.toggle('active');
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
}
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bars').onclick =() =>{
    navbar.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    LoginForm.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    LoginForm.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 1000,
        disableOnInteraction:false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });