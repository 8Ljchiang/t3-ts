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

    constructor(args: { gameRenderer: IGameRenderer, boardRenderer: IBoardRenderer }) {
        this.gameRenderer = args.gameRenderer || new GameRenderer();
        this.boardRenderer = args.boardRenderer || new BoardRenderer();
    }

    show(text: string): void {
        console.log(text);
    }
    renderGame(game: IGame): void {
        switch(game.state) {
            case GAME_STATE_NEW:
                this.show(this.gameRenderer.render(game));
                break;
            case GAME_STATE_STARTED:
                this.renderBoard(game.board);
                this.show(this.gameRenderer.render(game));
                break;
            case GAME_STATE_END:
                this.renderBoard(game.board);
                this.show(this.gameRenderer.finale(game));
                break;
            case GAME_STATE_CLOSED:
                this.show("The game has exited.");
                break;
            default:
                this.show("Error: Unknown Game state");
        }
    }
    renderBoard(board: IBoard): void {
        this.show(this.boardRenderer.render(board));
    }
}