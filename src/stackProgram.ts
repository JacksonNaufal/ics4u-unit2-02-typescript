/**
 * The program is the classic
 * mean, median calculator
 *
 * By:      Jackson Naufal
 * Version: 1.0
 * Since:   2020-09-30
 */

// Imports
import JacksonStack from './JacksonStack'
import promptSync from 'prompt-sync'

// defining what im using
const prompt = promptSync()
const stackNum = new JacksonStack()

// getting user input
for (let counter = 0; counter < 5; counter++) {
  const userInput = Number(prompt('Enter a Number: '))
  stackNum.Push(userInput)
}

// outputting information
stackNum.StackArray()

// space for visual affects
console.log(' ')
// outputs array
console.log(stackNum.StackArray())

// outputs number that was popped
console.log(`Number removed is ${stackNum.Pop()}`)

// visual affects
console.log('After Pop, your new array is: ')
console.log('\nCalculating ...')

// outputs array with popped number
console.log(stackNum.StackArray())

// end of program
console.log('\nDone!')
