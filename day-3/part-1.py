with open('data.txt') as f:
  data = f.read().splitlines()

  right = 3
  down = 1
  row = down
  column = right

  numTrees = 0

  while row < len(data):
    if data[row][column] == '#':
      numTrees += 1

    row += down

    isColumnNearBound = column + right >= len(data[down])
    column = column - len(data[down]) + right if isColumnNearBound else column + right
  
  print(numTrees)