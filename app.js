let count = 0;

const value = document.getElementById("value");
console.log(value);
const increase = document.getElementById("increase");
console.log(increase);
const decrease = document.getElementById("decrease");
console.log(decrease);

increase.addEventListener("click", () => {
  count++;
  value.innerHTML = count;
  if (value.innerHTML > "0") {
    value.style.color = "green";
  } else if (value.innerHTML === "0") {
    value.style.color = "blue";
  }
});
decrease.addEventListener("click", () => {
  count--;
  value.innerHTML = count;
  if (value.innerHTML < "0") {
    value.style.color = "red";
  } else if (value.innerHTML === "0") {
    value.style.color = "blue";
  }
});
