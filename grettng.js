const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const USER_LS = "currentUser" // 현재 로그인한 사용자를 가져올 수 있다
const greeting = document.querySelector(".js-greetings");
const SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem (USER_LS, text); // localStorage에 입력받은 유저값 저장
}

function handleSubmit(event){
    event.preventDefault(); // Defalut인 기본동작을 막음 즉, 엔터를 눌러도 새로고침이 일어나지 않음
    const currentValue = input.value;
    paintGreeting(currentValue); // 유저에게 입력받은 값을 호출함
    saveName(currentValue); // event가 일어났을 때 saveName 함수 호출
}

function askForName () {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName(); //currentUser가 없을 경우 askForName 함수를 호출함

    } else{
        paintGreeting(currentUser); // cureentUser에 유저 정보가 있다면 paintGreeting 함수 호출

    }
}


function init(){

    loadName();
}

init();