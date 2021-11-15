import {BowlingGame} from "../src/app";

const MAX_ROLLS = 20;
const rollFullGame = (bowlingGame: BowlingGame, score: number) => {
    for (let i = 0; i<MAX_ROLLS; i++) {
        bowlingGame.roll(score);
    }
}
describe('GIVEN a bowling game with a valid set of rolls', () => {
    describe('WHEN all rolls are 0', () => {
        it('THEN the score is 0', () => {
            const bowlingGame = new BowlingGame();
            rollFullGame(bowlingGame, 0);
            expect(bowlingGame.score()).toEqual(0);
        })
    })
    describe('WHEN all rolls are 1', () => {
        it('THEN the score is 20', () => {
            const bowlingGame = new BowlingGame();
            rollFullGame(bowlingGame, 1);
            expect(bowlingGame.score()).toEqual(20);
        })
    })
    describe('WHEN there are two rolls, 4 and 4', () => {
        it('THEN the score is 8', () => {
            const bowlingGame = new BowlingGame();
            bowlingGame.roll(4);
            bowlingGame.roll(4);
            expect(bowlingGame.score()).toEqual(8);
        })
    })
})
