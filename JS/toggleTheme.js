/*
다크모드와 라이트모드의 차이는 색상뿐

구현
localStorage에 사용자의 테마 저장 - initial 라이트모드
버튼 누르면 토글 및 local storage 내용 변경
*/

const body = document.body;
const laptopBtn = document.querySelector("#laptopBtn");
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