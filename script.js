const arr = [];
const person = document.querySelector("#name");
const amount = document.querySelector("#money");
const moneyUpdated = document.querySelector("#money-updated");

document.querySelector(".updated").classList.add("hidden");
document.querySelector(".display").classList.add("hidden");

function submit() {
  if (person.value.trim() === "" || amount.value.trim() === "") {
    alert("Empty Field Not Allowed");
  } else {
    document.querySelector(".display").classList.remove("hidden");
    document.querySelector(".updated").classList.add("hidden");
    document.querySelector(".inputContainer").classList.remove("hidden");
    arr.push({ name: person.value, money: amount.value });
    console.log(arr[0].name);
    document.querySelector(".display").innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      document.querySelector(
        ".display"
      ).innerHTML += `<div class="d-flex justify-content-center gap-5"><span class="align-self-center">Name : ${arr[i].name}</span>
    <span class="align-self-center">Money Borrowed : ${arr[i].money}</span>
    <button onclick="update(${i})">Update</button></div>`;
    }
  }
  person.value = "";
  amount.value = "";
}

function update(i) {
  document.querySelector(".updatedButton").innerHTML = "";
  document.querySelector(".inputContainer").classList.add("hidden");
  document.querySelector(".display").classList.add("hidden");
  document.querySelector(".updated").classList.remove("hidden");
  console.log(arr[i]);

  document.querySelector(".updatedButton").innerHTML += `
  <button class="bg-danger mt-2 p-1 text-white"onclick="check(${i})">Money Update</button>`;
  moneyUpdated.value = "";
}

function check(i) {
  console.log(moneyUpdated.value);
  console.log(arr[i].money);
  arr[i].money = Number(arr[i].money) + Number(moneyUpdated.value);
  show(i);
}

function show(i) {
  document.querySelector(".display").classList.remove("hidden");
  document.querySelector(".updated").classList.add("hidden");
  document.querySelector(".inputContainer").classList.remove("hidden");
  document.querySelector(".display").innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    document.querySelector(
      ".display"
    ).innerHTML += `<div class="d-flex justify-content-center gap-5"><span class="align-self-center">Name : ${arr[i].name}</span>
    <span class="align-self-center">Money Borrowed : ${arr[i].money}</span>
    <button onclick="update(${i})">Update</button></div>`;
  }
}
