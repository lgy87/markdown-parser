/*
 * Guangyao Li
 * 2018/04/29
 * lgy87@foxmail.com
 */
import r from "ramda"

export default {
  init ({
    src = "",
    rules = [],
  }) {
    this.src = src
    this.rules = rules
    console.log(this)
  },
  lex () {
    this.removeWhitespaceInEmptyLine()

    while (this.src) {

    }

    return this
  },
  removeWhitespaceInEmptyLine () {
    this.src = this.src.replace(/^ +$/gm, '')
    return this
  },
  doLex () {
    
  },
  aa () {
    this.tokens.push(rule.lex(this.src))
  }

}
