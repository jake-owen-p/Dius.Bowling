import {BowlingGame} from "../src/app";

const MAX_ROLLS = 20;
const rollFullGame = (bowlingGame: BowlingGame, score: number) => {
    for (let i = 0; i<MAX_ROLLS; i++) {
        bowlingGame.roll(score);
    }
}
const rollSelection = (bowlingGame: BowlingGame, rolls: number[]) => {
    for (const roll of rolls) {
        bowlingGame.roll(roll);
    }
}
describe('GIVEN a bowling game with a valid set of rolls', () => {
    let bowlingGame: BowlingGame;
    beforeEach(() => {
        bowlingGame = new BowlingGame();
    })
    describe('WHEN all roles are the same', () => {
        describe('AND all rolls are 0', () => {
            it('THEN the score is 0', () => {
                rollFullGame(bowlingGame, 0);
                expect(bowlingGame.score()).toEqual(0);
            })
        })
        describe('AND all rolls are 1', () => {
            it('THEN the score is 20', () => {
                rollFullGame(bowlingGame, 1);
                expect(bowlingGame.score()).toEqual(20);
            })
        })
        describe('AND there are two rolls [4,4]', () => {
            it('THEN the score is 8', () => {
                bowlingGame.roll(4);
                bowlingGame.roll(4);
                expect(bowlingGame.score()).toEqual(8);
            })
        })
    })
    describe('WHEN considering only a spare', () => {
        describe('AND there are four rolls [4,6,5,0] AND the first frame is a spare', () => {
            it('THEN the score is 20', () => {
                const rolls = [4,6,5,0];
                rollSelection(bowlingGame, rolls);
                expect(bowlingGame.score()).toEqual(20);
            })
        })
        describe('AND there are four rolls [4,6,5,5,5,4] AND the first two frames are spares', () => {
            it('THEN the score is 39', () => {
                const rolls = [4,6,5,5,5,4];
                rollSelection(bowlingGame, rolls);
                expect(bowlingGame.score()).toEqual(39);
            })
        })
    })
})
