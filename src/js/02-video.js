import Player from '@vimeo/player';
import throttle from  'lodash.throttle';

const STORAGE_KEY ='videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
onPageLoad();

player.on('timeupdate', throttle(onPlayerTimeUpdate,1000));

function onPlayerTimeUpdate(time) {
    localStorage.setItem(STORAGE_KEY, time.seconds);
};

function onPageLoad() {
    const currentTime = localStorage.getItem(STORAGE_KEY);
    if (currentTime) {
        player.setCurrentTime(currentTime);
    }
   };
    
