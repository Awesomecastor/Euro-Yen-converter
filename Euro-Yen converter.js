function converter(amount, money) {
    if (money === "€") {
      return amount + " € = " + amount * 125.47 + " ¥";
    } else if (money === "¥") {
      return amount + " ¥ = " + amount * 0.008 + " €";
    }
  }
  function displayResult() {
    var amount = document.getElementById("amount").value;
    var money = document.getElementById("money").value;
    var displayResult = document.getElementById("displayResult");
    var result = converter(amount, money);
    var conversion = document.getElementById("conversion");
    if (conversion === null){
    var paragraph = document.createElement("p");
    paragraph.setAttribute("id", "conversion")
    displayResult.appendChild(paragraph);
    paragraph.innerHTML = result;
    }
    else {
        conversion.innerHTML = result;
    }
  }

