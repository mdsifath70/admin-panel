/* ============== all js code here ================ */

"use strict";

// nav menu list active
let menuList = document.querySelectorAll('.navigation ul li');
function removeActiveClass() {
    menuList.forEach((menu) => {    
        menu.classList.remove('active');
    });
}
menuList.forEach((menu) => {    
    menu.addEventListener('click', function(){
        removeActiveClass();
        this.classList.add('active');
    });
});

// toggle element select
let toggle = document.getElementsByClassName("toggle")[0];
let navigation = document.getElementsByClassName("navigation")[0];
let main = document.getElementsByClassName("main")[0];

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
});
