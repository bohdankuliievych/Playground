const tokenizer = require("./tokenizer");
const parser = require("./parser");
const transformer = require("./transformer");
const generateCode = require("./generateCode");
module.exports = function compiler(input) {
  /**
   * Lexical Analysis - Breaks the input code (string) into the basic syntax of the language (array of objects)
   */
  const tokens = tokenizer(input);
  console.log("tokens");
  console.dir(tokens, { depth: null });
  /**
   * Syntactic Analysis - Transforms the tokens (array of objects) into an AST (tree of objects) which represents our program
   */
  const lispAST = parser(tokens);
  console.log("lispAST");
  console.dir(lispAST, { depth: null });
  /**
   * Transformation - Transforms our original Lisp AST into our target Javascript AST
   */
  const jsAST = transformer(lispAST);
  console.log("jsAST");
  console.dir(jsAST, { depth: null });
  /**
   * Code Generation - Transforms our target AST (object of objects) into actual code (string)
   */
  const jsCode = generateCode(jsAST);
  return jsCode;
};
