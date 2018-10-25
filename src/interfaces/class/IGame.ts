import IPlayer from "./IPlayer";

export interface IGame {
    reset(): void;
    playPosition(position: number): void;
    currentPlayer(): IPlayer;
    setState(state: string): void;
    _cycleActivePlayer(): void;
    _randomPlayerIndex(): number;
}