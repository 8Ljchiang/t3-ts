import Game from '../src/classes/Game';
import Player from '../src/classes/Player';
import GameRenderer from '../src/classes/GameRenderer';
import PatternChecker from '../src/classes/PatternChecker';
import { winPatterns3 } from '../src/lib/patterns';
import { GAME_WELCOME, GAME_STARTED, GAME_FINALE, GAME_STATE_STARTED, GAME_STATE_END } from '../src/lib/constants';

const patternChecker = new PatternChecker({ patterns: winPatterns3 });
const players = [new Player({ name: "Mark", mark: "X"}), new Player({ name: "Tom", mark: "O"})]
const game = new Game({ players, patternChecker });
const gameRenderer = new GameRenderer();

describe("GameRenderer", () => {
    it("should return the welcome string", () => {
        expect(gameRenderer.render(game)).toEqual(GAME_WELCOME);
    })

    it("should return the game started string", () => {
        game.setState(GAME_STATE_STARTED);
        expect(gameRenderer.render(game)).toEqual("It's Mark's turn.");
    })

    it("should return the game finale string", () => {
        game.setState(GAME_STATE_END);
        expect(gameRenderer.render(game)).toEqual(GAME_FINALE);
    })
})