//Create a function strCount (takes an object as argument) that will count all string values inside an object.

function strCount(obj) {
    let count = 0;
    for (let key in obj) {
        if (typeof (obj[key]) === 'string') {
            count++;
        } else if (typeof (obj[key]) === 'object' && obj[key] !== null) {
            count += strCount(obj[key]);
        }
    }
    return count;
}

console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null,
    frth: ["anytme", 2, 3, 4],
    sdfds: {
        fir435st: "1435",
        secon435d: "2435"
    }
}));
