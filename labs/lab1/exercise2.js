function max(a, b, c) {
    let largest = a;

    if (b > largest) {
        largest = b;
    }

    if (c > largest) {
        largest = c;
    }

    return largest;
}

let result1 = max(1, 0, 1);
let result2 = max(0, -10, -20);
let result3 = max(1000, 510, 440);

console.log(result1);
console.log(result2);
console.log(result3);

document.getElementById("output").innerHTML =
    result1 + "<br>" +
    result2 + "<br>" +
    result3;