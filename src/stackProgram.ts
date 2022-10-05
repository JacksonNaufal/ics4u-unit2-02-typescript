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
const userInput = Number(prompt('Enter a Number: '))
stackNum.Push(userInput)

// outputting information
stackNum.StackArray()

// end of program
console.log('\nDone!')
