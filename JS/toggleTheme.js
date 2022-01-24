/*

*/

const body = document.body;
const laptopBtn = document.querySelector("#icon-btn");
const THEME_LIGHT = "theme_light";

function toggleTheme(e) {
    e.preventDefault();
    body.classList.toggle("theme-light");
}

laptopBtn.addEventListener("click",toggleTheme);


/*
const body = document.body;
const laptopBtn = document.querySelector("#laptopBtn");
const THEME_LIGHT = "theme_light";
const THEME_DARK = "theme_dark";
const THEME_KEY = "current_theme";
let currentTheme = localStorage.getItem(THEME_KEY);

userTheme();

function userTheme() {
    if (currentTheme === null) {
        currentTheme = LIGHT_MODE; // 초기 설정 light mode
        localStorage.setItem(THEME_KEY,currentTheme);
    } else if (currentTheme === DARK_MODE) {
        body.classList.remove("theme-light");
    }   
}
function toggleTheme(e) {
    e.preventDefault();
    body.classList.toggle("theme-light");
}

laptopBtn.addEventListener("click",toggleTheme);
*/