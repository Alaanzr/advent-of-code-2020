const { read } = require('../utils')

;(async () => {
  const data = await read('./data.txt')

  let accumulator = 0

  let i = 0
  let replaced = false
  const indicesReplaced = []
  let indicesVisited = new Set()
  const replaceMap = {
    'jmp': 'nop',
    'nop': 'jmp'
  }

  while (true) {
    if (indicesVisited.has(i)) {
      i = 0
      replaced = false
      accumulator = 0
      indicesVisited = new Set()
    }
    
    indicesVisited.add(i)

    let [instruction, number] = data[i].split(' ')

    number = Number(number)

    if (!replaced && !indicesReplaced.includes(i)) {
      instruction = replaceMap[instruction] || instruction
      indicesReplaced.push(i)
      replaced = true
    }

    if (i === data.length - 1) {
      console.log(accumulator)
      break
    }

    if (instruction === 'nop') {
      i += 1
      continue
    }

    if (instruction === 'acc') {
      accumulator += number
      i += 1
      continue
    }

    if (instruction === 'jmp') {
      i += number
      continue
    }
  }
})()