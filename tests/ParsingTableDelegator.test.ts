import ParsingTable from '../src/classes/ParsingTable';
import ParsingTableDelegator from '../src/classes/ParsingTableDelegator';
import { IParsingTable } from '../src/interfaces/class/IParsingTable';
import { ITable } from '../src/interfaces/class/ITable';

const newGameArgs = {
    handlers: {
        ready: function(args: any) {},
        default: function(args: any) {},
        error: function(args: any) {},
        options: function(args: any) { return ["ready"]}
    }
}
const startedGameArgs = {
    handlers: {
        default: function(args: any) {},
        error: function(args: any) {},
        options: function(args: any) { return [1, 2, 3, 4, 5, 6, 7, 8, 9]}
    }
}
const endGameArgs = {
    handlers: {
        new: function(args: any) {},
        quit: function(args: any) {},
        default: function(args: any) {},
        error: function(args: any) {},
        options: function(args: any) { return ["new", "quit"]}
    }
}

const newGameParseTable = new ParsingTable(newGameArgs);
const startedGameParseTable = new ParsingTable(startedGameArgs);
const endGameParsingTable = new ParsingTable(endGameArgs);

const parsingTables = {
    new: newGameParseTable,
    started: startedGameParseTable,
    end: endGameParsingTable
}

function createParsingTableDelegator(parsingTables: { [key: string]: IParsingTable }) {
    const args = { parsingTables };
    return new ParsingTableDelegator(args);
}

let delegator = {};

describe("ParsingTableDelegator class", () => {
    beforeEach(() => {
        delegator = createParsingTableDelegator(parsingTables);
    })

    // Not sure how to test this kind of class.
    it.skip("should", () => {

    });
});