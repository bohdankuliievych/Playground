// add(2, sub(4, 3)) // JavaScript
// (add 2 (sub 4 3)) // Lisp

const compiler = require("./compiler");
const input = "(add 2 (sub 4 3))";
const output = compiler(input);
console.dir(output);
