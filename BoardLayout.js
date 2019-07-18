
export default class BoardLayout {
  constructor (board) {
    this.board = board
  }

  render () {
    const line = '.'.repeat(this.board.width) + '\n'
    return line.repeat(this.board.height)
  }
}
