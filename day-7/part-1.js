const { read } = require('../utils')

;(async () => {
  const data = await read('./data.txt')

  const myBag = 'shiny gold'

  const colourSet = data.reduce((acc, val) => {
    const [key, ...values] = val
      .replace(/\s*|,|\.|bag/, '')  
      .split(/\d|bags|contain/)
      .map(i => i.replace(/bag|,|\./g, '').trim())

    acc[key] = values
    return acc
  }, {})

  const containsBagRecursive = (myBag, bags, key, colourSet) => {
    const list = Array.from(bags)
    if (!list.length) return false

    const colour = list.shift()

    if (colour === myBag) {
      return true
    }

    if (colourSet[colour] && colourSet[colour].length) {
      list.push(...colourSet[colour])
    }

    const bagSet = new Set(list)
    
    return containsBagRecursive(myBag, bagSet, key, colourSet)
  }

  let sum = 0

  Object.keys(colourSet).forEach(key => {
    const bags = new Set(colourSet[key])
    if (containsBagRecursive(myBag, bags, key, colourSet)) {
      sum += 1
    }
  })

  console.log(sum)
})()