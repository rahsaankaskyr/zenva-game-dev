// create a new game
// var game = new Phaser.Game(600, 480, Phaser.AUTO);
// width, height, renderer
// renderer options
// Phaser.WEBGL - WebGL API
// Phaser.CANVAS - HTML5 Canvas API
// Phaser.HEADLESS - server-side simulations
// Phaser.AUTO 


//create a new state - it's just a JS object
var GameState = {
	//preload assets: images, sounds, etc.
	preload: function(){
		//load the image file "hello.png"
		this.load.image('hello', 'assets/hello.png');
		
		//load file "background.png", give it a label of "mybackground"
		this.load.image('mybackground', 'assets/background.png');
		
		//load file "character.png", give it a key of "player"
		this.load.image('player', 'assets/character.png');
	
	},


	//runs once when all assets are loaded
	create: function() {
		//show our image on the screen
		this.add.sprite(0, 0, 'hello');
		//create a sprite, using the image with key "mybackground"
		this.add.sprite(0, 0, 'mybackground');

		var player = this.add.sprite(0, 0, 'player');

		// set x to 100
		player.x = 100;

		// set y to 50
		player.y = 50;

		//set the position to (10, 20)
		player.position = {x: 10, y: 20};

		//set the position to a variable
		var somewhere = {x: 1000, y: 1000};
		player.position = somewhere;
	}

};


//create a new game
var game = new Phaser.Game(600, 480, Phaser.AUTO);

//add the state
game.state.add('GameState', GameState);

//start the game!
game.state.start('GameState');

