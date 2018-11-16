import { IPatternChecker } from '../interfaces/class/IPatternChecker';

export default class PatternChecker implements IPatternChecker {
    public patterns: Array<string>

    constructor(args: { patterns: Array<string> }) {
        this.patterns = args.patterns;
    }

    containsPattern(positions: Array<number>): boolean {
        for (let pattern of this.patterns) {
            const matchingPositions = pattern.split(",").map((stringPosition) => parseInt(stringPosition));
            const matches = [];
            for (let position of positions) {
                if (matchingPositions.indexOf(position) != -1) {
                    matches.push(position);
                }
            }

            if (matches.length === matchingPositions.length) {
                return true;
            }
        }
        return false;
    }
}