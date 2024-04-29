import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const KEY_STORAGE = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
iframe.style.margin = '20px auto';
iframe.style.displaye = 'flex';

const player = new Player(iframe);

player.on('timeupdate', throttle(updateTimeLocalStorage, 1000));

function updatingTimeLocalStorage({ seconds }) {
  localStorage.setItem(KEY_STORAGE, storage);
}

player.setCurrentTime(localStorage.getItem(KEY_STORAGE) || 0);
