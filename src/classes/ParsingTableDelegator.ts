import { IParsingTable } from "../interfaces/class/IParsingTable";
import { IParsingTableDelegator } from "../interfaces/class/IParsingTableDelegator";

export default class ParsingTableDelegator implements IParsingTableDelegator {
    public parsingTables: any;

    constructor(args: { parsingTables: { [key: string]: IParsingTable } }) {
        this.parsingTables = args.parsingTables;
    }
    public parse(args: { key: string, input: any, context: any, view: any }): void {
        if (args.input && typeof(args.input) === "string") {
            const trimmedInput = args.input.trim();
            const newArgs = { ...args, input: trimmedInput };
            this.delegate(newArgs);
        }
    }
    public delegate(args: { key: string, input: any, context: any, view: any }): void {
        if (Object.keys(this.parsingTables).includes(args.key)) {
            const parserName = args.key;
            this.parsingTables[parserName].handle(args);
        } else {
            args.view.show("Error: Unrecognized " + args.key + " key.");
        }
    }
    public addParser(name: string, parser: any): void {
        if (!this._containsParserName(name)) {
            this.parsingTables[name] = parser;
        }
    }
    public removeParser(name: string) {
        if (this._containsParserName(name)) {
            delete this.parsingTables[name];
        }
    }
    public _containsParserName(name: string) {
        return Object.keys(this.parsingTables).includes(name);
    }
}
