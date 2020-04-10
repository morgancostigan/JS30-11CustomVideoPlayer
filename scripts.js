//GET OUR ELEMENTS
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//BUILD OUT FUNCTIONS
// function togglePlay() {
//     if(video.paused){ //.paused is a built in video property
//         video.play();
//     } else {
//         video.pause();
//     }
// }//end togglePlay function

function togglePlay() {
    const method = video.paused ? 'play' : 'pause'; //uses ?, the conditional or ternary operator
    video[method]();
}//end togglePlay function v2

function updateButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
    console.log('update button');
}//end updateButton function

function skip() {
    console.log('skippin');
    video.currentTime += parseFloat(this.dataset.skip); //parseFloat turns this... into a number from a string
}// end skip function

function handleRangeUpdate() {
    console.log(this.value);
    
}//end handleRangeUpdate function 

/* HOOK UP EVENT LISTENERS */ 
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mouseup', handleRangeUpdate));