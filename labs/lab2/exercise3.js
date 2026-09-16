const capitalize = (word) => {
    const [first, ...rest] = word;
    return [first.toUpperCase(), ...rest].join('');
};

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color));

console.log(capitalizedColors);