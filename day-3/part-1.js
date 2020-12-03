const { read } = require('../utils')

;(async () => {
  const data = await read('./data.txt')
  
  const right = 3
  const down = 1
  let row = down
  let column = right

  let numTrees = 0
  while (row < data.length) {
    if (data[row][column] === '#') {
      numTrees += 1
    }

    row += down

    const isColumnNearBound = column + right >= data[down].length
    column = isColumnNearBound ? column - data[down].length + right : column + right
  }

  console.log('num trees: ', numTrees)
})()