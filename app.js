var config = {
    type: Phaser.AUTO,
    width: 400,
    height: 800,
    
    scene: {
        preload: preload,
        create: create
    },
};

var game = new Phaser.Game(config);

function preload ()
{

    this.load.video('intro', '/assets/videos/TITLEMOBILE.mp4', 'loadeddata', false, false);
}

function create ()
{
    var vid = this.add.video(200, 400, 'intro');

        // vid.play(true);
}