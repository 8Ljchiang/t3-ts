import Board from '../src/classes/Board';
import BoardRenderer from '../src/classes/BoardRenderer';
import { DEFAULT_BOARD_SIZE, OPEN_POSITION } from '../src/lib/constants';

const size = DEFAULT_BOARD_SIZE;

function createNewBoard() {
    return new Board({ height: size, width: size });
}

const boardRenderer = new BoardRenderer();
let board = createNewBoard();

describe('Board Class', () => {

    beforeEach(() => {
        board = createNewBoard()
    });

    it("should return a board render string", () => {
        const boardString = boardRenderer.render(board);
        expect(boardString).toEqual("         |         |         \n         |         |         \n         |         |         \n-----------------------------\n         |         |         \n         |         |         \n         |         |         \n-----------------------------\n         |         |         \n         |         |         \n         |         |         \n")
    });   
});