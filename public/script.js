
const videoGrid = document.getElementById('video-grid');
const myVideo = document.createElement('video');
// my own video must be muted
myVideo.muted = true;


let myVideoStream
// this gives opportunity to get the media from chrome
navigator.mediaDevices.getUserMedia({
    //for the video
    video: true,
    audio: true,
}).then(stream => {
    // this assigns the stream data to the myVideoStream
    myVideoStream = stream;
    // fire the function, add pass the my video element, and the stream from the video
    addVideoStream(myVideo, stream);
})


const addVideoStream = (video, stream) => {
    // then we load all the data for the stream
    // get all the required data
    video.srcObject = stream;
    //video is going to play
    video.addEventListener('loadedmetadata', () => {
        video.play();
    })
    videoGrid.append(video);
}
