import { IBoard } from "./IBoard";
import IPlayer from "./IPlayer";

export interface IGame {
    state: string;
    players: IPlayer[];
    activePlayerIndex: number;
    board: IBoard;
    reset(): void;
    playPosition(position: number): void;
    currentPlayer(): IPlayer;
    setState(state: string): void;
    _cycleActivePlayer(): void;
    _randomPlayerIndex(): number;
}
