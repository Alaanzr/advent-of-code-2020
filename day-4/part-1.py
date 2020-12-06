with open('data.txt') as f:
  data = f.read().split('\n\n')

  requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
  ]

  numValidPassports = 0
  
  for datum in data:
    formatted = datum.replace('\n', ' ')
    fields = formatted.split(' ')

    fieldCount = 0
    for field in fields:
      key, *_ = field.split(':')
      if key in requiredFields:
        fieldCount += 1

    if fieldCount == len(requiredFields):
      numValidPassports += 1
  
  print(numValidPassports)