/*
 * Guangyao Li
 * 2018/04/29
 * lgy87@foxmail.com
 */
export default {
  pattern: forbidden(),
  token: null,
  matched: null,

  init ({
    src = "",
  } = {}) {
    this.src = src

    return this
  },
  lex () {
    return this
      .match()
      .deal()
      .result()
  },
  match () {
    this.matched = this.pattern.exec(this.src)

    return this
  },
  deal () {
    if (! this.matched) {
      return this
    }

    this
      .advanced()
      .process()

    return this
  },
  advanced () {
    this.src = this.src.substring(
      this.matched[0].length
    )
    return this
  },
  result () {
    return [
      this.src,
      this.token,
    ]
  }
}

function forbidden () {
  return new Proxy({}, {
    get () {
      throw new Error ("You must specify the [pattern] field!")
    }
  })
}
