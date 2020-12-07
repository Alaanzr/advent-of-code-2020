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
    return acc
  }, {})

  console.log('colourset', colourSet)

  // const containsBagRecursive = (myBag, bags, key, colourSet) => {
  //   const list = Array.from(bags)
  //   if (!list.length) return false

  //   const colour = list.shift()

  //   if (colour === myBag) {
  //     return true
  //   }

  //   if (colourSet[colour] && colourSet[colour].length) {
  //     list.push(...colourSet[colour])
  //   }

  //   const bagSet = new Set(list)
    
  //   return containsBagRecursive(myBag, bagSet, key, colourSet)
  // }

  const countBagsRecursive = (set, colourSets, sum) => {
    const [num, colour] = set.split(/(\d)/).filter(i => i).map(i => i.trim())
  }

  let sum = 0

  const startingSet = colourSets[myBag]

  countBagsRecursive(startingSet, colourSets, sum)

  // Object.keys(colourSet).forEach(key => {
  //   const bags = new Set(colourSet[key])
  //   if (containsBagRecursive(myBag, bags, key, colourSet)) {
  //     sum += 1
  //   }
  // })

  console.log(sum)
})()