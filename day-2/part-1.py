with open('data.txt') as f:
  data = f.read().splitlines()

  numValidPasswords = 0

  for datum in data:
    minMax, charWithSuffix, word = datum.split(' ')
    minChar, maxChar = minMax.split('-')
    min = int(minChar)
    max = int(maxChar)
    char = charWithSuffix.replace(':', '')

    count = 0

    for i in range(len(word)):
      if word[i] == char:
        count += 1
    
    if count >= min and count <= max:
      numValidPasswords += 1

  print(numValidPasswords)