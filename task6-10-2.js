let input = prompt("Введите промокод").toLowerCase().replaceAll(' ', '');

if (input == "скидка") {
    alert("Промокод применён");
} else {
    alert("Промокод не работает");
}