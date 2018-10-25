import Game from '../src/classes/Game';
import Player from '../src/classes/Player';
import { GAME_STATE_NEW, GAME_STATE_STARTED, GAME_STARTED } from '../src/lib/constants';

let game = new Game({});

describe("Game", () => {

    beforeEach(() => {
        const players = [new Player({ name: "Mike", mark: "X"}), new Player({ name: "Will", mark: "O"})];
        game = new Game({ players });
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