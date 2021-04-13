class Game {
  constructor () {
    this.board = new Board();
    this.players = this.createPlayers();
    this.ready = false;
  }
  /*
 * Creates two player objects
 * @return  {Array}    An array of two Player objects.
 */
  createPlayers(){
    const players = [new Player('player one', 1, '#e15258', true),
                    new Player('player two', 2, '#e59a13')];
    return players;
  }
  /**
  *returns active player.
  *@return {object} player -The active player.
  */
  get activePlayer() {
    return this.players.find(player => player.active);
  }
  /*
  *Gets game ready to play
  */
  startGame() {
    this.board.drawHTMLBoard();
    this.activePlayer.activeToken.drawHTMLToken();
    this.ready = true;
  }
}
