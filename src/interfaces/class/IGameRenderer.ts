import { IGame } from "./IGame";
import { IRenderer } from "./IRenderer";

export interface IGameRenderer extends IRenderer {
    render(game: IGame): string;
}
