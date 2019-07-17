import { main } from './index'

test('main function', async () => {
  await main()
})

test('Board is constructed with width and height', () => {
  const board = new Board(3, 5)
  expect(board.getDimensions()).toBe([3, 5])
})
