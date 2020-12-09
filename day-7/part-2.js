/**
 * TODO: Fix - broke implementation at some point :<
 */

const { read } = require('../utils')

;(async () => {
  const data = await read('./data.txt')

  const myBag = 'shiny gold'

  const colourSet = data.reduce((acc, val) => {
    const [key, ...values] = val
      .split(/bags|contain/)
      .filter(i => i !== ' ' && i !== ', ' && i !== '.')
      .map(i => i.replace(/bag|,|\./g, '')
      .trim())

    acc[key] = values
      .map(i => i.split(/(\d)/).filter(i => i).map(i => i.trim()))
      .map(group => {
        const number = group[0] === 'no other' ? 0 : Number(group[0])
        return { number, value: group[1] }
      }) 

    return acc
  }, {})

  const getBagSum = (list, colourSet, sum) => {
    if (!list.length) return sum

    while (list.length) {
      let group = list.shift()

      if (!group.value) continue
      sum += group.number * group.parentVal

      for (let i = 0; i < colourSet[group.value].length; i++) {
          list.push({ ...colourSet[group.value][i], parentVal: colourSet[group.value][i].number * (group.parentVal || 1), parent: `${group.parent} | ${group.value}` }) 
      }
    }

    return sum
  }

  let list = []
  for (let i = 0; i < colourSet[myBag].length; i++) {
    list.push({ ...colourSet[myBag][i], parentVal: 1 })
  }

  const sum = getBagSum(list, colourSet, 0)

  console.log(sum)
})()