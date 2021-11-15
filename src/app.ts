const MAX_BOWL = 10;

export class BowlingGame {
    private totalScore = 0;
    private frames: number[][] = [[]];

    roll(score: number) {
        const latestFrame = this.getLatestFrame();
        const isSpare = latestFrame[0] + latestFrame[1] === MAX_BOWL;
        if (isSpare) {
            this.totalScore += score * 2;
        } else {
            this.totalScore += score;
        }
        this.addRollToFrame(score);
    }

    addRollToFrame = (score: number) => {
        const latestFrame = this.getLatestFrame();
        const isNewFrame = latestFrame.length === 2 || latestFrame[0] === MAX_BOWL;
        isNewFrame
            ? this.frames.push([score])
            : this.frames[this.frames.length - 1].push(score);
    }

    getLatestFrame() {
        return this.frames[this.frames.length-1];
    }
    score() {
        return this.totalScore;
    }
}
