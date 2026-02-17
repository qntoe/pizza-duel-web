'use client'
class InstrumentationTimer {
    constructor(startTime) {
        this.startTime = startTime || Date.now();
        this.stepStartTime = this.startTime;
    }
    getElapsed() {
        return Date.now() - this.startTime;
    }
    startStep() {
        this.stepStartTime = Date.now();
    }
    getStepElapsed() {
        return Date.now() - this.stepStartTime;
    }
    resetStep() {
        this.startStep();
    }
    setStartTime(startTime) {
        this.startTime = startTime;
    }
    setStepStartTime(stepStartTime) {
        this.stepStartTime = stepStartTime;
    }
}

export { InstrumentationTimer };
