import { IApp } from "../interfaces/class/IApp";
import { IGame } from "../interfaces/class/IGame";
import { IView } from "../interfaces/class/IView";
import Game from "./Game";
import Player from "./Player";
import View from "./View";
import { GAME_STATE_CLOSED } from "../lib/constants";

export default class App implements IApp {
    public game: IGame;
    public view: IView;
    public parser: any;
    public inputHandler: any;

    constructor(args: { game?: IGame, view?: IView, inputHandler?: any, parser?: any }) {
        this.game = args.game || this.newGame();
        this.view = args.view || new View({});
        this.parser = null;
        this.parser = null;
    }

    newGame() {
        const players = [new Player({ name: "player1", mark: "X" }), new Player({ name: "player2", mark: "O" })];
        return new Game({ players });
    }

    run() {
        while (this.game.state !== GAME_STATE_CLOSED) {
            this.view.renderGame(this.game);
            // How do I handle input with readline in node.
        }
    }
}