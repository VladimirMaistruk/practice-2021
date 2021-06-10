var next = document.getElementById('right_arrow');
var prew = document.getElementById('left_arrow');
var slides = document.getElementsByClassName('twitter_slide');
for(var i=0; i<slides.length; i++) {
   slides[i].style.zIndex = slides.length - i;
}
next.onclick = function () {
    var activeEl = document.querySelector('.twitter_active');
    if(activeEl.nextElementSibling) {
       activeEl.style.left = "-100%";
       activeEl.classList.remove('twitter_active');
       activeEl.nextElementSibling.classList.add('twitter_active');
       this.classList.remove('twitter_no_active');
    }
}
prew.onclick = function () {
    var activeEl = document.querySelector('.twitter_active');
    if(activeEl.previousElementSibling) {
       activeEl.previousElementSibling.style.left = "0%";
       activeEl.classList.remove('twitter_active');
       activeEl.previousElementSibling.classList.add('twitter_active');
       this.classList.remove('twitter_no_active');
    }
} 