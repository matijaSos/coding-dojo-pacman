import Game from './Game'
import Board from './Board'
import Pacman from './Pacman'
import GameLayout from './GameLayout'
import Direction from './Direction'

test('Game layout is rendered with pacman.', () => {
  const board = new Board(2, 2)
  const pacman = new Pacman({x: 0, y: 0})
  const pacmanShape = 'v'
  const game = new Game(board, pacman)
  const gameLayout = new GameLayout(game)
  const ascii = gameLayout.render()
  expect(ascii).toBe(`${pacmanShape}.\n..\n`)
})

test('Game layout is rendered with pacman.', () => {
  const board = new Board(2, 2)
  const pacman = new Pacman({x: 1, y: 0})
  const pacmanShape = '<'
  pacman.setDirection(Direction.RIGHT)
  const game = new Game(board, pacman)
  const gameLayout = new GameLayout(game)
  const ascii = gameLayout.render()
  expect(ascii).toBe(`.${pacmanShape}\n..\n`)
})

// test('Pacman is within the board', () => {
//   const board = new Board(2, 2)
//   const pacman = new Pacman({x: 0, y: 0})
//   expect()
// })
