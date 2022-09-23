function increment() {
  let number = document.querySelector(`[class="inputstylenum"]`);
  number.value = parseInt(number.value) + 1;
}

function decrement() {
  let number = document.querySelector(`[class="inputstylenum"]`);
  number.value = parseInt(number.value) - 1;
  if (number.value <= 0) {
    number.value = 0;
  }
}

document.querySelector(".btntotal").addEventListener("click", function () {
  let quantityInput = document.querySelector(".inputstylenum").value;
  let costInput = document.querySelector(".inputstylenumcost").value;
  let productName = document.querySelector(".inputstyle").value;

  document.querySelector(".productamounttext").textContent = quantityInput;
  document.querySelector(".productcosttext").textContent = costInput;
  document.querySelector(".productnametext").textContent = productName;

  let calculation = quantityInput * costInput;
  document.querySelector(".producttotaltext").textContent = calculation;
});
