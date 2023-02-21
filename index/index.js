// ------------------------------------------------------------- 
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
// -------------------------------------------------------------    

