const MAX_BOWL = 10;

export class BowlingGame {
    private totalScore = 0;
    private frames: number[][] = [[]];

    roll(score: number) {
        const latestFrame = this.frames[this.frames.length-1];
        const isNewFrame = latestFrame.length === 2 || latestFrame[0] === MAX_BOWL;
        isNewFrame
            ? this.frames.push([score])
            : this.frames[this.frames.length - 1].push(score);
    }

    score() {
        for (let i = 0; i<this.frames.length; i++) {
            const totalFrameScore = this.frames[i][0] + this.frames[i][1];
            const isSpare = totalFrameScore === MAX_BOWL;
            if (isSpare) {
                const nextRoll = this.frames[i+1][0];
                this.totalScore += totalFrameScore + nextRoll;
            } else {
                this.totalScore += totalFrameScore;
            }
        }
        return this.totalScore;
    }
}
