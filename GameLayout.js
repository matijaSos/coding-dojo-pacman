import BoardLayout from './BoardLayout'


export default class GameLayout {
  constructor (game) {
    this.game = game
  }

  render() {
    const boardLayout = new BoardLayout(this.game.board)
    const pacmanShape = 'v'
    let renderedBoard = boardLayout.render()

    return `${pacmanShape}.\n..\n`
  }
}
