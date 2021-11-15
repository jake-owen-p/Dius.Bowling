import {BowlingGame} from "../src/app";

const MAX_ROLLS = 20;
const rollFullGame = (bowlingGame: BowlingGame, score: number) => {
    for (let i = 0; i<MAX_ROLLS; i++) {
        bowlingGame.roll(score);
    }
}

describe('GIVEN a bowling game with a valid set of rolls', () => {
    let bowlingGame: BowlingGame;
    beforeEach(() => {
        bowlingGame = new BowlingGame();
    })
    describe('WHEN all rolls are 0', () => {
        it('THEN the score is 0', () => {
            rollFullGame(bowlingGame, 0);
            expect(bowlingGame.score()).toEqual(0);
        })
    })
    describe('WHEN all rolls are 1', () => {
        it('THEN the score is 20', () => {
            rollFullGame(bowlingGame, 1);
            expect(bowlingGame.score()).toEqual(20);
        })
    })
    describe('WHEN there are two rolls [4,4]', () => {
        it('THEN the score is 8', () => {
            bowlingGame.roll(4);
            bowlingGame.roll(4);
            expect(bowlingGame.score()).toEqual(8);
        })
    })
    describe('WHEN there are four rolls [4,6,5,0] AND the first two count as a spare', () => {
        it('THEN the score is 20', () => {
            const rolls = [4,6,5,0];
            for (const roll of rolls) {
                bowlingGame.roll(roll);
            }
            expect(bowlingGame.score()).toEqual(20);
        })
    })
    describe('WHEN there are four rolls [4,6,5,5,5,4] AND the first two count as a spare', () => {
        it('THEN the score is 20', () => {
            const rolls = [4,6,5,5,5,4];
            for (const roll of rolls) {
                bowlingGame.roll(roll);
            }
            expect(bowlingGame.score()).toEqual(39);
        })
    })
})
