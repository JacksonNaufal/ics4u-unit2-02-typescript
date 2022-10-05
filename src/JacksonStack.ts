/**
 * The program is the class
 * for JacksonStacks
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-04
 */

class JacksonStack {
  stackNum: number[] = []

  Push(pushedNum: number): void {
    this.stackNum.push(pushedNum)
  }

  StackArray(): void {
    console.log(this.stackNum)
  }
}

export = JacksonStack
