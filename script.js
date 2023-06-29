const arr = [];
const person = document.querySelector("#name");
const amount = document.querySelector("#money");
const moneyUpdated = document.querySelector("#moneyUpdated");
let flag = 0;

document.querySelector(".updated").classList.add("hidden");
document.querySelector(".display").classList.add("hidden");
function submit() {
  document.querySelector(".display").classList.remove("hidden");
  arr.push({ name: person.value, money: amount.value });
  console.log(arr[0].name);
  document.querySelector(".display").innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    document.querySelector(
      ".display"
    ).innerHTML += `<div class="d-flex justify-content-center gap-5"><span class="align-self-center">Name of the person: ${arr[i].name}</span>
    <span class="align-self-center">Money Borrowed: ${arr[i].money}</span>
    <button onclick="update(${i})">Update</button></div>`;
  }
}
function update(i) {
  document.querySelector(".input").classList.add("hidden");
  document.querySelector(".display").classList.add("hidden");
  document.querySelector(".updated").classList.remove("hidden");
  console.log(arr[i]);

  document.querySelector(
    ".updated"
  ).innerHTML += `<button onclick="check(${i})">Money Update</button>`;
}
function check(i) {
  console.log(moneyUpdated.value);
  console.log(arr[i].money);
  arr[i].money = Number(arr[i].money) + Number(moneyUpdated.value);
  if (flag == 0) {
    flag = 1;
  } else {
    document.querySelector(
      ".updatedDisplay"
    ).innerHTML += `<span class="align-self-center">Name of the person: ${arr[0].name}</span>
        <span class="align-self-center">Money Updated: ${arr[0].money}</span`;
  }
}
