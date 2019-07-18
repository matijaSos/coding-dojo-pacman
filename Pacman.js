import Direction from './Direction'

export default class Pacman {
  constructor (coordinates) {
    this.coordinates = coordinates
    this.direction = Direction.UP
  }

  setDirection (direction) {
    this.direction = direction
  }

  getDirection () {
    return this.direction
  }
}
