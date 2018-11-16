import { IApp } from "../interfaces/class/IApp";
import { IGame } from "../interfaces/class/IGame";
import { IView } from "../interfaces/class/IView";
import Game from "./Game";
import Player from "./Player";
import View from "./View";

import { winPatterns3 } from "../lib/patterns";
import PatternChecker from "./PatternChecker";
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

    public run() {
        this.view.clear();
        this.view.renderGame(this.game);
        this.view.setPrompt(`${this.game.currentPlayer().name}: `, this.inputHandler);
    }

    private init() {
        this.inputHandler.on("line", (line: any) => {
            this.view.clear();
            if (line && this.parser !== null) {
                const args = {
                    context: this.game,
                    input: line,
                    key: this.game.state,
                    view: this.view,
                };
                this.parser.parse(args);
                this.view.showGame(this.game);
            }
            this.view.setPrompt(`${this.game.currentPlayer().name}: `, this.inputHandler);
        });
    }

    private newGame() {
        const patternChecker = new PatternChecker({ patterns: winPatterns3 });
        const players = [new Player({ name: "Player1", mark: "X" }), new Player({ name: "Player2", mark: "O" })];
        return new Game({ players, patternChecker });
    }
}
