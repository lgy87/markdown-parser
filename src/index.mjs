/*
 * Guangyao Li
 * 2018/04/30
 * lgy87@foxmail.com
 */
// import lexer from "./lexer"
import hr from "./lexer/hr"
import heading from "./lexer/heading"

const lexers = [
  hr,
  heading,
]

let src = `
---   
## subTitle
### 4 4 4 ####ldld
------ ---
`

src =   src.replace(/\r\n|\r/g, '\n')
  .replace(/\t/g, '    ')
  .replace(/\u00a0/g, ' ')
  .replace(/\u2424/g, '\n')
  .trim()

let i = 0

while (src) {
  if (i++ > 8) {
    console.log("888888888")
    break
  }
  for (let i = 0; i < lexers.length; i++) {
    const lexer = lexers[i]
    let token = null
    lexer.init({src})
    const result = lexer.lex()
    ;[src, token] = result

    if (token) {
      console.log(token)
      break
    }
  }
}
