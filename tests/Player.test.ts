import Player from '../src/classes/Player';

describe('Player Class', () => {
    it("should return 'Mike' for getName method", () => {
        const playerArgs = {
            name: "Mike",
            mark: "X"
        }
        const player = new Player(playerArgs);
        expect(player.getName()).toEqual("Mike");
    });

    it("should return 'X' for getMark method", () => {
        const playerArgs = {
            name: "Mike",
            mark: "X"
        }
        const player = new Player(playerArgs);
        expect(player.getMark).toEqual("X");
    });
});