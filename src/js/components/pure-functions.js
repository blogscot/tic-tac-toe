export function findWinner(squares) {
    const positions = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]

    for (let seq of positions) {
      let [a, b, c] = seq
      if (squares[a] == squares[b] && 
          squares[a] == squares[c] && 
          squares[b] == squares[c])
      return squares[a]
      }
    return null
  }