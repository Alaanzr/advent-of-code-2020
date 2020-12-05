const { read } = require('../utils')

;(async () => {
  const data = await read('./data.txt')

  const findHelper = (blocks, range, lowerHalfKey) => {
    const start = range[0]
    const end = range[1]

    if (start === end) return start

    const key = blocks.splice(0, 1)[0]
    const isLowerHalf = key === lowerHalfKey

    if (isLowerHalf) {
      const endingRow = Math.floor(end - (end - start) / 2)
      const newRange = [start, endingRow]
      return findHelper(blocks, newRange, lowerHalfKey)
    } else {
      const startingRow = Math.ceil(start + (end - start) / 2)
      const newRange = [startingRow, end]
      return findHelper(blocks, newRange, lowerHalfKey)
    }
  }

  const findRow = (rows) => findHelper(rows, [0, 127], 'F')
  const findColumn = (columns) => findHelper(columns, [0, 7], 'L')
  
  let maxSeatID = 0
  const seatIDs = []

  for (let i = 0; i < data.length; i++) {
    const ticket = data[i]
    const rowPartition = ticket.substr(0, 7).split('')
    const columnPartition = ticket.substr(7, 3).split('')
    const row = findRow(rowPartition)
    const column = findColumn(columnPartition)
    const seatID = (row * 8) + column
    seatIDs.push(seatID)
    maxSeatID = Math.max(maxSeatID, seatID)
  }

  let seat
  for (let i = 0; i < maxSeatID; i++) {
    const isSeatOccupied = seatIDs.find(seatID => seatID === i)
    if (!isSeatOccupied) {
      seat = i
    }
  }

  console.log(seat)
})()