const { read } = require('../utils')

;(async () => {
  const data = await read('./data.txt', '\n\n')

const requiredFields = {
  'byr': value => value >= 1920 && value <= 2002,
  'iyr': value => value >= 2010 && value <= 2020,
  'eyr': value => value >= 2020 && value <= 2030,
  'hgt': value => {
    const isCm = value.includes('cm')
    const number = isCm ? Number(value.replace('cm', '')) : Number(value.replace('in', ''))
    return isCm ? number >= 150 && number <= 193 : number >= 59 && number <= 76
  },
  'hcl': value => !!value.match(/^#[a-fA-F|\d]{6}$/),
  'ecl': value => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value),
  'pid': value => !!value.match(/^\d{9}$/)
}

  let numValidPassports = 0
  data.forEach(datum => {
    const formatted = datum.replace(/\n/g, ' ')
    const fields = formatted.split(' ')

    let fieldCount = 0
    fields.forEach(field => {
      const [ key, value ] = field.split(':')
      if (key in requiredFields) {
        const isValid = requiredFields[key](value)

        if (isValid) {
          fieldCount += 1
        }
      }
    })

    if (fieldCount === Object.keys(requiredFields).length) {
      numValidPassports += 1
    }
  })
  
  console.log('num valid passports: ', numValidPassports)
})()