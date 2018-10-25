import IBoard from '../interfaces/class/IBoard';
import { DEFAULT_BOARD_SIZE, OPEN_POSITION, POSITION_OFFSET } from '../lib/constants';

export default class Board implements IBoard {
    
    public height: number;
    public width: number;
    public data: Array<string>;

    constructor(args: { height?: number, width?: number, data?: Array<string> }) {
        this.height = args.height || DEFAULT_BOARD_SIZE;
        this.width = args.width || DEFAULT_BOARD_SIZE;
        this.data = [];
        this.reset()
    }

    reset() {
        this.data = new Array(this.height * this.width).fill(OPEN_POSITION);
    }
    getData(): Array<string> {
        return this.data;
    }
    setData(data: string[]): void {
        this.data = data;
    }
    addMark(position: number, mark: string): void {
        if (this.isPositionEmpty(position)) {
            const adjustedIndex = this._adjustPositionToIndex(position);
            this.data[adjustedIndex] = mark;
        }
    }
    removeMark(position: number): void {
        if (this.isValidPosition(position)) {
            const adjustedIndex = this._adjustPositionToIndex(position);
            this.data[adjustedIndex] = OPEN_POSITION;
        }
    }
    getPosition(position: number): string {
        const adjustedIndex = this._adjustPositionToIndex(position);
        return this.data[adjustedIndex]
    }
    isValidPosition(position: number): boolean {
        return (position <= this.data.length && position > 0);
    }
    getValidPositions(): number[] {
        return this.data.map((_, index) => {
            return this._adjustIndexToPosition(index);
        });
    }
    isPositionEmpty(position: number): boolean {
        const adjustedIndex = this._adjustPositionToIndex(position);
        return this.data[adjustedIndex] == OPEN_POSITION;

    }
    getEmptyPositions(): number[] {
        const emptyPositions: number[] = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] == OPEN_POSITION) {
                const position = this._adjustIndexToPosition(i);
                emptyPositions.push(position)
            }
        }
        return emptyPositions;
    }
    getMarkPositions(mark: string): number[] {
        const positions: number[]= [];
        this.data.forEach((dataMarker, index) => {
            if (dataMarker == mark) {
                const position = this._adjustIndexToPosition(index);
                positions.push(position);
            }
        });
        return positions;
    }
    _adjustPositionToIndex(position: number): number {
        return position - POSITION_OFFSET;       
    }
    _adjustIndexToPosition(index: number): number {
        return index + POSITION_OFFSET;
    }
}
