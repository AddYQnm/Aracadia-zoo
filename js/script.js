let login = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector(".header .navbar");

document.querySelector('#menu-btn').onclick = () =>{
    login.classList.remove('active');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    login.classList.remove('active');
    navbar.classList.remove('active');
}

var swiper = new Swiper(".gallery-slider", {
    grabCursor:true,
    loop:true,
    centeredSlides:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView:1,
        },
        700:{
            slidesPerView:2,
        },
    }
})





function showDetails(habitatId) {
    var details = document.getElementsByClassName('habitat-details');
    for (var i = 0; i < details.length; i++) {
        details[i].style.display = 'none';
    }
    document.getElementById(habitatId).style.display = 'block';
    window.scrollTo(0, document.getElementById(habitatId).offsetTop);
}
function closeDetails(habitatId) {
    document.getElementById(habitatId).style.display = 'none';
}