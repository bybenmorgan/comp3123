function right(str) {
    if (str.length < 3) {
        return str;
    }

    let lastThree = str.slice(-3);
    let remaining = str.slice(0, str.length - 3);

    return lastThree + remaining;
}

let result1 = right("Python");
let result2 = right("JavaScript");
let result3 = right("Hi");

console.log(result1);
console.log(result2);
console.log(result3);

document.getElementById("output").innerHTML =
    result1 + "<br>" +
    result2 + "<br>" +
    result3;