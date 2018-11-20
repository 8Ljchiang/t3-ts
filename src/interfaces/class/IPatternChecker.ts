export interface IPatternChecker {
    patterns: string[];
    containsPattern(positions: number[]): boolean;
}
