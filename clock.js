const clockContainer = document.querySelector(".js-clock"); //js-clock의 자식을 select
const clockTitle =  clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`; //hours, minutes,seconds 가 10이하면 0을 붙여서 출력되도록 하는 구문
  
}

function init(){
getTime();
setInterval(getTime, 1000);
}

init();