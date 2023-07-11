const arrayList = JSON.parse(localStorage.getItem("arrayList")) || [];
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
    arrayList.push({ name: person.value, money: amount.value });
    localStorage.setItem("arrayList", JSON.stringify(arrayList));
    show();
  }
  person.value = "";
  amount.value = "";
}

function update(i) {
  updatedButton.innerHTML = "";
  display.classList.remove("hidden");
  updatedDisplay.classList.remove("hidden");
  updatedButton.innerHTML += `<button class="bg-success align-self-center text-white"onclick="addMoney(${i})">Add</button>
  <button class="bg-danger align-self-center text-white"onclick="subMoney(${i})">Sub</button>`;
  moneyUpdated.value = "";
}

function removeItem(i) {
  arrayList.splice(i, 1);
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  show();
}

function addMoney(i) {
  arrayList[i].money = Number(arrayList[i].money) + Number(moneyUpdated.value);
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  show();
}

function subMoney(i) {
  arrayList[i].money = Number(arrayList[i].money) - Number(moneyUpdated.value);
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  show();
}

function show() {
  display.classList.remove("hidden");
  updatedDisplay.classList.add("hidden");
  display.innerHTML = "";
  for (let i = 0; i < arrayList.length; i++) {
    display.innerHTML += `<div class="d-flex justify-content-center gap-5"><span class="align-self-center">Name : ${arrayList[i].name}</span>
    <span class="align-self-center">Money Borrowed : ${arrayList[i].money}</span>
    <button class="bg-success" onclick="update(${i})">Update</button>
    <button class="bg-danger text-white" onclick="removeItem(${i})">Delete</button>
    </div>`;
  }
}

function removeAll() {
  arrayList.splice(0, arrayList.length);
  show();
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
}

show();
