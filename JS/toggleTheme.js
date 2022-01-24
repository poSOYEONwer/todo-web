
const body = document.body;
const laptopBtn = document.querySelector("#icon-btn");
const THEME_LIGHT = "theme_light";

function toggleTheme(e) {
    e.preventDefault();
    body.classList.toggle("theme-light");
}

laptopBtn.addEventListener("click",toggleTheme);


