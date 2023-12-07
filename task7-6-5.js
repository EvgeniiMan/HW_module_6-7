const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const arrayValues = new Array();

for (let value of Object.values(obj)) {
    if (Array.isArray(value)){
        for (let objArrValues of value) {
            arrayValues.push(objArrValues);
        }
    } else {
        arrayValues.push(value);
    }
}

console.log(arrayValues);