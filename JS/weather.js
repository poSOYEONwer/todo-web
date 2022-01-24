
function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const API_KEY = "4c89cc1e87ad1b06b852f865bb1bdd48";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you")
}
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);