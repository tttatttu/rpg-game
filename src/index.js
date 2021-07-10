import './index.scss';
import ClientGame from './client/ClientGame';

import terrainAtlas from './assets/terrain.png';
import worldCfg from './configs/world.json';
import sprites from './configs/sprites';
import ClientWorld from './client/ClientWorld';
import ClientEngine from './client/ClientEngine';
import EventSourceMixin from './common/EventSourceMixin';

const terrain = document.createElement('img');
terrain.src = terrainAtlas;

const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;
let pY = 276;
let pX = 276;

window.addEventListener('load', () => {
  ClientGame.init({ tagId: 'game' });
});

function test() {
  EventSourceMixin.pushEvent();
}

test();
// const canvas = document.getElementById('game');
// const ctx = canvas.getContext('2d');

// const terrain = document.createElement('img');
// terrain.src = terrainAtlas;
//
// terrain.addEventListener('load', () => {
//   const {map} = worldCfg;
//   map.forEach((cfgRow, y) => {
//     cfgRow.map((cfgCell, x) => {
//       const [sX, sY, sW, sH] = sprites.terrain[cfgCell[0]].frames[0];
//       const world = new ClientWorld()
//       console.log(world)
//       world.init(terrain, 2 * sX, 1 * sY, 1 * sW, 2 * sH, x * spriteW, y * spriteH, spriteW, spriteH)
//       console.log(cfgCell[0])
//     })
//
//   })
// })
//
// let keyPressed = null;
//
// function keyDownHandler(e) {
//   keyPressed = e.key;
// }
//
// function keyUpHandler() {
//   keyPressed = null;
// }
//
// document.addEventListener('keydown', keyDownHandler);
// document.addEventListener('keyup', keyUpHandler);
//
// const img = document.createElement('img');
// img.src = SenseiWalk;
//
// function walk(timestamp) {
//   let n = null;
//   cycle = (cycle + 1) % shots;
//
//   // ctx.fillRect(0, 0, 600, 600);
//   window.requestAnimationFrame(walk)
//
//   switch (keyPressed) {
//     case 'Down':
//     case 'ArrowDown':
//       if (pY <= 552) {
//         pY += 10;
//       }
//       return ctx.drawImage(img, cycle * spriteW, n, spriteW, spriteH, pX, pY, 48, 48);
//     case 'Up':
//     case 'ArrowUp':
//       if (pY >= 0) {
//         pY -= 10;
//       }
//       n = 3;
//       return ctx.drawImage(img, cycle * spriteW, 48 * n, spriteW, spriteH, pX, pY, 48, 48);
//     case 'Left':
//     case 'ArrowLeft':
//       if (pX >= 0) {
//         pX -= 10;
//       }
//       n = 1;
//       return ctx.drawImage(img, cycle * spriteW, 48 * n, spriteW, spriteH, pX, pY, 48, 48);
//     case 'Right':
//     case 'ArrowRight':
//       if (pX <= 552) {
//         pX += 10;
//       }
//       n = 2;
//       return ctx.drawImage(img, cycle * spriteW, 48 * n, spriteW, spriteH, pX, pY, 48, 48);
//     default:
//       return ctx.drawImage(img, cycle * spriteW, 48 * n, spriteW, spriteH, pX, pY, 48, 48);
//   }
//
// }
//
// img.addEventListener('load', () => {
//   window.requestAnimationFrame(walk)
//   // setInterval(() => {
//   //   // ctx.fillStyle = 'pink';
//   //   // ctx.fillRect(0, 0, 600, 600);
//   //
//   //
//   // }, 120);
// });
