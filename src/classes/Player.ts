import IPlayer from '../interfaces/class/IPlayer';

export default class Player implements IPlayer {
    public name
    public mark
    
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
