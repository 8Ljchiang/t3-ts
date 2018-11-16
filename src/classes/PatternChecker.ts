import { IPatternChecker } from '../interfaces/class/IPatternChecker';

export default class PatternChecker implements IPatternChecker {
    public patterns: Array<string>

    constructor(args: { patterns: Array<string> }) {
        this.patterns = args.patterns;
    }

    containsPattern(positions: Array<number>): boolean {
        return false;
    }
}