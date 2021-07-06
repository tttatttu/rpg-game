import './index.scss';
import SenseiWalk from './assets/Female-4-Walk.png';

const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const spriteW = 48;
const spriteH = 48;
const shots = 3;
let cycle = 0;
let pY = 276;
let pX = 276;

let keyPressed = null;

function keyDownHandler(e) {
  keyPressed = e.key;
}

function keyUpHandler() {
  keyPressed = null;
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = SenseiWalk;

img.addEventListener('load', () => {
  setInterval(() => {
    ctx.fillStyle = 'pink';
    ctx.fillRect(0, 0, 600, 600);

    let n = null;
    cycle = (cycle + 1) % shots;
    switch (keyPressed) {
      case 'Down':
      case 'ArrowDown':
        if (pY <= 552) {
          pY += 10;
        }
        return ctx.drawImage(img, cycle * spriteW, n, spriteW, spriteH, pX, pY, 48, 48);
      case 'Up':
      case 'ArrowUp':
        if (pY >= 0) {
          pY -= 10;
        }
        n = 3;
        return ctx.drawImage(img, cycle * spriteW, 48 * n, spriteW, spriteH, pX, pY, 48, 48);
      case 'Left':
      case 'ArrowLeft':
        if (pX >= 0) {
          pX -= 10;
        }
        n = 1;
        return ctx.drawImage(img, cycle * spriteW, 48 * n, spriteW, spriteH, pX, pY, 48, 48);
      case 'Right':
      case 'ArrowRight':
        if (pX <= 552) {
          pX += 10;
        }
        n = 2;
        return ctx.drawImage(img, cycle * spriteW, 48 * n, spriteW, spriteH, pX, pY, 48, 48);
      default:
        return ctx.drawImage(img, cycle * spriteW, 48 * n, spriteW, spriteH, pX, pY, 48, 48);
    }
  }, 120);
});
