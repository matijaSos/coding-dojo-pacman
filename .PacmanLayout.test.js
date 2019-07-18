import Game from './Game'
import Board from './Board'
import Pacman from './Pacman'
import GameLayout from './GameLayout'

test('Pacman layout is rendered.', () => {
  const board = new Board(2, 2)
  const pacman = new Pacman({x: 0, y: 0})
  const pacmanShape = 'v'
  const game = new Game(board, pacman)
  const gameLayout = new GameLayout(game)
  const ascii = gameLayout.render()
  expect(ascii).toBe(`${pacmanShape}.\n..\n`)
})
