import ClientEngine from './ClientEngine';
import ClientWorld from './ClientWorld';

import sprites from '../configs/sprites';
import levelCfg from '../configs/world.json';
import gameObjects from '../configs/gameObjects.json';

class ClientGame {
  constructor(cfg) {
    Object.assign(this, {
      cfg,
      gameObjects,
      player: null,
    });

    this.engine = this.createEngine();
    this.map = this.createWorld();
    this.initEngine();
  }

  setPlayer(player) {
    this.player = player;
  }

  createEngine() {
    return new ClientEngine(document.getElementById(this.cfg.tagId));
  }

  createWorld() {
    return new ClientWorld(this, this.engine, levelCfg);
  }

  initEngine() {
    this.engine.loadSprites(sprites).then(() => {
      this.map.init();

      this.engine.on('render', (_, time) => {
        this.map.render(time);
      });
      this.engine.start();
      this.initKeys();
    });
  }

  keyPressed(keydown, x, y) {
    if (keydown) {
      this.player.moveByCellCoord(x, y, (cell) => cell.findObjectsByType('grass').length);
    }
  }

  initKeys() {
    this.engine.input.onKey({
      ArrowLeft: (keydown) => this.keyPressed(keydown, -1, 0),
      ArrowRight: (keydown) => this.keyPressed(keydown, +1, 0),
      ArrowUp: (keydown) => this.keyPressed(keydown, 0, -1),
      ArrowDown: (keydown) => this.keyPressed(keydown, 0, +1),
    });
  }

  static init(cfg) {
    if (!ClientGame.game) {
      ClientGame.game = new ClientGame(cfg);
    }
  }
}

export default ClientGame;
