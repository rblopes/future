/*
 * Boot state
 * ==========
 *
 * The first state of the game, responsible for setting up some Phaser
 * features. Adjust the game appearance, number of input pointers, screen
 * orientation handling etc. using this game state.
 */

import assets from '../assets';
//import 'phaser-state-transition-plugin';

export default class Boot extends Phaser.State {

  init(){
    //Initialize plugins here. Remember to include the plugin in your package.json's dependencies, Example:
    //"dependencies": {
    //"phaser": "^2.6.1",
    //"phaser-state-transition-plugin": "^0.1.6"
    //}
    //run npm install, and add "import 'plugin-name'" at the top of this file.
    //this.game.stateTransition = this.game.plugins.add(Phaser.Plugin.StateTransition);
  }

  preload() {
    // Point the Phaser Asset Loader to where your game assets live.
    this.load.path = 'assets/';

    // Initialize physics engines here. Remember that Phaser builds including
    // Arcade Physics have it enabled by default.
    //this.physics.startSystem(Phaser.Physics.P2);

    // Adjust how many pointers Phaser will check for input events.
    this.input.maxPointers = 2;

    // Set the alignment of the game canvas within the page.
    this.scale.pageAlignHorizontally = true;

    // Adjust the scaling mode of the game canvas.
    // Example: If you're developing a pixel-art game, set it to 'USER_SCALE'.
    this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;

    // When using 'USER_SCALE' scaling mode, use this method to adjust the
    // scaling factor.
    //this.scale.setUserScale(2);

    // Uncomment the following line to adjust the rendering of the canvas to
    // crisp graphics. Great for pixel-art!
    //Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);

    // Uncomment this line to disable smoothing of textures.
    //this.stage.smoothed = false;

    // If the game canvas loses focus, keep the game loop running.
    this.stage.disableVisibilityChange = true;

    // Load the graphical assets required to show the splash screen later,
    // using the asset pack data.
    this.load.pack('boot', null, assets);
  }

  create() {
    // After applying the first adjustments and loading the splash screen
    // assets, move to the next game state.
    this.state.start('Preload');
  }

}
