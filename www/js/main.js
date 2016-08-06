// Time for the game to start, we are using only one GameState
var GameState = {
    // load the game assets here,
    preload: function() {
    this.load.image('background', 'res/city_construction.png');
    },
    // executed after everything is loaded
    create: function() {
    
    // Scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    // center the game horizontally and vertically
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
    // set the screen size automatically
    this.scale.updateLayout();
    
    this.add.image(0,0, 'background');
    },
    // game loop, updates all the time
    update: function() {
    }
};

// Initiate the Pahser framework

var game = new Phaser.Game(360, 640, Phaser.AUTO);

// Add the GameState and fire it off
game.state.add('GameState', GameState);
game.state.start('GameState');

