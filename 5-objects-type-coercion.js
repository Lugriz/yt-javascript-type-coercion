/**
Type coercion applied to objects (Date, custom objects)
*/


console.log(2 * [2]); '2'
console.log(2 + {});
console.log({} == '[object Object]'); // coercion is not performed when both operands are objects
console.log([] == 0);
console.log(new Date() - new Date());

console.log('=======================');

const obj = new Date();

/**
 * Order execution
 * 
 * - It calls Symbol.toPrimitive if exists and this handles all types
 * - Otherwise, it calls valueOf() and toString() in this order depending
 *   the type of the operation:
 *    - Number, Default:
 *          1.- valueOf()
 *          2.- toString()
 *    - String:
 *          1.- toString()
 *          2.- valueOf()
 */

console.log(obj.valueOf());
console.log(obj.toString());
console.log(obj[Symbol.toPrimitive]('default'));



