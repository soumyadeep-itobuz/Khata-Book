const arr = [];
const person = document.querySelector("#name");
const amount = document.querySelector("#money");
const moneyUpdated = document.querySelector("#money-updated");
const display = document.querySelector(".display");
const updatedDisplay = document.querySelector(".updated");
const updatedButton = document.querySelector(".updatedButton");

updatedDisplay.classList.add("hidden");
display.classList.add("hidden");

function submit() {
  if (!person.value.trim() || !amount.value.trim() || amount.value <= 0) {
    alert("Empty Field Not Allowed");
  } else {
    arr.push({ name: person.value, money: amount.value });
    show();
  }
  person.value = "";
  amount.value = "";
}

function update(i) {
  updatedButton.innerHTML = "";
  display.classList.remove("hidden");
  updatedDisplay.classList.remove("hidden");
  updatedButton.innerHTML += `
  <button class="bg-success align-self-end p-1 text-white"onclick="add(${i})">Add</button>
  <button class="bg-danger align-self-end  p-1 text-white"onclick="sub(${i})">Sub</button>`;
  moneyUpdated.value = "";
}

function add(i) {
  arr[i].money = Number(arr[i].money) + Number(moneyUpdated.value);
  show();
}

function sub(i) {
  arr[i].money = Number(arr[i].money) - Number(moneyUpdated.value);
  show();
}

function show() {
  display.classList.remove("hidden");
  updatedDisplay.classList.add("hidden");
  display.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    display.innerHTML += `<div class="d-flex justify-content-center gap-5"><span class="align-self-center">Name : ${arr[i].name}</span>
    <span class="align-self-center">Money Borrowed : ${arr[i].money}</span>
    <button class="bg-warning" onclick="update(${i})">Update</button></div>`;
  }
}
