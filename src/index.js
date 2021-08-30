import { io } from 'socket.io-client';
import './index.scss';
import ClientGame from './client/ClientGame';

import EventSourceMixin from './common/EventSourceMixin';
import { getTime } from './common/util';
import ClientApi from './client/ClientApi';

window.addEventListener('load', async () => {
  const world = await fetch('https://jsmarathonpro.herokuapp.com/api/v1/world').then((res) => res.json());
  const sprites = await fetch('https://jsmarathonpro.herokuapp.com/api/v1/sprites').then((res) => res.json());
  const gameObjects = await fetch('https://jsmarathonpro.herokuapp.com/api/v1/gameObjects').then((res) => res.json());
  const socket = io('https://jsprochat.herokuapp.com');
  // const socket = io('http://localhost:3001');
  const $startGame = document.querySelector('.start-game');
  const $nameForm = document.getElementById('nameForm');
  const $inputName = document.getElementById('name');

  const $chatWrap = document.querySelector('.chat-wrap');
  const $form = document.getElementById('form');
  const $input = document.getElementById('input');
  const $message = document.querySelector('.message');

  $startGame.style.display = 'flex';

  const submitName = (e) => {
    e.preventDefault();

    if ($inputName.value) {
      ClientGame.init({
        tagId: 'game',
        playerName: $inputName.value,
        world,
        sprites,
        gameObjects,
        apiCfg: {
          url: 'https://jsmarathonpro.herokuapp.com/',
          path: '/game',
        },
      });
      // socket.emit('start', $inputName.value);

      $chatWrap.style.display = 'block';

      $nameForm.removeEventListener('submit', submitName);
      $startGame.remove();
    }
  };

  $nameForm.addEventListener('submit', submitName);

  $form.addEventListener('submit', (e) => {
    e.preventDefault();

    if ($input.value) {
      // socket.emit('chat message', $input.value);

      $input.value = '';
    }
  });

  // socket.on('chat connection', (data) => {
  //   $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> ${data.msg}</p>`);
  // });
  //
  // socket.on('chat disconnect', (data) => {
  //   $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> ${data.msg}</p>`);
  // });
  //
  // socket.on('chat message', (data) => {
  //   $message.insertAdjacentHTML('beforeend', `<p><strong>${getTime(data.time)}</strong> - ${data.msg}</p>`);
  // });
  //
  // socket.on('chat online', (data) => {
  //   $message.insertAdjacentHTML(
  //     'beforeend',
  //     `<p><strong>${getTime(data.time)} - в сети</strong> - ${data.online} </p>`,
  //   );
  // });
});

function test() {
  EventSourceMixin.pushEvent();
}

test();
