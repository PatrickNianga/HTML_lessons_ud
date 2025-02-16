const banner = document.querySelector(".banner__image");

banner.addEventListener('click', ()=>{
    document.querySelector('.banner').remove();
})


const playVideoBtn = document.querySelector('.content__btn2')
const video = document.querySelector('.content__clip')
function openVideo() {
    video.play()
}
playVideoBtn.addEventListener('click', ()=>{
    openVideo()
});