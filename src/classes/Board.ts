import { IBoard } from "../interfaces/class/IBoard";
import { DEFAULT_BOARD_SIZE, OPEN_POSITION, POSITION_OFFSET } from "../lib/constants";

export default class Board implements IBoard {

    public height: number;
    public width: number;
    public data: string[];

    constructor(args: { height?: number, width?: number, data?: string[] }) {
        this.height = args.height || DEFAULT_BOARD_SIZE;
        this.width = args.width || DEFAULT_BOARD_SIZE;
        this.data = [];
        this.reset();
    }

    public reset() {
        this.data = new Array(this.height * this.width).fill(OPEN_POSITION);
    }
    public getData(): string[] {
        return this.data;
    }
    public setData(data: string[]): void {
        this.data = data;
    }
    public addMark(position: number, mark: string): void {
        if (this.isPositionEmpty(position)) {
            const adjustedIndex = this._adjustPositionToIndex(position);
            this.data[adjustedIndex] = mark;
        }
    }
    public removeMark(position: number): void {
        if (this.isValidPosition(position)) {
            const adjustedIndex = this._adjustPositionToIndex(position);
            this.data[adjustedIndex] = OPEN_POSITION;
        }
    }
    public getPosition(position: number): string {
        const adjustedIndex = this._adjustPositionToIndex(position);
        return this.data[adjustedIndex];
    }
    public isValidPosition(position: number): boolean {
        return (position <= this.data.length && position > 0);
    }
    public getValidPositions(): number[] {
        return this.data.map((_, index) => {
            return this._adjustIndexToPosition(index);
        });
    }
    public isPositionEmpty(position: number): boolean {
        const adjustedIndex = this._adjustPositionToIndex(position);
        return this.data[adjustedIndex] === OPEN_POSITION;

    }
    public getEmptyPositions(): number[] {
        const emptyPositions: number[] = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === OPEN_POSITION) {
                const position = this._adjustIndexToPosition(i);
                emptyPositions.push(position);
            }
        }
        return emptyPositions;
    }
    public getMarkPositions(mark: string): number[] {
        const positions: number[] = [];
        this.data.forEach((dataMarker, index) => {
            if (dataMarker === mark) {
                const position = this._adjustIndexToPosition(index);
                positions.push(position);
            }
        });
        return positions;
    }
    public _adjustPositionToIndex(position: number): number {
        return position - POSITION_OFFSET;
    }
    public _adjustIndexToPosition(index: number): number {
        return index + POSITION_OFFSET;
    }
}
