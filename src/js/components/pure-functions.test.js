import { findWinner } from './pure-functions'


describe('Find a winner', () => {
  test('find a winner on first row', () => {
    let squares = ['X','X','X',null,null,null,null,null]

    expect(findWinner(squares)).toBe('X')
  })
})