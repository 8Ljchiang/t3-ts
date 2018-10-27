import { IApp } from "../interfaces/class/IApp";
import { IGame } from "../interfaces/class/IGame";
import { IView } from "../interfaces/class/IView";
import Game from "./Game";
import Player from "./Player";
import View from "./View";
// import { GAME_STATE_CLOSED } from "../lib/constants";

export default class App implements IApp {
    public game: IGame;
    public view: IView;
    public parser: any;
    public inputHandler: any;

    constructor(args: { game: IGame, view?: IView, inputHandler: any, parser?: any }) {
        this.game = args.game || this.newGame();
        this.view = args.view || new View({});
        this.parser = args.parser || {};
        this.inputHandler = args.inputHandler;

        this.init();
    }

    init() {
        this.inputHandler.on('line', (line: any) => {
            this.view.clear();
            if (line && this.parser !== null) {
                const args = {
                    key: this.game.state,
                    input: line,
                    context: this.game,
                    view: this.view
                }
                this.parser.parse(args);
                this.view.renderGame(this.game);
            }
            this.view.setPrompt(`${this.game.currentPlayer().name}: `, this.inputHandler);
        });
    }

    newGame() {
        const players = [new Player({ name: "player1", mark: "X" }), new Player({ name: "player2", mark: "O" })];
        return new Game({ players });
    }

    run() {
        this.view.clear();
        this.view.renderGame(this.game);
        this.view.setPrompt(`${this.game.currentPlayer().name}: `, this.inputHandler);
    }
}