/*
 * Guangyao Li
 * 2018/04/30
 * lgy87@foxmail.com
 */
import base from "./base"

const code = {
  pattern: /^( {4}[^\n]+\n*)+/,

  process () {
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    this.token = {
      type: "hr"
    }

    return this
  },
}

Reflect.setPrototypeOf(hr, base)

export default hr
