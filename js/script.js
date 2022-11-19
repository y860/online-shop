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

document.querySelector('#menu-btn').onclick =() =>{
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