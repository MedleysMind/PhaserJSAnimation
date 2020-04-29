var config = {
  type: Phaser.AUTO,
  width: 450,
  height: 800,
  scale: {
    // parent: "div",
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: {
    preload: preload,
    create: create,
  },
};

var game = new Phaser.Game(config);

function preload() {
  this.load.video(
    "intro",
    "./assets/videos/TITLEMOBILE.mp4",
    "loadeddata",
    false,
    false
  );
  this.load.image("start", )
}

function create() {
    
  var vid = this.add.video(225 , 400, "intro");
  vid.setScale(.5);
  // var played = false;
//   if (!played) {
    vid.play(true);
    // vid.play(false);
    // played = true;
    // vid.destroy(true);
//   }
}
