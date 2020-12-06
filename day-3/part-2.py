from functools import reduce

with open('data.txt') as f:
  data = f.read().splitlines()

  slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2]
  ]

  treesPerSlope = []

  for i in range(len(slopes)):
    right, down = slopes[i]
    row = down
    column = right

    numTrees = 0
    while row < len(data):
      if data[row][column] == '#':
        numTrees += 1

      row += down

      isColumnNearBound = column + right >= len(data[down])
      column = column - len(data[down]) + right if isColumnNearBound else column + right

    treesPerSlope.append(numTrees)

  sum = reduce(lambda x, y: x * y, treesPerSlope)
  print(sum)
