const data = require('./data')

for (let i = 0; i < data.length - 3; i++) {
  for (let j = 1; j < data.length - 2; j++) {
    const requiredNum = data.find((number, index) => data[i] + data[j] + number === 2020 && index !== i && index !== j)
    if (requiredNum) {
      console.log('match found:', data[i] * data[j] * requiredNum)
      return
    }
  }
}