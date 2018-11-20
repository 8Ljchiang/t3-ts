import readline from "readline";

import { IBoard } from "../interfaces/class/IBoard";
import { IBoardRenderer } from "../interfaces/class/IBoardRenderer";
import { IGame } from "../interfaces/class/IGame";
import { IGameRenderer } from "../interfaces/class/IGameRenderer";
import { IView } from "../interfaces/class/IView";
import { GAME_STATE_CLOSED, GAME_STATE_END, GAME_STATE_NEW, GAME_STATE_STARTED } from "../lib/constants";
import BoardRenderer from "./BoardRenderer";
import GameRenderer from "./GameRenderer";

export default class View implements IView {
    public gameRenderer: IGameRenderer;
    public boardRenderer: IBoardRenderer;

    constructor(args: { gameRenderer?: IGameRenderer, boardRenderer?: IBoardRenderer }) {
        this.gameRenderer = args.gameRenderer || new GameRenderer();
        this.boardRenderer = args.boardRenderer || new BoardRenderer();
    }

    public show(text: string): void {
        console.log(text);
    }

    public showGame(game: IGame): void {
        switch (game.state) {
            case GAME_STATE_NEW:
                this.renderGame(game);
                break;
            case GAME_STATE_STARTED:
                this.show("Game: Tic Tac Toe\n");
                this.renderBoard(game.board);
                this.renderGame(game);
                break;
            case GAME_STATE_END:
                this.show("End: Tic Tac Toe\n");
                this.renderBoard(game.board);
                this.renderGame(game);
                break;
            case GAME_STATE_CLOSED:
                this.show("The game has exited.");
                break;
            default:
                this.show("Error: Unknown Game state");
        }
    }
    public renderBoard(board: IBoard): void {
        const boardString = this.boardRenderer.render(board);
        this.show(boardString);
    }

    public renderGame(game: IGame): void {
        const gameString = this.gameRenderer.render(game);
        this.show(gameString);
    }
    public clear(): void {
        readline.cursorTo(process.stdout, 0, 0);
        readline.clearScreenDown(process.stdout);
    }
    public setPrompt(text: string, inputHandler: any): void {
        inputHandler.setPrompt(text);
        inputHandler.prompt();
    }
}
