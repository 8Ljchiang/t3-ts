import IPlayer from "../interfaces/class/IPlayer";

export default class Player implements IPlayer {
    public name: string;
    public mark: string;

    constructor(args: { name: string, mark: string }) {
        this.name = args.name;
        this.mark = args.mark;
    }

    public getName(): string {
        return this.name;
    }

    public getMark(): string {
        return this.mark;
    }
}
