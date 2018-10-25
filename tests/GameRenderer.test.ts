import Game from '../src/classes/Game';
import GameRenderer from '../src/classes/GameRenderer';
import { GAME_WELCOME, GAME_STARTED, GAME_FINALE } from '../src/lib/constants';

const game = new Game();
const gameRenderer = new GameRenderer();

describe("GameRenderer", () => {
    it("should return the welcome string", () => {
        expect(gameRenderer.welcome(game)).toEqual(GAME_WELCOME);
    })

    it("should return the game started string", () => {
        expect(gameRenderer.render(game)).toEqual(GAME_STARTED);
    })

    it("should return the game finale string", () => {
        expect(gameRenderer.finale(game)).toEqual(GAME_FINALE);
    })
})