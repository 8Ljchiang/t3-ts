export interface IBoard {
    height: number;
    width: number;
    data: string[];
    reset(): void;
    getData(): string[];
    setData(data: string[]): void;
    addMark(position: number, mark: string): void;
    removeMark(position: number): void;
    getPosition(position: number): string;
    isValidPosition(position: number): boolean;
    getValidPositions(): number[];
    isPositionEmpty(position: number): boolean;
    getEmptyPositions(): number[];
    getMarkPositions(mark: string): number[];
    _adjustPositionToIndex(position: number): number;
    _adjustIndexToPosition(index: number): number;
}
