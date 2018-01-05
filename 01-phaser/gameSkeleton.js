//create a new state - it's just a JS object
var GameState = {
	//preload assets: images, sounds, etc.
	preload: function(){
	
	},


	//runs once when all assets are loaded
	create: function() {

	}

};


//create a new game
var game = new Phaser.Game(600, 480, Phaser.AUTO);

//add the state
game.state.add('GameState', GameState);

//start the game!
game.state.start('GameState');

