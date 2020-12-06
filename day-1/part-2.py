import sys

with open('data.txt') as f:
  data = [int(number) for number in f.read().splitlines()]

  for i in range(len(data) - 3):
    for j in range(1, len(data) - 2):
      requiredNum = 2020 - data[i] - data[j]
      for index, num in enumerate(data):
        if index != i and index != j and num == requiredNum:
          print(data[i] * data[j] * requiredNum)
          sys.exit()

