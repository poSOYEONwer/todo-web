/*
localStorage에 사용자의 테마 저장
laptopBtn 누르면 light 모드, dark 모드 전환(local strorage 값 변경)
light mode일 땐 style-light, dark mode일 땐 style-dark 가져옴
*/
const THEME_KEY = "current_theme";
const LIGHT_MODE = "light_mode";
const DARK_MODE = "dark_mode";
const linkCss = document.querySelector("#link-css");
let currentTheme = localStorage.getItem(THEME_KEY);
const laptopBtn = document.querySelector("#laptopBtn");

userTheme();

function userTheme() {
    if (currentTheme === null) {
        currentTheme = LIGHT_MODE; // 초기 설정 light mode
    } else if (currentTheme === LIGHT_MODE) {
        linkCss.setAttribute('href', "CSS/style_light.css");
    } else {
        linkCss.setAttribute('href', "CSS/style_dark.css")
    }
}

function toggleTheme(e) {
    e.preventDefault();
    if (currentTheme === LIGHT_MODE) {
        linkCss.setAttribute('href', "CSS/style_dark.css");
        localStorage.setItem(THEME_KEY, DARK_MODE);
    } else {
        linkCss.setAttribute('href', "CSS/style_light.css")
        localStorage.setItem(THEME_KEY, LIGHT_MODE);
    }
}   

laptopBtn.addEventListener("click", toggleTheme);