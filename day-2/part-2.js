const data = require('./data')

let numValidPasswords = 0

data.forEach(datum => {
  const [minMax, charWithSuffix, word] = datum.split(' ')
  const [minChar, maxChar] = minMax.split('-')
  const left = Number(minChar)
  const right = Number(maxChar)
  const char = charWithSuffix.replace(':', '')

  let count = 0

  if (word[left - 1] === char) {
    count += 1
  }

  if (word[right - 1] === char) {
    count += 1
  }

  if (count === 1) {
    numValidPasswords += 1
  }
})

console.log('numValidPasswords: ', numValidPasswords)