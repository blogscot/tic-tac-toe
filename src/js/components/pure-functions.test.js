import { findWinner } from './pure-functions'


describe('Find a winner', () => {
  test('find a winner on first row', () => {
    let squares = ['X','X','X',
                   null,null,null,
                   null,null,null]

    expect(findWinner(squares)).toBe('X')
  })

  test('find a winner on last row', () => {
    let squares = [null,'X',null,
                   'X',null,null,
                   'O','O','O']

    expect(findWinner(squares)).toBe('O')
  })

  test('find a winner on first column', () => {
    let squares = ['O','X',null,
                   'O',null,null,
                   'O','X','X']

    expect(findWinner(squares)).toBe('O')
  })

  test('find a winner on middle column', () => {
    let squares = ['O','X',null,
                   null,'X',null,
                   'O','X',null]

    expect(findWinner(squares)).toBe('X')
  })

  test('find a winner on diagonal', () => {
    let squares = ['O','X',null,
                   null,'O',null,
                   null,'X','O']

    expect(findWinner(squares)).toBe('O')
  })

})