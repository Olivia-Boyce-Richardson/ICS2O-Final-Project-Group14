/**
 * This class is the Menu Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor.
   */
  constructor() {
    super({ key: "menuScene" })

    this.menuSceneBackgroundImage = null
    this.startButton = null
  }

  /**
   * Can be defined on your own scenes.
   * This method is called by the scene manager when the scene is started,
   *  before preload() and create ().
   * @param {object} data - Any data passed via ScenePlugin.add(). or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "./assets/subwaysurfertitlescreen.png")
    this.load.image("startButton", "./assets/start.png")
  }

  /**
   * Can be defined on your own scenes.
   * Use it to create game objects.
   * @param {object} data - Any data passed via ScenePlugin.add(). or ScenePlugin.start().
   */
  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton())
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is active.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    //pass
  }

  clickButton() {
    this.scene.start("gameScene")
  }
}

export default MenuScene
