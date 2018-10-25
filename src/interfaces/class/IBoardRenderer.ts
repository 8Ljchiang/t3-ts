import { IRenderer } from './IRenderer';
import { IBoard } from './IBoard';

export interface IBoardRenderer extends IRenderer{
    render(board: IBoard): string;
    _makeSpaceBuffer(count: number): string;
    _createNonlineRow(board: IBoard): string;
    _createManyNonlineRows(board: IBoard, count: number): string;
    _createLineRow(board: IBoard): string;
}