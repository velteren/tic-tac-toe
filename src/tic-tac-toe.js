class TicTacToe {
	constructor() {
    this.currentPlayerSymbol = 'x';
    this.matrix = [
    	[null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.isFinishedState = false;
    this.isDrawState = false;
    this.winner = null;
    this.turns = 9;
    
  }
  getCurrentPlayerSymbol() {
  	return this.currentPlayerSymbol;
  }
  nextTurn(row, col) {
  	if (this.matrix[row][col] === null && this.isFinishedState == false && this.isDrawState == false && this.winner == null) {
    	this.matrix[row][col] = this.currentPlayerSymbol;
      this.turns -= 1;
      if (this.turns == 0) {
      	this.isFinishedState = true;  
      }
      //first row check:
      if (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][1] === this.matrix[0][2]) {
      	this.winner = this.matrix[0][0];
    	}
      //second row check:
      else if (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[1][2]) {
      	this.winner = this.matrix[1][0];
      }
      //third row check:
      else if (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][1] === this.matrix[2][2]) {
      	this.winner = this.matrix[2][0];
      }
      //first column check:
      else if (this.matrix[0][0] === this.matrix[1][0] && this.matrix[1][0] === this.matrix[2][0]) {
      	this.winner = this.matrix[0][0];
      }
      //second column check:
      else if (this.matrix[0][1] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][1]) {
      	this.winner = this.matrix[0][1];
      }
      //third column check:
      else if (this.matrix[0][2] === this.matrix[1][2] && this.matrix[1][2] === this.matrix[2][2]) {
      	this.winner = this.matrix[0][2];
      }
      //left diagonal check:
      else if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][2]) {
      	this.winner = this.matrix[0][0];
      }
      //right diagonal check:
      else if (this.matrix[0][2] === this.matrix[1][1] && this.matrix[1][1] === this.matrix[2][0]) {
      	this.winner = this.matrix[0][2];
      }
      if (this.currentPlayerSymbol == 'x') {
    		this.currentPlayerSymbol = 'o';
    	} else {
    		this.currentPlayerSymbol = 'x';
    	}
    }
    
  }
  isFinished() {
  	if (this.isFinishedState == true || this.winner != null || this.isDrawState == true) {
    	this.isFinishedState = true;
    	return true;
    } else {
    	this.isFinishedState = false;
    	return false;
    }
  }
  getWinner() {
  	return this.winner;
  }
  noMoreTurns() {
  	return !this.turns;
  }
  isDraw() {
  	return this.noMoreTurns() && !this.getWinner() ? true : false ;
  }
  getFieldValue(row, col) {
  	return this.matrix[row][col];
  }
}

module.exports = TicTacToe;
