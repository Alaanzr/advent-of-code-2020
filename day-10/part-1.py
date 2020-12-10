from functools import reduce

with open('data.txt') as f:
  data = f.read().splitlines()
  joltages = list(map(lambda x: int(x), data))
  joltages.sort()

  deviceRating = joltages[len(joltages) - 1] + 3
  joltages.insert(0, 0)
  joltages.append(deviceRating)

  differences = []
  maxDifference = 3

  for i, joltage in enumerate(joltages):
    if i + 1 == len(joltages):
     break
    difference = joltages[i + 1] - joltage
    differences.append(difference)

  numDiff1 = differences.count(1)
  numDiff3 = differences.count(3)
  
  print(numDiff1 * numDiff3)