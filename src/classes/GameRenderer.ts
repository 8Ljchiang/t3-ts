import { IGame } from '../interfaces/class/IGame';
import { IGameRenderer } from '../interfaces/class/IGameRenderer';
import { GAME_WELCOME, GAME_STARTED, GAME_FINALE } from '../lib/constants';

export default class GameRenderer implements IGameRenderer {
    render(game: IGame): string {
        // return GAME_STARTED;
        return GAME_STARTED.replace(new RegExp("{{PLAYER_NAME}}", 'g'), game.currentPlayer().name);
    }    
    welcome(game: IGame): string {
        return GAME_WELCOME;
    }
    finale(game: IGame): string {
        return GAME_FINALE;
    }
}
