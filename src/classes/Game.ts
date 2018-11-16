import { IBoard } from "../interfaces/class/IBoard";
import { IGame } from "../interfaces/class/IGame";
import { IPatternChecker } from "../interfaces/class/IPatternChecker";
import IPlayer from "../interfaces/class/IPlayer";
import { GAME_STATE_END, GAME_STATE_NEW, GAME_STATE_STARTED} from "../lib/constants";
import Board from "./Board";

export default class Game implements IGame {
    public state: string;
    public players: IPlayer[];
    public activePlayerIndex: number;
    public board: IBoard;
    public patternChecker: IPatternChecker;

    constructor(args: {
        activePlayerIndex?: number,
        board?: IBoard,
        patternChecker: IPatternChecker
        players?: IPlayer[],
        state?: string }) {

        this.state = args.state || GAME_STATE_NEW;
        this.players = args.players || [];
        this.activePlayerIndex = args.activePlayerIndex || 0;
        this.board = args.board || new Board({});
        this.patternChecker = args.patternChecker;
    }
    public setState(state: string): void {
        this.state = state;
    }
    public reset(): void {
        this.state = GAME_STATE_NEW;
        this.activePlayerIndex = this._randomPlayerIndex();
        this.board.reset();
    }
    public playPosition(position: number): void {
        if (this.state === GAME_STATE_STARTED) {

            if (this.board.getEmptyPositions().length > 0) {

                if (this.board.isPositionEmpty(position)) {
                    this.board.addMark(position, this.currentPlayer().getMark());
                }

                const currentMark = this.currentPlayer().getMark();

                if (this.patternChecker.containsPattern(this.board.getMarkPositions(currentMark))) {
                    this.setState(GAME_STATE_END);
                } else {
                    this._cycleActivePlayer();
                }
            } else {
                this.setState(GAME_STATE_END);
            }
        }
    }
    public currentPlayer(): IPlayer {
        return this.players[this.activePlayerIndex];

    }
    public _randomPlayerIndex() {
        return Math.floor(Math.random() * this.players.length);
    }
    public _cycleActivePlayer() {
        if (this.activePlayerIndex < this.players.length - 1) {
            this.activePlayerIndex += 1;
        } else {
            this.activePlayerIndex = 0;
        }
    }
}
