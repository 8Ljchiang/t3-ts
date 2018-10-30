import { IRenderer } from './IRenderer';
import { IGame } from './IGame';

export interface IGameRenderer extends IRenderer {
    render(game: IGame): string;
}