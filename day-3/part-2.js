const { read } = require('../utils')

;(async () => {
  const data = await read('./data.txt')
  
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
  ]

  const treesPerSlope = []

  for (let i = 0; i < slopes.length; i++) {
    const [right, down] = slopes[i]
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

    treesPerSlope.push(numTrees)
  }

  const sum = treesPerSlope.reduce((acc, val) => acc *= val)
  console.log('sum: ', sum)
})()