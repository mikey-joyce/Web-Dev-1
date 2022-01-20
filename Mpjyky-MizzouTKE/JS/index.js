/* References:
        1. https://www.youtube.com/watch?v=flItyHiDm7E&ab_channel=codefoxx
        2. https://benfrain.com/automatically-play-and-pause-video-as-it-enters-and-leaves-the-viewport-screen/
*/

/*const scroll = new SmoothScroll('nav a[href*="#"]',{
    speed: 800
});*/

//JQuery right here for tha grader :)
$("#nav_logo").click(function() {
    window.location.href = '#top'
    });

/* Start of code from reference 1 */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navLinks");
const about = document.querySelector("#aboutButton");
const recruitment = document.querySelector("#recruitmentButton");
const alumni = document.querySelector("#alumniButton");
const contact = document.querySelector("#contactButton");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".linkHov").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove(".active");
    navMenu.classList.remove(".active");
}))
/* End of code used from reference 1 */

about.addEventListener("click", () =>{
    if(hamburger.classList.contains("active") && navMenu.classList.contains("active")){
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
})

recruitment.addEventListener("click", () =>{
    if(hamburger.classList.contains("active") && navMenu.classList.contains("active")){
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
})

alumni.addEventListener("click", () =>{
    if(hamburger.classList.contains("active") && navMenu.classList.contains("active")){
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
})

contact.addEventListener("click", () =>{
    if(hamburger.classList.contains("active") && navMenu.classList.contains("active")){
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }
})

function carouselClickable(myImg){
    window.open(myImg.src);
}

const labels = [
    'Fall 2018',
    'Spring 2019',
    'Fall 2019',
    'Spring 2020',
    'Fall 2020',
    'Spring 2021',
];

const data = {
    labels: labels,
    datasets: [{
        label: 'TKE New Member',
        backgroundColor: '#AD2624',
        borderColor: '#AD2624',
        data: [3.105, 2.992, 2.807, 3.313, 3.313, 3.287],
    },{
        label: 'All New Member',
        backgroundColor: '#8E76FF',
        borderColor: '#8E76FF',
        data: [3.019, 2.927, 2.872, 3.356, 3.256, 3.093],
    },{
        label: 'Freshman Male',
        backgroundColor: '#F1B82D',
        borderColor: '#F1B82D',
        data: [2.876, 2.804, 2.879, 3.228, 2.959, 2.969],
    }/*,{
        label: 'All Fraternity',
        backgroundColor: '#8E76FF',
        borderColor: '#8E76FF',
        data: [3.088, 3.095, 3.035, 3.477, 3.238, 3.232],
    },{
        label: 'TKE',
        backgroundColor: '#AD2624',
        borderColor: '#AD2624',
        data: [3.130, 3.091, 2.912, 3.516, 3.186, 3.186],
    },{
        label: 'All Male',
        backgroundColor: '#F1B82D',
        borderColor: '#F1B82D',
        data: [3.020, 3.054, 3.013, 3.381, 3.097, 3.134],
    }*/]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales:{
            yAxis:{
                text: 'GPA',
                display: true,
                suggestedMax: 3.6,
                suggestedMin: 2.6
            }
        }
    }
};

const lineChart = new Chart(
    document.getElementById('line-chart'),
    config
);

/* Code for background video */
var video = document.getElementById("mj-video");
var muteButton = document.getElementById("playpause");

function pausePlay(){
    if(video.muted == true){
        video.muted = false;
        muteButton.src = "../Assets/mute2.svg";
        return;
    }
    else{
        video.muted = true;
        muteButton.src = "../Assets/mute.svg";
        return;
    }
}

/* Start of code from reference 2*/
function viewPortPlayPause() {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0.75 }
                );
                observer.observe(video);
            });
        }
    });
}
/* End of code from reference 2 */

// Pauses video
function togglePause(){
    if(videoFlag == true){
        $('body').off('load'); //JQuery right here
    }
}

function updateDownloadFile(){
    var mySelect = document.getElementById("newsletter-select");
    var selected = mySelect.options[mySelect.selectedIndex].text;

    document.getElementById("download-source").setAttribute("href", "../Assets/newsletters/" + selected + ".pdf");
}

//Lock screen orientation
screen.lockOrientation('portrait'); // IMPORTANT THIS MUST BE THE LAST LINE OF CODE