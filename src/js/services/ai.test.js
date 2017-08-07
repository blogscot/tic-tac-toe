import {
  GridComputer
} from './ai'

describe('Verify artifical intelligence', () => {

  test('find free positions', () => {
    let squares = [
      'X','O','X',
      null,null,null,
      null,null,null]
    let computer = new GridComputer(squares, 'X')

    expect(computer.getFreePositions(squares)).toEqual([3,4,5,6,7,8])
  })

})