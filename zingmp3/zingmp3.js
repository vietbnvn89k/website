const heart = document.querySelector('.fa-heart')
const ellipsis = document.querySelector('.fa-ellipsis')
function clickHeart(){
    heart.classList.toggle("open")
}
function clickEllipsis(){
    
}
heart.addEventListener('click', clickHeart)


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

function OpenFullscreen() {
    if (video.requestFullscreen()){
        Play();
    } 
    else{
        Pause();    
    }
}

play.addEventListener('click', Play)

pause.addEventListener('click', Pause)

video.addEventListener('click', OpenFullscreen)