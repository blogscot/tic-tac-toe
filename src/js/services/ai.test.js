import {
  GameAI
} from './ai'

describe('Verify artifical intelligence', () => {

  test('find free positions with spaces remaining', () => {
    let game = [
      'X','O','X',
      null,null,null,
      null,null,null]
    let computer = new GameAI(game, 'X')

    expect(computer.getFreePositions(game)).toEqual([3,4,5,6,7,8])
  })

  test('find free positions with no spaces remaining', () => {
    let game = [
      'X','O','X',
      'X','O','X',
      'X','O','X']
    let computer = new GameAI(game, 'X')

    expect(computer.getFreePositions(game)).toEqual([])
  })

  test('calculate the game score', () => {
    let stub = []
    let computer = new GameAI(stub, 'X')

    expect(computer.getScore('X',3)).toBe(7)
    expect(computer.getScore('O',3)).toBe(-7)
    expect(computer.getScore(null),3).toBe(0)
  })

  test('find optimal minmax value with single option', () => {
    let game = [
      'X','O','X',
      'O','X','O',
      null,'X','O']
    let { bestMove }  = new GameAI(game, 'X')
    
    expect(bestMove).toBe(6)
  })

  test('find optimal minmax value with multiple options', () => {
    let game = [
      null,'X','O',
      'X',null,null,
      null,null,'O']
    let { bestMove }  = new GameAI(game, 'X')
    
    expect(bestMove).toBe(5)
  })

  // TODO test GameAI with 'O'

})