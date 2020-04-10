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
    video[this.name] = this.value; 
    console.log(this.name, this.value);
}//end handleRangeUpdate function 

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100; //currentTime and duration are built in video properties
    progressBar.style.flexBasis = `${percent}%`;
}//end handleProgress function

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
    // console.log(e);
}//end scrub function

function scrubUpdate(scrubtime) {

}//end scrubUpdate function

/* HOOK UP EVENT LISTENERS */ 
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mouseup', handleRangeUpdate));//ranges are 'volume' and 'playbackRate' 

progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', scrub);
// progress.addEventListener('mouseup', scrubUpdate);