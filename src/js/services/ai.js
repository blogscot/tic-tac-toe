import { 
  findWinner, 
  movesLeft, 
  nextPlayer } from '../components/pure-functions'

export class GridComputer {
  constructor (grid, player) {
    this.bestChoise = null
    this.minimax(grid, player, 0)
    return this.bestChoise
  }

  minimax (grid, player, depth) {
    let winnerResult = findWinner(grid)

    if (winnerResult !== null) {
      return this.getScore(winnerResult, player, depth)
    }

    if (!movesLeft(grid)) {
      return 0
    }

    let availableMoves = this.getFreePositions(grid)
    let stack = []
    let oppositePlayer = nextPlayer(player)

    availableMoves.forEach(move => {
      let clonedGrid = grid.slice()
      clonedGrid[move] = player

      let result = this.minimax(clonedGrid, oppositePlayer, depth + 1)
      stack.push(result)
    })

    let result = stack[0]
    let optimalMove = availableMoves[0]

    for (let i = 1; i < stack.length; i++) {
      if ((stack[i] > result && player === 'X') ||
          (stack[i] < result && player === 'O')) {
        result = stack[i]
        optimalMove = availableMoves[i]
      }
    }

    if (depth === 0 && player === 'X') {
      this.bestChoise = optimalMove
    }
    return result
  }
  
  // TODO remove unused player
  getScore (result, player, depth) {
    if (result === 'X') {
      return 10 - depth
    } else if (result === null) {
      return 0
    }
    return depth - 10
  }

  getFreePositions (grid) {
    let stack = []
    for (let i = 0; i < grid.length; i++) {
      if (grid[i] === null) {
        stack.push(i)
      }
    }
    return stack
  }

}
