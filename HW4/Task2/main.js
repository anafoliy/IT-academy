let h1 = {
    a: 5,
    b: { b1: 6, b2: 7 },
    c: [33, 22],
    d: null,
    e: undefined,
    f: Number.NaN
};
let h2 = deepCopy(h1);

function deepCopy(value) {
    let copy;
    if (Array.isArray(value)) {
        copy = value.slice(0);
        for (let i = 0; i < copy.length; i++) {
            copy[i] = deepCopy(copy[i]);
        }
        return copy;
    } else if (value === 'object') {
        copy = {...value};
        for(let key in copy){
            copy[key] = deepCopy(copy[key]);
        }
        return copy;
    }
    return value;
}

// console.log(typeof (NaN));

console.log(h1===h2) //будет false
console.log(h1.a===h2.a) //будет true
console.log(h1.b===h2.b) //будет false
console.log(h1.b.b1===h2.b.b1) //будет true
console.log(h1.c===h2.c) //будет false
console.log(h1.c[0]===h2.c[0]) //будет true
console.log(h1.d===h2.d) //будет true
console.log(h1.e===h2.e) //будет true
console.log(isNaN(h2.f)) //будет true
console.log(h2.c instanceof Array) //будет true


// h2.b.b1 = 9;
// console.log(h1);
// console.log(h2);

function deepCopy(obj) {
    return { ...obj };
}
