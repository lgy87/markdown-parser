/*
 * Guangyao Li
 * 2018/04/30
 * lgy87@foxmail.com
 */
import base from "./base"

const newline = {
  pattern: /^\n+/,

  process() {
    this.token = {
      type: "space",
    }

    return this
  },
}

Reflect.setPrototypeOf(newline, base)

export default newline
