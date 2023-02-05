// ----------------------------------------------------------------------
const bell = document.querySelector('.fa-bell')
const backgroundBell = document.querySelector('.background-bell')
function Bell(){
    backgroundBell.classList.toggle('open')
}
bell.addEventListener('click', Bell)

const search = document.querySelector('.fa-magnifying-glass')
const backgroundSearch = document.querySelector('#input')
function Search(){
    backgroundSearch.classList.toggle('open')
}
search.addEventListener('click', Search)

const subnav = document.querySelector('#more')
const backgroundSubnav = document.querySelector('#subnav')
function Subnav(){
    backgroundSubnav.classList.toggle('open')
}
subnav.addEventListener('click', Subnav)

const avatar = document.querySelector('.avatar')
const boxInfomation = document.querySelector('.box-infomation')
function Avatar(){
    boxInfomation.classList.toggle('open')
}
avatar.addEventListener('click', Avatar)    

const reels = document.querySelector('#reels')
const tin = document.querySelector('#tin')
const meeting = document.querySelector('#phonghopmat')
const book = document.querySelector('.fa-book-open')
const clapperBoard = document.querySelector('.fa-clapperboard')
const video = document.querySelector('.fa-video') 
const reelsOpen = document.querySelector('#reels-open')
const meetingOpen = document.querySelector('#meeting-open')
const newOpen = document.querySelector('#new-open')
function OpenNewOpen(){
    tin.classList.remove('remove')
    meeting.classList.remove('open')
    reels.classList.remove('remove')
    book.classList.remove('remove')
    clapperBoard.classList.remove('remove')
    video.classList.remove('open')
    reelsOpen.classList.remove('remove')
    meetingOpen.classList.remove('open')
    newOpen.classList.remove('remove')

    tin.classList.remove('remove')
    meeting.classList.remove('remove')
    reels.classList.remove('open')
    book.classList.remove('remove')
    clapperBoard.classList.remove('open')
    video.classList.remove('remove')
    reelsOpen.classList.remove('open')
    meetingOpen.classList.remove('remove')
    newOpen.classList.remove('remove')

    tin.classList.add('open')
    meeting.classList.add('remove')
    reels.classList.add('remove')
    book.classList.add('open')
    clapperBoard.classList.add('remove')
    video.classList.add('remove')
    reelsOpen.classList.add('remove')
    meetingOpen.classList.add('remove')
    newOpen.classList.add('open')
}
newOpen.addEventListener('click', OpenNewOpen)
function OpenReels(){
    tin.classList.remove('remove')
    meeting.classList.remove('open')
    reels.classList.remove('remove')
    book.classList.remove('remove')
    clapperBoard.classList.remove('remove')
    video.classList.remove('open')
    reelsOpen.classList.remove('remove')
    meetingOpen.classList.remove('open')
    newOpen.classList.remove('remove')

    tin.classList.remove('open')
    meeting.classList.remove('remove')
    reels.classList.remove('remove')
    book.classList.remove('open')
    clapperBoard.classList.remove('remove')
    video.classList.remove('remove')
    reelsOpen.classList.remove('remove')
    meetingOpen.classList.remove('remove')
    newOpen.classList.remove('open')

    tin.classList.add('remove')
    meeting.classList.add('remove')
    reels.classList.add('open')
    book.classList.add('remove')
    clapperBoard.classList.add('open')
    video.classList.add('remove')
    reelsOpen.classList.add('open')
    meetingOpen.classList.add('remove')
    newOpen.classList.add('remove')
}
reelsOpen.addEventListener('click', OpenReels)
function OpenMeetingOpen(){
    tin.classList.remove('remove')
    meeting.classList.remove('remove')
    reels.classList.remove('open')
    book.classList.remove('remove')
    clapperBoard.classList.remove('open')
    video.classList.remove('remove')
    reelsOpen.classList.remove('open')
    meetingOpen.classList.remove('remove')
    newOpen.classList.remove('remove')

    tin.classList.remove('open')
    meeting.classList.remove('remove')
    reels.classList.remove('remove')
    book.classList.remove('open')
    clapperBoard.classList.remove('remove')
    video.classList.remove('remove')
    reelsOpen.classList.remove('remove')
    meetingOpen.classList.remove('remove')
    newOpen.classList.remove('open')

    tin.classList.add('remove')
    meeting.classList.add('open')
    reels.classList.add('remove')
    book.classList.add('remove')
    clapperBoard.classList.add('remove')
    video.classList.add('open')
    reelsOpen.classList.add('remove')
    meetingOpen.classList.add('open')
    newOpen.classList.add('remove')
}
meetingOpen.addEventListener('click', OpenMeetingOpen)

const inputPosts = document.querySelector('#input-posts')
const comments = document.querySelector('.fb-comments')
function OpenComments(){
    comments.classList.toggle('open')
}
inputPosts.addEventListener('click', OpenComments)