function deepCopy(value) {
    if (typeof value !== 'object' || value === null) {
        return value;
    }
    let copy;
    if (Array.isArray(value)) {
        copy = [];
        for (let i = 0; i < value.length; i++) {
            copy[i] = deepCopy(value[i]);
        }
    } else {
        copy = {};
        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                copy[key] = deepCopy(value[key]);
            }
        }
    }
    return copy;
}

var h1={ a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN };
var h2=deepCopy(h1);
console.log('Делаем глубокое копирование h1 в h2');
console.log(h1 === h2); //будет false
console.log(h1.a === h2.a); //будет true
console.log(h1.b === h2.b); //будет false
console.log(h1.b.b1 === h2.b.b1); //будет true
console.log(h1.c === h2.c); //будет false
console.log(h1.c[0] === h2.c[0]); //будет true
console.log(h1.d === h2.d); //будет true
console.log(h1.e === h2.e); //будет true
console.log(isNaN(h2.f)); //будет true
console.log(h2.c instanceof Array); //будет true


var a1 = [5, { b1: 6, b2: 7 }, [33, 22], null, undefined, Number.NaN];
var a2 = deepCopy(a1);
console.log('Делаем глубокое копирование a1 в a2');
console.log(a1 === a2); // будет false
console.log(typeof (a2) === typeof (a1)); // будет true
console.log(a1[0] === a2[0]); // будет true
console.log(a1[1] === a2[1]); // будет false
console.log(a1[1].b1 === a2[1].b1); // будет true
console.log(a1[2] === a2[2]); // будет false
console.log(a1[2][0] === a2[2][0]);// будет true
console.log(a1[3] === a2[3]); // будет true
console.log(a1[4] === a2[4]); // будет true
console.log(isNaN(a2[5])); // будет true
console.log(a2[2] instanceof Array); // будет true


var v1 = "sss";
var v2 = deepCopy(v1);
console.log('Делаем глубокое копирование v1 в v2');
console.log(typeof (v2) === typeof (v1));// будет true
console.log(v1 === v2);// будет true

var z1 = null;
var z2 = deepCopy(z1);
console.log('Делаем глубокое копирование z1 в z2');
console.log(typeof (z2) === typeof (z1));// будет true
console.log(z1 === z2);// будет true

var n1 = Number.NaN;
var n2 = deepCopy(n1);
console.log('Делаем глубокое копирование n1 в n2');
console.log(typeof (n2) === typeof (n1));// будет true
console.log(isNaN(n2));// будет true


