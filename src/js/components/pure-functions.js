/*
 Examines a board to determine if a player has won
 
 Returns 'X', 'O' or null
 */
export function findWinner(squares) {
  const positions = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]

  for (let seq of positions) {
    let [a, b, c] = seq
    if (squares[a] !== null &&
        squares[a] === squares[b] &&
        squares[b] === squares[c])
      return squares[a]
  }
  return null
}

// Returns true if the board has remaining empty squares
export function movesLeft(squares) {
  return squares.indexOf(null) !== -1
}

export function nextPlayer(currentPlayer) {
  return currentPlayer === 'X' ? 'O' : 'X'
}

export function updateGameStatus(squares, currentPlayer) {
  const winner = findWinner(squares)
  let status
  if (winner) {
    status = 'Winner: ' + winner
  } else if (movesLeft(squares)){
    status = 'Next player: ' + nextPlayer(currentPlayer)
  } else {
    status = 'Game is drawn'
  }
  return status
}

