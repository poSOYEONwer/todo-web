const images = [
    "1.jpg",
    // "2.jpg",
    "3.jpg",
    // "4.jpg",
    "5.jpg"
];

const randomImg = images[Math.floor(Math.random() * images.length)];
const bgImg = document.createElement("img");
bgImg.src = `images/${randomImg}`;
document.body.appendChild(bgImg);
