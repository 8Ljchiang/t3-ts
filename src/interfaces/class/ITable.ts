export interface ITable {
    [key: string]: Function;
    default: Function;
    error: Function;
    options: Function;
}
