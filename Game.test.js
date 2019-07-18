import Game from './Game'
import Board from './Board'
import Pacman from './Pacman'

test('Game is created with Board and Pacman.', () => {
  const board = new Board()
  const pacman = new Pacman()
  const game = new Game(board, pacman)
  expect(game.board).toBe(board)
  expect(game.pacman).toBe(pacman)
})
