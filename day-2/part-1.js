const data = require('./data')

let numValidPasswords = 0

data.forEach(datum => {
  const [minMax, charWithSuffix, word] = datum.split(' ')
  const [minChar, maxChar] = minMax.split('-')
  const min = Number(minChar)
  const max = Number(maxChar)
  const char = charWithSuffix.replace(':', '')

  let count = 0

  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count += 1
    }
  }

  if (count >= min && count <= max) {
    numValidPasswords += 1
  }
})

console.log('numValidPasswords: ', numValidPasswords)