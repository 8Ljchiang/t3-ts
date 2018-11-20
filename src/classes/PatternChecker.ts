import { IPatternChecker } from "../interfaces/class/IPatternChecker";

export default class PatternChecker implements IPatternChecker {
    public patterns: string[];

    constructor(args: { patterns: string[] }) {
        this.patterns = args.patterns;
    }

    public containsPattern(positions: number[]): boolean {
        for (const pattern of this.patterns) {
            const matchingPositions = pattern.split(",").map((stringPosition) => parseInt(stringPosition, 10));
            const matches = [];
            for (const position of positions) {
                if (matchingPositions.indexOf(position) !== -1) {
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
