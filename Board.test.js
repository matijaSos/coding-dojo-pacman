import Board from './Board'

test('Board is created with initial dimensions', () => {
  const height = 10
  const width = 5
  new Board(width, height)
})
