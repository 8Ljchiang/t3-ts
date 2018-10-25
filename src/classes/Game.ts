import { IGame } from "../interfaces/class/IGame";
import { IBoard } from "../interfaces/class/IBoard";
import IPlayer from "../interfaces/class/IPlayer";
import { GAME_STATE_NEW, GAME_STATE_STARTED, GAME_STATE_END} from "../lib/constants";
import Board from "./Board";

export default class Game implements IGame{
    public state: string;
    public players: Array<IPlayer>;
    public activePlayerIndex: number;
    public board: IBoard;

    constructor(args: {state?: string, players?: Array<IPlayer>, activePlayerIndex?: number, board?: IBoard }) {
        this.state = args.state || GAME_STATE_NEW;
        this.players = args.players || [];
        this.activePlayerIndex = args.activePlayerIndex || 0;
        this.board = args.board || new Board({});
    }
    setState(state: string): void {
        this.state = state;
    }
    reset(): void {
        this.state = GAME_STATE_NEW;
        this.activePlayerIndex = this._randomPlayerIndex();
    }    
    playPosition(position: number): void {
        if (this.state === GAME_STATE_STARTED) {
            if (this.board.isPositionEmpty(position)) {
                this.board.addMark(position, this.currentPlayer().mark);
                this._cycleActivePlayer()
            }
            if (this.board.getEmptyPositions().length === 0) {
                this.state = GAME_STATE_END;
            }
        }
    }
    currentPlayer(): IPlayer {
        return this.players[this.activePlayerIndex];

    }
    _randomPlayerIndex() {
        return Math.floor(Math.random() * this.players.length);
    }
    _cycleActivePlayer() {
        if (this.activePlayerIndex < this.players.length - 1) {
            this.activePlayerIndex += 1;
        } else {
            this.activePlayerIndex = 0;
        }
    }
}