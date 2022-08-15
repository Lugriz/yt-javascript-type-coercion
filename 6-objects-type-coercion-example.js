const obj = { a: 1 };
const toString = obj.toString;
const valueOf = obj.valueOf;

obj.valueOf = function() {
    console.log('Called valueOf');
    return valueOf.call(this);
}

obj.toString = function() {
    console.log('Called toString');
    return toString.call(this);
}

obj[Symbol.toPrimitive] = function(hint) {
    console.log('Called toPrimitive:', hint);
    return 1;
}


// console.log(`Obj: ${obj}`)
console.log(2 + obj);
// console.log(2 - obj)
// console.log(2 >= obj)
// console.log(obj == obj)