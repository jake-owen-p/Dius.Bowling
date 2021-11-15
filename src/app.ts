const MAX_BOWL = 10;

export class BowlingGame {
    private totalScore = 0;
    private frames: number[][] = [[]];
    private currentIndex = 0;

    roll(score: number) {
        const latestFrame = this.frames[this.frames.length-1];
        const isNewFrame = latestFrame.length === 2 || latestFrame[0] === MAX_BOWL;
        isNewFrame
            ? this.frames.push([score])
            : this.frames[this.frames.length - 1].push(score);
    }

    score() {
        for (this.currentIndex; this.currentIndex < 10; this.currentIndex++) {
            const totalFrameScore = this.getFrameScore();
            if (this.isStrike()) {
                this.totalScore += totalFrameScore + this.getStrikeBonus();
            } else if (this.isSpare()) {
                this.totalScore += totalFrameScore + this.getSpareBonus();
            } else {
                this.totalScore += totalFrameScore;
            }
        }
        return this.totalScore;
    }

    isStrike() {
        return this.frames[this.currentIndex][0] === MAX_BOWL;
    }

    isSpare() {
        return this.frames[this.currentIndex][0] + this.frames[this.currentIndex][1] === MAX_BOWL
    }

    getStrikeBonus() {
        const firstBonusRoll = this.frames[this.currentIndex + 1][0];
        const secondBonusRoll = firstBonusRoll === MAX_BOWL ? this.frames[this.currentIndex + 2][0] : this.frames[this.currentIndex + 1][1];
        return firstBonusRoll + secondBonusRoll;
    }

    getSpareBonus() {
        return this.frames[this.currentIndex + 1][0];
    }

    getFrameScore() {
        return this.frames[this.currentIndex].reduce((sum, x) => sum + x);
    }
}
