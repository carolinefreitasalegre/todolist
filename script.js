const btn = document.getElementById("btn-add");
const input = document.getElementById("inputText");
const ul = document.querySelector("ul");

let doList = [];

function takeList() {
  if (!input.value) {
    alert("Escreva uma terafe!");
  } else {
    doList.push({
      tarefa: input.value,
      concluida: false,
    });

    input.value = "";
  }

  showList();
}

function showList() {
  let newList = "";

  doList.forEach((item, index) => {
    newList =
      newList +
      `
        <li class="${item.concluida && "done"}">
        <button class="btn-ok" onClick='ok(${index})'>
        <i class="fa-solid fa-check"></i>
        </button>
        ${item.tarefa}
        <button class="btn-dell" onClick="deletar(${index})">
        <i class="fa-solid fa-xmark"></i>
        </button>
        </li>
        `;
  });
  ul.innerHTML = newList;

  //Local Storage
  localStorage.setItem("list", JSON.stringify(doList));
}

function deletar(index) {
  doList.splice(index, 1);

  showList();
}
function ok(index) {
  doList[index].concluida = !doList[index].concluida;

  showList();
}
function takeTodoList() {
  const doLocalStorage = localStorage.getItem("list");

  if (doLocalStorage) {
    doList = JSON.parse(doLocalStorage);
  }

  showList();
}

takeTodoList();
btn.addEventListener("click", takeList);
