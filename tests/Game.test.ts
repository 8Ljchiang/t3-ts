import Game from '../src/classes/Game';
import Player from '../src/classes/Player';
import PatternChecker from '../src/classes/PatternChecker';

import { winPatterns3 } from '../src/lib/patterns';
import { GAME_STATE_NEW, GAME_STATE_STARTED, GAME_STARTED } from '../src/lib/constants';

const players = [new Player({ name: "Mike", mark: "X"}), new Player({ name: "Will", mark: "O"})];
const patternChecker = new PatternChecker({ patterns: winPatterns3 });
let game = new Game({ players, patternChecker });

describe("Game", () => {

    beforeEach(() => {
        game = new Game({ players, patternChecker });
    })

    it("should create a game with a state of 'NEW'", () => {
        expect(game.state).toEqual(GAME_STATE_NEW)
    });

    it("should change the game state to STARTED", () => {
        game.setState(GAME_STATE_STARTED);
        expect(game.state).toEqual(GAME_STATE_STARTED);
    });

    it("it should increase the activePlayerIndex by 1 when a playPosition is called", () => {
        game.setState(GAME_STATE_STARTED);
        game.playPosition(1);
        expect(game.activePlayerIndex).toEqual(1);
    })
})