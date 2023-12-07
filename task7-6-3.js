let input = "";
do  {
    input = prompt("Введите число");
} while (isNaN(input) || input.length == 0)

let num = Number(input);

const arr = new Array();

if (num <= 0) {
    do {
        arr.push(num);
        num++;
    } while (num <= 0)
} else {
    let i = 0;
    do {
        arr.push(i);
        i++;
    } while (i <= num)
}

console.log(arr);