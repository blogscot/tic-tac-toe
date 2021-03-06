// @flow
import { findWinner, movesLeft, nextPlayer } from "../components/pure-functions"

/*
  GameAI calculates the optimal position for either player,
  'X' or 'O' upon constuction.
*/

export default class GameAI {
  bestMove: number | null
  minimax: (Array<string>, string, number) => number
  constructor(game: Array<string>, player: string) {
    this.bestMove = null
    this.minimax(game, player, 0)
  }

  minimax(game: Array<string>, player: string, depth: number = 0): number {
    let winnerResult: string = findWinner(game)

    if (winnerResult !== null) {
      return this.getScore(winnerResult, depth)
    }

    if (!movesLeft(game)) {
      return 0
    }

    let availableMoves = this.getFreePositions(game)
    let stack = []
    let opponent = nextPlayer(player)

    availableMoves.forEach(move => {
      let clonedGame: Array<string> = game.slice()
      clonedGame[move] = player

      let result: number = this.minimax(clonedGame, opponent, depth + 1)
      stack.push(result)
    })

    let result = stack[0]
    let optimalMove = availableMoves[0]

    for (let i = 1; i < stack.length; i++) {
      if (
        (stack[i] > result && player === "X") ||
        (stack[i] < result && player === "O")
      ) {
        result = stack[i]
        optimalMove = availableMoves[i]
      }
    }

    if (depth === 0) {
      this.bestMove = optimalMove
    }
    return result
  }

  getScore(result: string, depth: number) {
    if (result === "X") {
      return 10 - depth
    } else if (result === null) {
      return 0
    }
    return depth - 10
  }

  getFreePositions(game: Array<string>) {
    let stack: Array<number> = []
    for (let i = 0; i < game.length; i++) {
      if (game[i] === null) {
        stack.push(i)
      }
    }
    return stack
  }
}
