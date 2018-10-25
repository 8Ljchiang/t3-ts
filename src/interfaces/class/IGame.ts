import IPlayer from "./IPlayer";
import { IBoard } from "./IBoard";

export interface IGame {
    state: string;
    players: Array<IPlayer>;
    activePlayerIndex: number;
    board: IBoard;
    reset(): void;
    playPosition(position: number): void;
    currentPlayer(): IPlayer;
    setState(state: string): void;
    _cycleActivePlayer(): void;
    _randomPlayerIndex(): number;
}