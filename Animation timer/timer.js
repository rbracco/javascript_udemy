class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput
        this.startButton = startButton
        this.pauseButton = pauseButton
        this.startButton.addEventListener('click', this.start)
        this.pauseButton.addEventListener('click', this.pause)

        if(callbacks) {
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }
    }

    start = () => {
        if (this.interval){
            console.log("Already Started")
            return
        }
        if (this.onStart){
            this.onStart(this.timeRemaining)
        }
        if (this.timeRemaining > 0){
            this.tick()
            this.interval = setInterval(this.tick, 50);
        }
        
    }
    tick = () => {
        console.log("Time to tick")
        if (this.timeRemaining > 0){
            this.timeRemaining -= 0.05
            if (this.onTick){
                this.onTick(this.timeRemaining)
            }
            if (this.timeRemaining === 0) {
                if(this.onComplete){
                    this.onComplete()
                }
                this.pause()
            }
        }
    }
    pause = () => {
        clearInterval(this.interval)
        this.interval = null
    }
    
    get timeRemaining() {
        if (this.durationInput.value.includes(':')) {
            let [minutes, seconds] = this.durationInput.value.split(':')
            return 60*parseFloat(minutes) + parseFloat(seconds)
        }
        return parseFloat(this.durationInput.value)
    }

    set timeRemaining(time) {
        let fixed = time.toFixed(2);
        this.durationInput.value = `${Math.floor(fixed/60)}:${fixed%60}`
    }
}