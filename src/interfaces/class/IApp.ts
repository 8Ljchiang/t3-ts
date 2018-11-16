import { IGame } from "./IGame";
import { IView } from "./IView";

export interface IApp {
    game: IGame;
    view: IView;
    parser: any;
    inputHandler: any;
}
