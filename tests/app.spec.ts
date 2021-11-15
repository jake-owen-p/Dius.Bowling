import {BowlingGame} from "../src/app";

describe('GIVEN a bowling game with a valid set of rolls', () => {
    let bowlingGame: BowlingGame;
    beforeEach(() => {
        bowlingGame = new BowlingGame();
    })
    const rollSome = (score: number, rolls: number) => {
        for (let i = 0; i<rolls; i++) {
            bowlingGame.roll(score);
        }
    }
    const rollSelection = (rolls: number[]) => {
        for (const roll of rolls) {
            bowlingGame.roll(roll);
        }
    }
    describe('WHEN all roles are the same', () => {
        describe('AND all rolls are 0', () => {
            it('THEN the score is 0', () => {
                rollSome(0, 20);
                expect(bowlingGame.score()).toEqual(0);
            })
        })
        describe('AND all rolls are 1', () => {
            it('THEN the score is 20', () => {
                rollSome(1, 20);
                expect(bowlingGame.score()).toEqual(20);
            })
        })
        describe('AND all rolls are 4', () => {
            it('THEN the score is 80', () => {
                rollSome(4, 20);
                expect(bowlingGame.score()).toEqual(80);
            })
        })
    })
    describe('WHEN considering only a spare', () => {
        describe('AND there are four rolls [4,6,5,0] AND the first frame is a spare', () => {
            it('THEN the score is 20', () => {
                const rolls = [4,6,5,0];
                rollSelection(rolls);
                rollSome(0, 16);
                expect(bowlingGame.score()).toEqual(20);
            })
        })
        describe('AND there are four rolls [4,6,5,5,5,4] AND the first two frames are spares', () => {
            it('THEN the score is 39', () => {
                const rolls = [4,6,5,5,5,4];
                rollSelection(rolls);
                rollSome(0, 14);
                expect(bowlingGame.score()).toEqual(39);
            })
        })
        describe('AND the game is all spares', () => {
            it('THEN the score is 150', () => {
                const rolls = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
                rollSelection(rolls);
                expect(bowlingGame.score()).toEqual(150);
            })
        })
    })
    describe('WHEN considering only a strike', () => {
        describe('AND there are three rolls [10,5,4] AND the first frame is a strike', () => {
            it('THEN the score is 28', () => {
                const rolls = [10,5,4];
                rollSelection(rolls);
                rollSome(0, 16);
                expect(bowlingGame.score()).toEqual(28);
            })
        })
        describe('AND the game is all strikes', () => {
            it('THEN the score is 300', () => {
                const rolls = [10,10,10,10,10,10,10,10,10,10,10,10];
                rollSelection(rolls);
                expect(bowlingGame.score()).toEqual(300);
            })
        })
    })
    describe('WHEN considering game consisting of spares, strikes and regular scores', () => {
        describe('AND the rolls are [10,10,2,4,6,2,5,5,4,4,10,4,3,10,2,2]', () => {
            it('THEN the score is 116', () => {
                const rolls = [10,10,2,4,6,2,5,5,4,4,10,4,3,10,2,2];
                rollSelection(rolls);
                expect(bowlingGame.score()).toEqual(116);
            })
        })
        describe('AND the rolls are [8,2,4,5,4,6,10,10,7,3,3,3,2,5,7,3,10,10,10]', () => {
            it('THEN the score is 166', () => {
                const rolls = [8,2,4,5,4,6,10,10,7,3,3,3,2,5,7,3,10,10,10];
                rollSelection(rolls);
                expect(bowlingGame.score()).toEqual(166);
            })
        })
    })
})
