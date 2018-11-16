import { IBoard } from "./IBoard";
import { IBoardRenderer } from "./IBoardRenderer";
import { IGame } from "./IGame";
import { IGameRenderer } from "./IGameRenderer";

export interface IView {
    gameRenderer: IGameRenderer;
    boardRenderer: IBoardRenderer;
    show(text: string): void;
    clear(): void;
    setPrompt(text: string, inputHandler: any): void;
    showGame(game: IGame): void;
    renderGame(game: IGame): void;
    renderBoard(board: IBoard): void;
}
