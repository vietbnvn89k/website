const video = document.getElementById('icon-music')
const play = document.querySelector('.play-bottom-bar')
const pause = document.querySelector('.pause-bottom-bar')


function Play(){
    video.play();
    play.classList.add('remove')
    pause.classList.add('open')
}

function Pause(){
    video.pause();
    play.classList.remove('remove')
    pause.classList.remove('open')
}

play.addEventListener('click', Play)

pause.addEventListener('click', Pause)
