const capitalize = (word) => {
    const [first, ...rest] = word;
    return [first.toUpperCase(), ...rest].join('');
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));