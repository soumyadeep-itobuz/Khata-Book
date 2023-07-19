const arrayList = JSON.parse(localStorage.getItem("arrayList")) || [];
const person = document.querySelector("#name");
const amount = document.querySelector("#money");
const moneyUpdated = document.querySelector("#money-updated");
const display = document.querySelector(".display");
const updatedDisplay = document.querySelector(".updated");
const updatedButton = document.querySelector(".updatedButton");
const submitButton = document.querySelector(".submit-button");

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
  submitButton.classList.remove("hidden");
  updatedButton.classList.add("hidden");
  person.value = "";
  amount.value = "";
  display.innerHTML = "";
  for (let i = 0; i < arrayList.length; i++) {
    display.innerHTML += `<div class="list d-flex justify-content-center gap-5"><p class="align-self-center w-100 ">Name : ${arrayList[i].name}</p>
    <p class="align-self-center w-100">Money Borrowed : ${arrayList[i].money}</p>
    <button class="bg-success py-1 px-4 border-0 rounded-1" onclick="update(${arrayList[i].id})"><img src="../svg/pencil-solid.svg" alt="trash"></button>
    <button class="bg-danger text-white  py-1 px-4 border-0 rounded-1" onclick="removeItem(${arrayList[i].id})"><img src="../svg/trash-solid.svg" alt="trash"></button>
    </div>`;
  }
}

function update(i) {
  console.log(i);
  arrayList.map((element) => {
    if (i === element.id) {
      person.value = element.name;
    }
  });
  submitButton.classList.add("hidden");
  updatedButton.classList.remove("hidden");
  updatedButton.innerHTML = "";
  updatedButton.innerHTML += `<button class="bg-success align-self-center text-white mt-3 py-1 px-3 border-0 rounded-2" onclick="addMoney(${i})">Add</button>
  <button class="bg-danger align-self-center text-white mt-3 py-1 px-3 border-0 rounded-2" onclick="subMoney(${i})">Sub</button>`;
}

function removeItem(i) {
  let j = arrayList.findIndex((element) => element.id === i);
  arrayList.splice(j, 1);
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  show();
}

function addMoney(i) {
  arrayList.map((element) => {
    if (i === element.id) {
      element.money = Number(element.money) + Number(amount.value);
    } else {
      return element;
    }
  });
  localStorage.setItem("arrayList", JSON.stringify(arrayList));
  show();
}

function subMoney(i) {
  arrayList.map((element) => {
    if (i === element.id) {
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

show();
