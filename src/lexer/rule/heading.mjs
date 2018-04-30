/*
 * Guangyao Li
 * 2018/04/29
 * lgy87@foxmail.com
 */
import base from "./base"

const heading = {
  pattern: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,

  process () {
    this.token = {
      type: "heading",
      depth: this.matched[1].length,
      text: this.matched[2],
    }

    return this
  },
}

Reflect.setPrototypeOf(heading, base)

export default heading
