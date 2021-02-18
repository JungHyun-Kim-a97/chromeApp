const body = document.querySelector("body");
const IMG_NUMBER = 6; // IMG가 3개기 때문에

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER); // 0~2까지 총 3개가 랜덤으로 발생 floor는 내림계산
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();
