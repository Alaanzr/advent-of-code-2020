const { read } = require('../utils')

;(async () => {
  const data = await read('./data.txt', '\n\n')

  const requiredFields = [
    'byr',
    'iyr',
    'eyr',
    'hgt',
    'hcl',
    'ecl',
    'pid'
  ]

  let numValidPassports = 0
  data.forEach(datum => {
    const formatted = datum.replace(/\n/g, ' ')
    const fields = formatted.split(' ')

    let fieldCount = 0
    fields.forEach(field => {
      console.log('field', field)
      const [ key ] = field.split(':')
      if (requiredFields.includes(key)) {
        fieldCount += 1
      }
    })

    if (fieldCount === requiredFields.length) {
      numValidPassports += 1
    }
  })
  
  console.log('num valid passports: ', numValidPassports)
})()