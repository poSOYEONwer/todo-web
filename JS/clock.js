const clock = document.querySelector("#clock");

// 외국에 있으면 외국 시간으로도 나오는지 - 그렇다
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock(); // 애를 먼저 한 번 호출해주고 인터벌 진행 - 애를 먼저 한 번 안하면 00:00:00이 나오고 다음에 아래가 진행됨
setInterval(getClock,1000);

