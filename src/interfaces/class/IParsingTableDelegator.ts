export interface IParsingTableDelegator {
    parsingTables: any;
    // tables: any;
    parse(input: any, context: any, view: any): any;
    delegate(input: any, context: any, view: any): any;
    addParser(name: string, parser: any): void;
    removeParser(name: string): void;
}