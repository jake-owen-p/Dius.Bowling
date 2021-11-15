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
            const totalFrameScore = this.getFrameScore(i);
            if (this.isStrike(i)) {
                this.totalScore += totalFrameScore + this.getStrikeBonus(i);
            } else if (this.isSpare(i)) {
                this.totalScore += totalFrameScore + this.getSpareBonus(i);
            } else {
                this.totalScore += totalFrameScore;
            }
        }
        return this.totalScore;
    }

    isStrike(index: number) {
        return this.frames[index][0] === MAX_BOWL;
    }

    isSpare(index: number) {
        return this.frames[index][0] + this.frames[index][1] === MAX_BOWL
    }

    getStrikeBonus(index: number) {
        const firstBonusRoll = this.frames[index + 1][0];
        const secondBonusRoll = this.isStrike(index + 1) ? this.frames[index + 2][0] : this.frames[index + 1][1];
        return firstBonusRoll + secondBonusRoll;
    }

    getSpareBonus(index: number) {
        return this.frames[index + 1][0];
    }

    getFrameScore(index: number) {
        const isStrike = this.frames[index][0] === MAX_BOWL;
        return isStrike ? MAX_BOWL : this.frames[index][0] + this.frames[index][1];
    }
}
