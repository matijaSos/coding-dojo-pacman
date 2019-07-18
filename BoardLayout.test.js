import Board from './Board'
import BoardLayout from './BoardLayout'

test('BoardLayout is created with initial board.', () => {
  const board = new Board(10, 10)
  new BoardLayout(board)
})

test('BoardLayout is able to render a board in console.', () => {
  const board = new Board(10, 10)
  const boardLayout = new BoardLayout(board)

  boardLayout.render()
  expect(() => {
    boardLayout.render()
  }).not.toThrow()
})

test('BoardLayout is able to render a board with correct dimensions.', () => {
  const board = new Board(2, 2)
  const boardLayout = new BoardLayout(board)
  const renderedBoard = boardLayout.render()
  const expectedBoardLayout = '..\n..\n'
  expect(renderedBoard).toEqual(expectedBoardLayout)
})

test('BoardLayout is able to render a board with correct dimensions.', () => {
  const board = new Board(3, 3)
  const boardLayout = new BoardLayout(board)
  const renderedBoard = boardLayout.render()
  const expectedBoardLayout = '...\n...\n...\n'
  expect(renderedBoard).toEqual(expectedBoardLayout)
})
