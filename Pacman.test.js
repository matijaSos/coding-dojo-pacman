import Pacman from './Pacman'
import Direction from './Direction'

test('Pacman is created with initial dimensions', () => {
  const coordinates = {
    x: 1,
    y: 2
  }
  new Pacman(coordinates)
})

describe('Direction.', () => {
  const coordinates = { x: 1, y: 2 }
  const pacmanDefaultDirection = Direction.UP

  test('We can get pacmans direction.', () => {
    const babyPacman = new Pacman(coordinates)
    expect(babyPacman.getDirection()).toBeDefined()
  })

  test('Pacman has a default direction.', () => {
    const babyPacman = new Pacman(coordinates)
    expect(babyPacman.getDirection()).toEqual(pacmanDefaultDirection)
  })

  test('Direction was updated correctly.', () => {
    const babyPacman = new Pacman(coordinates)
    babyPacman.setDirection(Direction.UP)
    expect(babyPacman.getDirection()).toEqual(Direction.UP)
    babyPacman.setDirection(Direction.LEFT)
    expect(babyPacman.getDirection()).toEqual(Direction.LEFT)
  })

})
