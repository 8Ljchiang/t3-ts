import { IParsingTableDelegator } from '../interfaces/class/IParsingTableDelegator';
import { IParsingTable } from '../interfaces/class/IParsingTable';

export default class ParsingTableDelegator implements IParsingTableDelegator {
    // public tables: any;
    public parsingTables: any;
    
    constructor(args: { parsingTables: { [key: string]: IParsingTable } }) {
        // this.tables = args.tables;
        this.parsingTables = args.parsingTables;
    }
    parse(args: { key: string, input: any, context: any, view: any }): void {
        if (args.input && typeof(args.input) === 'string') {
            const trimmedInput = args.input.trim();
            const newArgs = { ...args, input: trimmedInput };
            this.delegate(newArgs);
        }
    }
    delegate(args: { key: string, input: any, context: any, view: any }): void {
        if (Object.keys(this.parsingTables).includes(args.key)) {       
            const parserName = args.key;
            this.parsingTables[parserName].handle(args);
        } else {
            console.log("Error: Unrecognized " + args.key + " key.")
        }
    }
    addParser(name: string, parser: any): void {
        if (!this._containsParserName(name)) {
            this.parsingTables[name] = parser;
        }
    }
    removeParser(name: string) {
        if (this._containsParserName(name)) {
            delete this.parsingTables[name];
        }
    }
    _containsParserName(name: string) {
        return Object.keys(this.parsingTables).includes(name);
    }
}

// const parser = {
//     new: "newParser",
//     started: "gameParser",
//     end: "endParser"
// }

// cons t parsingTableExample = {
//     menu: {
//         ready: function(args: {input: any, context: any, view: any}) { },
//         quit: function(args: {input: any, context: any, view: any}) { },
//         default: function() {},
//         error: function() {},
//         options: [],
//         subParsers: {}
//     },
//     game: {
//         default: function(args: {input: any, context: any, view: any}) {
//             const gameParser = { parse: Function };
//             // const { input, context, view } = args;
//             gameParser.parse()
//         },
//         error: function() {},
//         options: [],
//         subParsers: {}
//     },
// }