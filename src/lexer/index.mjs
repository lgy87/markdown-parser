/*
 * Guangyao Li
 * 2018/04/29
 * lgy87@foxmail.com
 */
import r from "ramda"
import hr from "./hr"
import heading from "./heading"

// export default {
//   init ({
//     src = "",
//     rules = [],
//   }) {
//     this.src = src
//     this.rules = rules
//     console.log(this)
//   },
//   lex () {
//     this.removeWhitespaceInEmptyLine()
// 
//     while (this.src) {
// 
//     }
// 
//     return this
//   },
//   removeWhitespaceInEmptyLine () {
//     this.src = this.src.replace(/^ +$/gm, '')
//     return this
//   },
//   doLex () {
//     
//   },
//   aa () {
//     this.tokens.push(rule.lex(this.src))
//   }
// }
console.log(hr.init({src: "--- dkdkd\n## subTitle\n### 4 4 4 ####ldld\n------ ---"}).lex())
// console.log(hr.init({src: " - --"}).lex())
// console.log(heading.init({src: "##---"}).lex())
// console.log(heading.init({src: "# i am lee"}).lex())
// console.log(heading.init({src: "## oksdskfsdf #####   "}).lex())
