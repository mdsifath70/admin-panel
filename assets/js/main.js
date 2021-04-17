/* ============== all js code here ================ */

"use strict";

// toggle element select
let toggle = document.getElementsByClassName("toggle")[0];
let navigation = document.getElementsByClassName("navigation")[0];
let main = document.getElementsByClassName("main")[0];

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
    main.classList.toggle("active");
});