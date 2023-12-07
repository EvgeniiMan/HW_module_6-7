let output = ''

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {

        if ((i + j) % 2 == 0) {
            output += 'X';
        } else {
            output += 'O';
        }

        if (j != 2) {
            output += ' ';
        }

    }

    output += '\n'

} 

console.log(output);