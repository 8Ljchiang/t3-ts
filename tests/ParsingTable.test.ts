import ParsingTable from '../src/classes/ParsingTable';
import { ITable } from '../src/interfaces/class/ITable';

let parsingTable = {};

const options: string[] = ["ready", "start", "new"];
const handlers: ITable = {
    ready: function(args: any) {},
    start: function(args: any) {},
    new: function(args: any) {},
    default: function(args: any) {},
    error: function(args: any) {},
    options: function(args: any) {},
}

function createParsingTable(options: string[], handlers: any) {
    const args = { options, handlers };
    return new ParsingTable(args);
}

describe("ParsingTable class", () => {
    beforeEach(() => {
        parsingTable = createParsingTable(options, handlers);
    });

    // Not sure how to test parsing table.
    it.skip("should", () => {

    })
});