export interface IPatternChecker {
    patterns: Array<string>;
    containsPattern(positions: Array<number>): boolean;
}