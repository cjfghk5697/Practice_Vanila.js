const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//img element 요소 만들기
const bgImage = document.createElement("img");
//경로 설정
bgImage.src = `img/${chosenImage}`;
//bg 설정
document.body.appendChild(bgImage);