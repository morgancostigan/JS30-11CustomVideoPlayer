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

/* HOOK UP EVENT LISTENERS */ 
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);