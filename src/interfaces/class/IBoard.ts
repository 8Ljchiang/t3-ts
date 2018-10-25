export interface IBoard {
    height: number;
    width: number;
    data: Array<string>;
    reset(): void;
    getData(): Array<string>;
    setData(data: Array<string>): void;
    addMark(position: number, mark: string): void;
    removeMark(position: number): void;
    getPosition(position: number): string;
    isValidPosition(position: number): boolean;
    getValidPositions(): Array<number>;
    isPositionEmpty(position: number): boolean;
    getEmptyPositions(): Array<number>;
    getMarkPositions(mark: string): Array<number>;
    _adjustPositionToIndex(position: number): number;
    _adjustIndexToPosition(index: number): number;
}