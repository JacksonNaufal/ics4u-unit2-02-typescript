/**
 * The program is the class
 * for JacksonStacks
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-10-04
 */

class JacksonStack {
  private readonly stackClass: number[] = []

  poppedNum = 0

  StackArray(): number[] {
    return this.stackClass
  }

  Push(pushedNum: number): void {
    this.stackClass.push(pushedNum)
  }

  Pop(): number | undefined {
    return this.stackClass.pop()
  }
}

export = JacksonStack
