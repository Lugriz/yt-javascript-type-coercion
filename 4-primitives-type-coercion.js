// ==================== TYPE COERCION ON PRIMITIVE TYPES ====================

/**
 * =============== STRING COERCION ================
 *  `${...}` -> string
 */

/**
 * =============== NUMERIC COERCION ================
 *  - / * % +(unary) -> number
 */


/**
 * =============== + operator ===============
*/

// When any operand is a string, a string operation is performed

console.log('2' + 1);
console.log('2' + true);
console.log('2' + null);
console.log('2' + undefined);

// When none of the operands are strings, a numeric operation is performed

console.log(2 + true);
console.log(2 + null);
console.log(2 + undefined);


/**
 * =============== COMPARISON OPERATORS ================
 *  > < <= >=  -> number except when both operands are strings
 */

console.log(2  >= '1');
console.log(2  <= true);
console.log(2  > null);
console.log(2  < undefined);

/**
 * =============== (== != operators) ================
 * These operators try to perform a numeric coercion when possible, except
 * when null and undefined are operands or both operands are strings.
*/

// Coercion
console.log('a' == 'a');
console.log(0 == '0');
console.log(true == '1');
console.log(true == 1);

// it compares original values (null == undefined is true)
console.log(0 == null);
console.log(0 == undefined);
console.log(null == undefined);