import readline from "readline";
import App from "./classes/App";
import Game from "./classes/Game";
import ParsingTable from "./classes/ParsingTable";
import ParsingTableDelegator from "./classes/ParsingTableDelegator";
import PatternChecker from "./classes/PatternChecker";
import Player from "./classes/Player";
import { IParsingTable } from "./interfaces/class/IParsingTable";
import { GAME_STATE_END, GAME_STATE_NEW, GAME_STATE_STARTED } from "./lib/constants";
import { endGameHandlers, newGameHandlers, startedGameHandlers } from "./lib/parsingTables";
import { winPatterns3 } from "./lib/patterns";

const patternChecker = new PatternChecker({ patterns: winPatterns3 });
const players = [new Player({ name: "Player1", mark: "X"}), new Player({ name: "Player2", mark: "O"})];
const game = new Game({ players, patternChecker });
const inputHandler = readline.createInterface(process.stdin, process.stdout);

const newGameParseTable: IParsingTable = new ParsingTable({ handlers: newGameHandlers });
const startedGameParseTable: IParsingTable = new ParsingTable({ handlers: startedGameHandlers });
const endGameParsingTable: IParsingTable = new ParsingTable({ handlers: endGameHandlers });

const parsingTables: any = {};
parsingTables[GAME_STATE_NEW] = newGameParseTable,
parsingTables[GAME_STATE_STARTED] = startedGameParseTable,
parsingTables[GAME_STATE_END] = endGameParsingTable;

function createParsingTableDelegator(parsingTables: any) {
    const args = { parsingTables };
    return new ParsingTableDelegator(args);
}

const parser = createParsingTableDelegator(parsingTables);

const appArgs = {
    game,
    inputHandler,
    parser,
};

const appT3 = new App(appArgs);

appT3.run();
