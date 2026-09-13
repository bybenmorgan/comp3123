function angle_Type(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle";
    }
}

let result1 = angle_Type(47);
let result2 = angle_Type(90);
let result3 = angle_Type(145);
let result4 = angle_Type(180);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

document.getElementById("output").innerHTML =
    result1 + "<br>" +
    result2 + "<br>" +
    result3 + "<br>" +
    result4;