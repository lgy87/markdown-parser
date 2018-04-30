import lexer from "./index"
import hr from "./rule/hr"
import heading from "./rule/heading"

console.log(heading.init({src: "xx---"}).lex())
console.log(heading.init({src: "##---"}).lex())
console.log(heading.init({src: "## ---"}).lex())
// lexer.init({
//   a: 99,
//   src: "ok",
// })
