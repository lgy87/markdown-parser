/*
 * Guangyao Li
 * 2018/04/29
 * lgy87@foxmail.com
 */
import base from "./base"

const hr = {
  pattern: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,

  process () {
    this.token = {
      type: "hr"
    }

    return this
  },
}

Reflect.setPrototypeOf(hr, base)

export default hr
