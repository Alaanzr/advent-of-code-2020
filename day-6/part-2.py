import string

with open('data.txt') as f:
  data = f.read().split('\n\n')

  sum = 0

  for group in data:
    answers = set(string.ascii_lowercase)

    for passenger_answers in group.split():
      answers.intersection_update(passenger_answers)
    
    sum += len(answers)
  
  print(sum)