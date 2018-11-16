import { isContext } from "vm";
import { GAME_STATE_STARTED } from "./constants";

export const newGameHandlers = {
    ready(args: any) {
        args.context.setState(GAME_STATE_STARTED);
    },
    default(args: any) {
        args.view.show("Default[new]: Has not been defined");
    },
    error(args: any) {
        args.view.show("Input not recognized as a valid option.");
        args.view.show("Options: " + this.options(args).join(", "));
    },
    options(args: any) {
        return ["ready"];
    },
};

export const startedGameHandlers = {
    default(args: any) {
        const position = parseInt(args.input, 10);
        args.context.playPosition(position);
    },
    error(args: any) {
        args.view.show("Input not recognized as a valid option.");
        args.view.show("Options: " + this.options(args).join(", "));
    },
    options(args: any) {
        const emptyPositions = args.context.board.getEmptyPositions().map((position: number) => {
            return position.toString();
        });
        return emptyPositions;
    },
};

export const endGameHandlers = {
    new(args: any) {
        args.context.reset();
    },
    quit(args: any) {
        args.view.show("Quit handler has not been defined.");
        // process.exit(0);
    },
    default(args: any) {
        args.view.show("Default[end]: Has not been defined");
    },
    error(args: any) {
        args.view.show("Input not recognized as a valid option.");
        args.view.show("Options: " + this.options(args).join(", "));
    },
    options(args: any) {
        return ["new", "quit"];
    },
};
