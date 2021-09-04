/* ============== all js code here ================ */

"use strict";

// nav menu list active
let menuList = document.querySelectorAll('.navigation ul li');
menuList.forEach((menu) => {
    function menuClassRemove(){
        menu.classList.remove('active');
    }
    menu.addEventListener('click', function(){
        menuClassRemove();
        menu.classList.add('active');
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
