import { IGame } from './IGame';
import { IBoard } from './IBoard';
import { IGameRenderer } from "./IGameRenderer";
import { IBoardRenderer } from "./IBoardRenderer";

export interface IView {
    gameRenderer: IGameRenderer;
    boardRenderer: IBoardRenderer;
    show(text: string): void;
    clear(): void;
    setPrompt(text: string, inputHandler: any): void;
    renderGame(game: IGame): void;
    renderBoard(board: IBoard): void;
}