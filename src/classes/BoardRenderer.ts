import { IBoardRenderer } from '../interfaces/class/IBoardRenderer';
import { IBoard } from '../interfaces/class/IBoard';
import { POSITION_OFFSET } from '../lib/constants';

export default class BoardRenderer implements IBoardRenderer{
    constructor() {

    }
    render(board: IBoard): string {
        const preResultStorage = [];
        let lineStorage = [];

        for (let i = 0; i < board.getData().length; i++) {
            const position = this._adjustIndexToPosition(i);
            if ((position%board.width) === 0) {
                let fillString = this._makeSpaceBuffer(4) + board.getPosition(position) + this._makeSpaceBuffer(4);
                lineStorage.push(fillString + "\n");
                preResultStorage.push(this._createManyNonlineRows(board, 1) + lineStorage.join("|") + this._createManyNonlineRows(board, 1));
                lineStorage = []
            } else {
                let fillString = this._makeSpaceBuffer(4) + board.getPosition(position) + this._makeSpaceBuffer(4);
                lineStorage.push(fillString);
            }
        } 
        return preResultStorage.join(this._createLineRow(board));
    }
    _makeSpaceBuffer(count: number): string {
        let buffer = "";
        for (let i = 0; i < count; i++) {
            buffer += " "
        }
        return buffer;
    }
    _createNonlineRow(board: IBoard): string {
        let rowLine = "";
        for (let i = 0; i < board.width; i++) {
            if (i < board.width - 1) {
                rowLine += this._makeSpaceBuffer(9) + "|"
            } else {
                rowLine += this._makeSpaceBuffer(9) + "\n"
            }
        }
        return rowLine;
    }
    _createManyNonlineRows(board: IBoard, count: number): string {
        let fill = "";
        for (let i = 0; i < count; i++) {
            fill += this._createNonlineRow(board);
        }
        return fill;
    }
    _createLineRow(board: IBoard): string {
        const rowLength = (board.width * 9) + board.width - 1
        let rowLine = "";
        for (let i = 0; i < rowLength; i++) {
            if (i < rowLength - 1) {
                rowLine += "-";
            } else {
                rowLine += "-\n";
            }
        }
        return rowLine;
    }
    _adjustIndexToPosition(index: number): number {
        return index + POSITION_OFFSET;
    }
    _adjustPositionToIndex(position: number): number {
        return position - POSITION_OFFSET;
    }
}