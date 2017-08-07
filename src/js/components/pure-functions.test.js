import { 
  findWinner, 
  movesLeft,
  nextPlayer,
  updateGameStatus } from './pure-functions'

describe('Find a winner', () => {

  test('find a winner on first row', () => {
    let squares = [
      'X','X','X',
      null,null,null,
      null,null,null]

    expect(findWinner(squares)).toBe('X')
  })

  test('find a winner on last row', () => {
    let squares = [
      null,'X',null,
      'X',null,null,
      'O','O','O']

    expect(findWinner(squares)).toBe('O')
  })

  test('find a winner on first column', () => {
    let squares = [
      'O','X',null,
      'O',null,null,
      'O','X','X']

    expect(findWinner(squares)).toBe('O')
  })

  test('find a winner on middle column', () => {
    let squares = [
      'O','X',null,
      null,'X',null,
      'O','X',null]

    expect(findWinner(squares)).toBe('X')
  })

  test('find a winner on diagonal', () => {
    let squares = [
      'O','X',null,
      null,'O',null,
      null,'X','O']

    expect(findWinner(squares)).toBe('O')
  })

  test('a game without a winner', () => {
    let squares = [
      'X','X','O',
      'O','O','X',
      'X','O','X']

    expect(findWinner(squares)).toBeFalsy()
  })

})

describe('Moves left?', () => {
  test('A non-empty board has moves left', () => {
    let squares = [
      'X','X','X',
      null,null,null,
      null,null,null]

    expect(movesLeft(squares)).toBeTruthy()
  })

  test('A full board has no moves left', () => {
    let squares = [
      'X','X','X',
      'X','X','X',
      'X','X','X']

    expect(movesLeft(squares)).toBeFalsy()
  })    
})

describe('Update Game Status', () => {
  test('A game has a winner', () => {
    let squares = [
      'X','X','X',
      null,null,null,
      null,null,null]

    expect(updateGameStatus(squares, 'O')).toBe('Winner: X')
  })

  test('A game is in progress', () => {
    let squares = [
      'null','O','X',
      'O',null,'X',
      'X','O',null]

    expect(updateGameStatus(squares, 'X')).toBe('Next player: O')
  })    

  test('A game to be a draw', () => {
    let squares = [
      'O','X','O',
      'O','X','O',
      'X','O','X']

    expect(updateGameStatus(squares, 'O')).toBe('Game is drawn')
  })    
})


describe('Players use Xs and Os', () => {
  test('The next player is X', () => {
    expect(nextPlayer('O')).toBe('X')
  })

  test('The next player is O', () => {
    expect(nextPlayer('X')).toBe('O')
  })
})
