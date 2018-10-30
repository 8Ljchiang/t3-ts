import readline from 'readline';

import { IView } from "../interfaces/class/IView";
import { IGameRenderer } from "../interfaces/class/IGameRenderer";
import { IBoardRenderer } from "../interfaces/class/IBoardRenderer";
import GameRenderer from "./GameRenderer";
import BoardRenderer from "./BoardRenderer";
import { IGame } from "../interfaces/class/IGame";
import { IBoard } from "../interfaces/class/IBoard";
import { GAME_STATE_STARTED, GAME_STATE_END, GAME_STATE_NEW, GAME_STATE_CLOSED } from "../lib/constants";

export default class View implements IView {
    public gameRenderer: IGameRenderer;
    public boardRenderer: IBoardRenderer;

    constructor(args: { gameRenderer?: IGameRenderer, boardRenderer?: IBoardRenderer }) {
        this.gameRenderer = args.gameRenderer || new GameRenderer();
        this.boardRenderer = args.boardRenderer || new BoardRenderer();
    }

    show(text: string): void {
        console.log(text);
    }
    
    showGame(game: IGame): void {
        switch(game.state) {
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
    renderBoard(board: IBoard): void {
        const boardString = this.boardRenderer.render(board);
        this.show(boardString);
    }

    renderGame(game: IGame): void {
        const gameString = this.gameRenderer.render(game);
        this.show(gameString);
    }
    clear(): void {
        readline.cursorTo(process.stdout, 0, 0);
        readline.clearScreenDown(process.stdout);
    }
    setPrompt(text: string, inputHandler: any): void {
        inputHandler.setPrompt(text);
        inputHandler.prompt();
    }
}