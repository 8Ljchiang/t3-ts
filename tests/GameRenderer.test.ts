import Game from '../src/classes/Game';
import GameRenderer from '../src/classes/GameRenderer';
import { GAME_WELCOME, GAME_STARTED, GAME_FINALE } from '../src/lib/constants';
import Player from '../src/classes/Player';

const players = [new Player({ name: "Mark", mark: "X"}), new Player({ name: "Tom", mark: "O"})]
const game = new Game({ players });
const gameRenderer = new GameRenderer();

describe("GameRenderer", () => {
    it("should return the welcome string", () => {
        expect(gameRenderer.render(game)).toEqual(GAME_WELCOME);
    })

    it("should return the game started string", () => {
        expect(gameRenderer.render(game)).toEqual("It's Mark's turn.");
    })

    it("should return the game finale string", () => {
        expect(gameRenderer.render(game)).toEqual(GAME_FINALE);
    })
})