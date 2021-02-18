const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = "toDos";

function filterFn(toDo) {
  return toDo.id === 1;
}

let toDos = []; // 해야할 일이 생성할 때마다 toDos 배열에 추가함

function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li); // 버튼을 누르면 li list를 지워줌
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //localStorage에서는 오직 String으로만 가져올 수 있기 때문에 JSON의 stringify를 사용하여 Js object를 String으로 변환
}

function paintToDo(text) {
  const li = document.createElement("li"); // li element 생성
  const delBtn = document.createElement("button");
  delBtn.innerHTML = "X";
  delBtn.addEventListener("click", deleteToDo);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  span.innerText = text;
  li.appendChild(delBtn); // li에 delBtn을 자식 노드로 추가함
  li.appendChild(span); // li에 span을 자식 노드로 추가함
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      // forEach를 사용하여 list에 있는 모든 item을 위한 함수를 실행시킨다. {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
