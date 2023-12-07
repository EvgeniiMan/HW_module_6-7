let input;

do  {
    input = prompt("Введите число");
} while (isNaN(input) || input.length == 0)

const num = +input;

alert(`Введённое число - ${num}\nКвадрат числа - ${num**2}\nКуб числа - ${num**3}`);