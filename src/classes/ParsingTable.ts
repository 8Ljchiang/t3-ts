import { IParsingTable } from "../interfaces/class/IParsingTable";
import { ITable } from "../interfaces/class/ITable";
import View from "./View";

export default class ParsingTable implements IParsingTable {
    // public options: string[];
    public id: any;
    public handlers: ITable;
    // public subParsers: any;

    constructor(args: { id?: string, handlers: ITable }) {
        // this.options = args.options;
        // this.subParsers = args.subParsers;
        this.id = args.id;
        this.handlers = args.handlers;
    }

    public handle(args: { input: any; context: any; view: any; }): void {
        const { input } = args;
        if (this._isValidOption(args)) {
            if (this._containsHandler(input)) {
                this.handlers[input](args);
            } else if (this.handlers.default !== null) {
                this.handlers.default(args);
            }
        } else {
            this.handleError(args);
        }
    }
    public handleError(args: { input: any; context: any; view: any; }): void {
        args.view.show("Warning: '" + args.input + "' has no path (OutOfBounds).");
        if (this.handlers.error !== null) {
            this.handlers.error(args);
        }
    }
    public _isValidOption(args: any): boolean {
        const options = this.handlers.options(args);
        return options.includes(args.input);
    }
    public _containsHandler(key: string): boolean {
        const validHandlers = Object.keys(this.handlers).filter((objectKey: string) => {
            const naHandlers = ["default", "error", "options"];
            if (naHandlers.includes(objectKey)) {
                return false;
            }
            return true;
        });
        return validHandlers.includes(key);
    }
}
