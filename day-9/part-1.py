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


with open('data.txt') as f:
  data = f.read().splitlines()

  numbers = list(map(lambda x: int(x), data))

  preamble = 25
  subsetLength = 25

  subset = []

  for i in range(len(numbers)):
    if len(subset) >= preamble:
      hasSumResult = hasSum(numbers[i])
      if not hasSumResult:
        print(numbers[i])
        break

    modifySubset(numbers[i])