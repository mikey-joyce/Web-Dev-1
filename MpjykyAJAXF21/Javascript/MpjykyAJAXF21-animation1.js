/* References:
        1. https://tobiasahlin.com/moving-letters/#7 */

//Start of code used from reference 1
var textWrapper = document.querySelector('.mj-galleryTitle .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.mj-galleryTitle .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 750,
    opacity: [-0.75,1],
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i
  })
// End of code used from reference 1