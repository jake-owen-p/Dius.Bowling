export class BowlingGame {
    private totalScore = 0;

    roll(score: number) {
        this.totalScore += score;
    }
    score() {
        return this.totalScore;
    }
}
