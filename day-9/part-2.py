def modifySubset(number):
  if len(subset) >= subsetLength:
    subset.pop(0)
  
  subset.append(number)

def hasSum(number):
  hasFoundMatch = False

  for i in range(len(subset)):
    current = subset[i]
    needed = number - current
    
    try:
      subsetWithoutCurrentNumber = [number for index, number in enumerate(subset) if index != i]
      found = subsetWithoutCurrentNumber.index(needed)
      hasFoundMatch = True
      break
    except:
      pass
  
  return hasFoundMatch

def getContiguousSubset(number):
  left = 0
  iterator = 0
  currentSum = 0
  currentSubset = []

  while True:
    if number - currentSum - numbers[left] == 0:
      currentSubset.append(numbers[left])
      return currentSubset

    if number - currentSum - numbers[left] < number:
      currentSubset.append(numbers[left])
      currentSum += numbers[left]
      left += 1
    
    if left == len(numbers):
      currentSubset = []
      currentSum = 0
      iterator += 1
      left = iterator
      continue

    if number - currentSum - numbers[left] > number:
      currentSubset = []
      currentSum = 0
      iterator += 1
      left = iterator


with open('data.txt') as f:
  data = f.read().splitlines()

  numbers = list(map(lambda x: int(x), data))

  preamble = 25
  subsetLength = 25

  subset = []
  
  invalidNumber = None
  for i in range(len(numbers)):
    if len(subset) >= preamble:
      hasSumResult = hasSum(numbers[i])
      if not hasSumResult:
        invalidNumber = numbers[i]
        break

    modifySubset(numbers[i])

  contiguous = getContiguousSubset(invalidNumber)
  contiguous.sort()
  smallest, *middle, largest = contiguous
  print(smallest + largest)