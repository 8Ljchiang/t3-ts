import { ITable } from "../interfaces/class/ITable";
import { IParsingTable } from "../interfaces/class/IParsingTable";

export default class ParsingTable implements IParsingTable {
    // public options: string[];
    public handlers: ITable;
    // public subParsers: any;

    constructor(args: { handlers: any }) {
        // this.options = args.options;
        // this.subParsers = args.subParsers;
        this.handlers = args.handlers;
    }
    
    handle(args: { input: any; context: any; view: any; }): void {
        const { input } = args;
        if (this._isValidOption(input)) {
            if (this._containsHandler(input)) {
                this.handlers[input](args);
            } else if (this.handlers['default'] !== null) {
                this.handlers['default'](args);
            }
        } else {
            this.handleError(args);
        }
    }
    handleError(args: { input: any; context: any; view: any; }): void {
        console.log("Error: " + args.input + " not recognized.");
        if (this.handlers['error'] !== null) {
            this.handlers['error'](args);
        }
    }
    // addHandler(name: string, handler: Function) {
    //     this.handlers[name] = handler;
    // }
    // removeHandler(name: string) {
    //     this.options = this.options.filter((option) => {
    //         return option == name;
    //     });
    //     delete this.handlers[name];
    // }
    // // addSubParser(name: string, parser: any) {
    //     this.subParsers[name] = parser;
    // }
    // removeSubParser(name: string): void {
    //     delete this.subParsers[name];
    // }
    _isValidOption(input: string): boolean {
        return this.handlers['options']().includes(input);
    }
    _containsHandler(key: string): boolean {
        const validHandlers = Object.keys(this.handlers).filter((key) => {
            const naHandlers = ['default', 'error', 'options'];
            if (naHandlers.includes(key)) {
                return false;
            }
            return true;
        });
        return validHandlers.includes(key);
    }
}

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