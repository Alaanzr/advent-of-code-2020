with open('data.txt') as f:
  data = f.read().splitlines()

  numValidPasswords = 0

  for datum in data:
    minMax, charWithSuffix, word = datum.split(' ')
    minChar, maxChar = minMax.split('-')
    left = int(minChar)
    right = int(maxChar)
    char = charWithSuffix.replace(':', '')

    count = 0

    if word[left - 1] == char:
      count += 1

    if word[right - 1] == char:
      count += 1

    if count == 1:
      numValidPasswords +=1

  print(numValidPasswords)