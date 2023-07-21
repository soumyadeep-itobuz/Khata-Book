const arrayList = JSON.parse(localStorage.getItem("arrayList")) || [];
const person = document.querySelector("#name");
const amount = document.querySelector("#money");
const moneyUpdated = document.querySelector("#money-updated");
const display = document.querySelector(".display");
const updatedDisplay = document.querySelector(".updated");
const updatedButton = document.querySelector(".updatedButton");
const submitButton = document.querySelector(".submit-button");

let flag = 0;
let temp = 0;

function submit() {
  for (let i = 0; i < arrayList.length; i++) {
    if (arrayList[i].name.toLowerCase() === person.value.trim().toLowerCase()) {
      temp = 1;
    }
  }
  if (!person.value.trim() || !amount.value.trim() || amount.value <= 0) {
    alert("Empty Field Not Allowed");
  } else if (temp === 1) {
    alert("Name already exist");
    temp = 0;
  } else {
    arrayList.push({
      name: person.value,
      money: amount.value,
      id: new Date().getTime(),
    });
    localStorage.setItem("arrayList", JSON.stringify(arrayList));
    show();
  }
  person.value = "";
  amount.value = "";
}

function show() {
  person.removeAttribute("readonly", true);
  flag = 0;
  submitButton.classList.remove("hidden");
  updatedButton.classList.add("hidden");
  person.value = "";
  amount.value = "";
  display.innerHTML = "";
  for (let i = 0; i < arrayList.length; i++) {
    display.innerHTML += `<div class="list d-flex flex-column flex-md-row justify-content-center gap-5"><p class="align-self-center w-100 ">Name : ${arrayList[i].name}</p>
    <p class="align-self-center w-100">Money Borrowed : ${arrayList[i].money}</p>
    <button class="bg-success py-1 px-4 border-0 rounded-1" onclick="update(${arrayList[i].id})"><img src="../svg/pencil-solid.svg" alt="trash"></button>
    <button class="bg-danger text-white  py-1 px-4 border-0 rounded-1" onclick="removeItem(${arrayList[i].id})"><img src="../svg/trash-solid.svg" alt="trash"></button>
    </div>`;
  }
}

function update(id) {
  flag = 1;
  arrayList.map((element) => {
    if (id === element.id) {
      person.value = element.name;
      person.setAttribute("readonly", true);
    }
  });
  submitButton.classList.add("hidden");
  updatedButton.classList.remove("hidden");
  updatedButton.innerHTML = "";
  updatedButton.innerHTML += `<button class="bg-success align-self-center text-white mt-3 py-1 px-3 border-0 rounded-2" onclick="addMoney(${id})">Add</button>
  <button class="bg-danger align-self-center text-white mt-3 py-1 px-3 border-0 rounded-2" onclick="subMoney(${id})">Sub</button>`;
}

function removeItem(id) {
  let j = arrayList.findIndex((element) => element.id === id);
  arrayList.splice(j, 1);
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  show();
}

function addMoney(id) {
  if (amount.value <= 0 || !amount.value) alert("Enter a valid amount");
  arrayList.map((element) => {
    if (id === element.id) {
      element.money = Number(element.money) + Number(amount.value);
    } else {
      return element;
    }
  });
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  show();
}

function subMoney(id) {
  if (amount.value <= 0 || !amount.value) alert("Enter a valid amount");
  arrayList.map((element) => {
    if (id === element.id) {
      element.money = Number(element.money) - Number(amount.value);
    } else {
      return element;
    }
  });
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  show();
}

function removeAll() {
  arrayList.splice(0, arrayList.length);
  show();
  localStorage.clear();
}

money.addEventListener("keydown", (e) => {
  if (e.code === "Enter" && flag === 0) submit();
});
person.addEventListener("keydown", (e) => {
  if (e.code === "Enter") submit();
});

show();
