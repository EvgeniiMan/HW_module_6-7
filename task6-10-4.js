let username = "";
do {
    username = prompt("Введите ваше имя");

    if (username.length == 0) {
        alert("Имя не должно быть пустым!");
    }

} while (username.length == 0)


let birthday = "";
do {
    birthday = prompt("Введите ваш год рождения");
    if (isNaN(birthday)) {
        birthday = "";
        alert("Год должен быть числом!");
    } else if(+birthday < 0) {
        birthday = "";
        alert("Год должен быть положительным числом!");
    }

} while (birthday.length === 0)

birthday = +birthday

let age = Number(new Date().getFullYear()) - birthday;

switch (age % 10) {
    case 1:
        alert(`${username}:${age} год`);
        break;
    case 2:
    case 3:
    case 4:
        alert(`${username}:${age} года`);
        break;
    default:
        alert(`${username}:${age} лет`);
}