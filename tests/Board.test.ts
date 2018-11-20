import Board from '../src/classes/Board';
import { DEFAULT_BOARD_SIZE, OPEN_POSITION } from '../src/lib/constants';

const size = DEFAULT_BOARD_SIZE;

function createNewBoard() {
    return new Board({ height: size, width: size });
}

let board = createNewBoard();

describe('Board Class', () => {

    beforeEach(() => {
        board = createNewBoard()
    });

    it("should return an array of length 9 filled with open spaces", () => {
        const data = board.getData();
        expect(data.length).toEqual(9);
        data.forEach((value) => {
            expect(value).toEqual(OPEN_POSITION);
        });
    });

    it("should return an array of length 9 filled with X", () => {
        board.setData(["X","O","X"," "," "," "," "," "," "]);
        const data = board.getData();
        expect(data.length).toEqual(9);
        expect(data[0]).toEqual("X");
        expect(data[1]).toEqual("O");
        expect(data[2]).toEqual("X");
    });

    it("should add 'X' when calling addMark() to a position", () => {
        board.addMark(1, "X")
        const data = board.getData()
        expect(data[0]).toEqual("X");
    });

    it("should return 'X' when calling getPosition() to a position", () => {
        board.setData(["X","O"," "," "," "," "," "," "," "]);
        expect(board.getPosition(1)).toEqual("X");
        expect(board.getPosition(2)).toEqual("O");
        expect(board.getPosition(3)).toEqual(" ");
    });

    it("should remove mark from position", () => {
        board.setData(["X","O"," "," "," "," "," "," "," "]);
        board.removeMark(1)
        const data = board.getData()
        expect(data[0]).toEqual(" ");
    });

    it("should return true for valid positions", () => {
        for (let i = 1; i <= 9; i++) {
            expect(board.isValidPosition(i)).toEqual(true);
        }
    })

    it("should return false for invalid position -1, 0, 10", () => {
        expect(board.isValidPosition(-1)).toEqual(false);
        expect(board.isValidPosition(0)).toEqual(false);
        expect(board.isValidPosition(10)).toEqual(false);
    })

    it("should return an array with empty positions", () => {
        expect(board.getEmptyPositions()).toEqual([1,2,3,4,5,6,7,8,9]);
    })

    it("should return an array with empty positions", () => {
        board.addMark(1, "X")
        expect(board.getEmptyPositions()).toEqual([2,3,4,5,6,7,8,9]);
    })

    it("should return an array with positions matching the mark", () => {
        board.addMark(1, "X")
        board.addMark(2, "O")
        board.addMark(3, "X")
        expect(board.getMarkPositions("X")).toEqual([1,3])
    })
});