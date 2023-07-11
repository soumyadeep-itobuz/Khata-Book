const arr = JSON.parse(localStorage.getItem("arr")) || [];
const person = document.querySelector("#name");
const amount = document.querySelector("#money");
const moneyUpdated = document.querySelector("#money-updated");
const display = document.querySelector(".display");
const updatedDisplay = document.querySelector(".updated");
const updatedButton = document.querySelector(".updatedButton");

updatedDisplay.classList.add("hidden");
display.classList.add("hidden");

money.addEventListener("keydown", function (e) {
  if (e.code === "Enter") submit();
});
person.addEventListener("keydown", function (e) {
  if (e.code === "Enter") submit();
});

function submit() {
  if (!person.value.trim() || !amount.value.trim() || amount.value <= 0) {    
    alert("Empty Field Not Allowed");
  } else {
    arr.push({ name: person.value, money: amount.value });
    localStorage.setItem("arr", JSON.stringify(arr));
    show();
  }
  person.value = "";
  amount.value = "";
}

function update(i) {
  updatedButton.innerHTML = "";
  display.classList.remove("hidden");
  updatedDisplay.classList.remove("hidden");
  updatedButton.innerHTML += `<button class="bg-success align-self-end p-1 text-white"onclick="addMoney(${i})">Add</button>
  <button class="bg-danger align-self-end  p-1 text-white"onclick="subMoney(${i})">Sub</button>`;
  moneyUpdated.value = "";
}

function removeItem(i) {
  arr.splice(i, 1);
  localStorage.setItem("arr", JSON.stringify(arr));
  show();
}

function addMoney(i) {
  arr[i].money = Number(arr[i].money) + Number(moneyUpdated.value);
  localStorage.setItem("arr", JSON.stringify(arr));
  show();
}

function subMoney(i) {
  arr[i].money = Number(arr[i].money) - Number(moneyUpdated.value);
  localStorage.setItem("arr", JSON.stringify(arr));
  show();
}

function show() {
  display.classList.remove("hidden");
  updatedDisplay.classList.add("hidden");
  display.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    display.innerHTML += `<div class="d-flex justify-content-center gap-5"><span class="align-self-center">Name : ${arr[i].name}</span>
    <span class="align-self-center">Money Borrowed : ${arr[i].money}</span>
    <button class="bg-success" onclick="update(${i})">Update</button>
    <button class="bg-danger text-white" onclick="removeItem(${i})">Delete</button>
    </div>`;
  }
}

function removeAll() {
  arr.splice(0, arr.length);
  show();
  localStorage.setItem("arr", JSON.stringify(arr));
}

show();
