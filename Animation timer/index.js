console.log("hello world")

const durationInput = document.querySelector('#duration')
const startInput = document.querySelector('#start')
const pauseInput = document.querySelector('#pause')
const circle = document.querySelector('circle')

const perimeter = circle.getAttribute('r') * 2 * Math.PI
circle.setAttribute('stroke-dasharray', perimeter)
let duration;


let t = new Timer(durationInput, startInput, pauseInput, {
    onStart(totalDuration) {
        duration = totalDuration;
        console.log('Timer Started')
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter)
    },
    onComplete() {
        console.log('Timer Complete')
        
    }
})