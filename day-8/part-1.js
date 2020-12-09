const { read } = require('../utils')

;(async () => {
  const data = await read('./data.txt')

  let accumulator = 0

  let i = 0

  const instructionMap = {}

  while (true) {
    if (instructionMap[i]) {
      console.log(accumulator)
      break
    }

    instructionMap[i] = true
    let [instruction, number] = data[i].split(' ')
    number = Number(number)

    if (instruction === 'nop') {
      i++
      continue
    }

    if (instruction === 'acc') {
      accumulator += number
      i++
      continue
    }

    if (instruction === 'jmp') {
      i += number
      continue
    }
  }
})()