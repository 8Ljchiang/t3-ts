import { ITable } from "./ITable";

export interface IParsingTable {
    // options: any[];
    // subParsers: any;
    handlers: ITable;
    handle(args: {input: any, context: any, view: any}): void;
    handleError(args: {input: any, context: any, view: any }): void;
    // addHandler(name: string, handler: Function): void;
    // removeHandler(name: string): void;
    // addSubParser(name: string, parser: Function): void;
    // removeSubParser(name: string, table: any): void;
}
