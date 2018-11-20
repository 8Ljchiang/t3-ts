import Board from '../src/classes/Board';
import PatternChecker from '../src/classes/PatternChecker';
import { DEFAULT_BOARD_SIZE, OPEN_POSITION } from '../src/lib/constants';

const size = DEFAULT_BOARD_SIZE;
const winning_patterns = [
    "1,5,9",
    "3,5,7",
    "1,2,3",
    "4,5,6",
    "7,8,9",
    "1,4,7",
    "2,5,8",
    "3,6,9"
]

const patternChecker = new PatternChecker({ patterns: winning_patterns });

function createNewBoard() {
    return new Board({ height: size, width: size });
}

let board = createNewBoard();

describe('Pattern Checker Class', () => {

    describe("containsPattern()", () => {
        beforeEach(() => {
            board = createNewBoard()
        });

        it ("should return 'false' when marker positions do not contain a matching pattern", () => {
            const mark = "X"
            board.addMark(1, mark)
            board.addMark(2, mark)
            const markerPositions = board.getMarkPositions(mark);
            expect(markerPositions).toEqual([1,2]);
            expect(patternChecker.containsPattern(markerPositions)).toBe(false);
        })

        it("should return 'true' when marker positions contain matching pattern 1,5,9", () => {
            const mark = "X"
            board.addMark(1, mark)
            board.addMark(2, mark)
            board.addMark(5, mark)
            board.addMark(9, mark)
            const markerPositions = board.getMarkPositions(mark)
            expect(markerPositions).toEqual([1,2,5,9]);
            expect(patternChecker.containsPattern(markerPositions)).toBe(true);
        })
    
        it("should return 'true' when marker positions contain matching pattern 3,5,7", () => {
            const mark = "X"
            board.addMark(3, mark)
            board.addMark(2, mark)
            board.addMark(5, mark)
            board.addMark(7, mark)
            const markerPositions = board.getMarkPositions(mark)
            expect(markerPositions).toEqual([2,3,5,7]);
            expect(patternChecker.containsPattern(markerPositions)).toBe(true);
        })

        it("should return 'true' when marker positions contain matching pattern 1,2,3", () => {
            const mark = "X"
            board.addMark(1, mark)
            board.addMark(2, mark)
            board.addMark(3, mark)
            board.addMark(9, mark)
            const markerPositions = board.getMarkPositions(mark)
            expect(markerPositions).toEqual([1,2,3,9]);
            expect(patternChecker.containsPattern(markerPositions)).toBe(true);
        })

        it("should return 'true' when marker positions contain matching pattern 4,5,6", () => {
            const mark = "X"
            board.addMark(4, mark)
            board.addMark(5, mark)
            board.addMark(6, mark)
            board.addMark(9, mark)
            const markerPositions = board.getMarkPositions(mark)
            expect(markerPositions).toEqual([4,5,6,9]);
            expect(patternChecker.containsPattern(markerPositions)).toBe(true);
        })

        it("should return 'true' when marker positions contain matching pattern 6,7,8", () => {
            const mark = "X"
            board.addMark(1, mark)
            board.addMark(7, mark)
            board.addMark(8, mark)
            board.addMark(9, mark)
            const markerPositions = board.getMarkPositions(mark)
            expect(markerPositions).toEqual([1,7,8,9])
            expect(patternChecker.containsPattern(markerPositions)).toBe(true)
        })

        it("should return 'true' when marker positions contain matching pattern 1,4,7", () => {
            const mark = "X"
            board.addMark(1, mark)
            board.addMark(4, mark)
            board.addMark(7, mark)
            board.addMark(5, mark)
            const markerPositions = board.getMarkPositions(mark)
            expect(markerPositions).toEqual([1,4,5,7]);
            expect(patternChecker.containsPattern(markerPositions)).toBe(true);
        })

        it("should return 'true' when marker positions contain matching pattern 2,5,8", () => {
            const mark = "X"
            board.addMark(1, mark)
            board.addMark(2, mark)
            board.addMark(5, mark)
            board.addMark(8, mark)
            const markerPositions = board.getMarkPositions(mark)
            expect(markerPositions).toEqual([1,2,5,8])
            expect(patternChecker.containsPattern(markerPositions)).toBe(true)
        })

        it("should return 'true' when marker positions contain matching pattern 3,6,9", () => {
            const mark = "X";
            board.addMark(1, mark)
            board.addMark(3, mark)
            board.addMark(6, mark)
            board.addMark(9, mark)
            const markerPositions = board.getMarkPositions(mark)
            expect(markerPositions).toEqual([1,3,6,9])
            expect(patternChecker.containsPattern(markerPositions)).toBe(true)
        })
    })

    // describe("getMatchingPattern()", () => {
    //     beforeEach(() => {
    //         board = createNewBoard()
    //     });
    // })
});