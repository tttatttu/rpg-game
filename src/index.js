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

let bottomPressed = false;
let upPressed = false;
let leftPressed = false;
let rightPressed = false;

function keyDownHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = true;
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = true;
  }
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Down' || e.key === 'ArrowDown') {
    bottomPressed = false;
  }
  if (e.key === 'Up' || e.key === 'ArrowUp') {
    upPressed = false;
  }
  if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

const img = document.createElement('img');
img.src = SenseiWalk;

img.addEventListener('load', () => {
  setInterval(() => {
    if (bottomPressed) {
      if (pY <= 552) {
        pY += 10;
      }
      cycle = (cycle + 1) % shots;
      return ctx.drawImage(img, cycle * spriteW, 0, spriteW, spriteH, pX, pY, 48, 48);
    }

    if (upPressed) {
      if (pY >= 0) {
        pY -= 10;
      }
      cycle = (cycle + 1) % shots;
      return ctx.drawImage(img, cycle * spriteW, 144, spriteW, spriteH, pX, pY, 48, 48);
    }

    if (rightPressed) {
      if (pX <= 552) {
        pX += 10;
      }
      cycle = (cycle + 1) % shots;
      return ctx.drawImage(img, cycle * spriteW, 96, spriteW, spriteH, pX, pY, 48, 48);
    }

    if (leftPressed) {
      if (pX >= 0) {
        pX -= 10;
      }

      cycle = (cycle + 1) % shots;
      return ctx.drawImage(img, cycle * spriteW, 48, spriteW, spriteH, pX, pY, 48, 48);
    }

    // ctx.clearRect(0, 0, 600, 600);
    ctx.fillStyle = 'pink';
    ctx.fillRect(0, 0, 600, 600);
    return ctx.drawImage(img, cycle * spriteW, 0, spriteW, spriteH, pX, pY, 48, 48);
    // bottomPressed && ctx.drawImage(img, cycle * spriteW, 0, spriteW, spriteH, pX, pY, 48, 48);
    // upPressed && ctx.drawImage(img, cycle * spriteW, 144, spriteW, spriteH, pX, pY, 48, 48);
    // rightPressed && ctx.drawImage(img, cycle * spriteW, 96, spriteW, spriteH, pX, pY, 48, 48);
    // leftPressed && ctx.drawImage(img, cycle * spriteW, 48, spriteW, spriteH, pX, pY, 48, 48);
  }, 120);
});
