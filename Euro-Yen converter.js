function converter (amount, money) {
if (money === "€") {
    return amount + " € = " + amount*125.47 + " ¥";
}
else if (money === "¥") {
    return amount + " ¥ = " + amount*0.0080 + " €";
}
}
var result = converter(400, "€");
console.log(result);