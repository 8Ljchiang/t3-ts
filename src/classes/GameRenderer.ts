import { IGame } from '../interfaces/class/IGame';
import { IGameRenderer } from '../interfaces/class/IGameRenderer';
import { GAME_WELCOME, GAME_STARTED, GAME_FINALE, GAME_STATE_NEW, GAME_STATE_STARTED, GAME_STATE_END } from '../lib/constants';

export default class GameRenderer implements IGameRenderer {
    render(game: IGame): string {
        switch(game.state) {
            case GAME_STATE_NEW:
            return this.welcome(game);
            case GAME_STATE_STARTED:
            return GAME_STARTED.replace(new RegExp("{{PLAYER_NAME}}", 'g'), game.currentPlayer().getName());
            case GAME_STATE_END:
            return this.finale(game);
            default:
            return this.welcome(game);
        }
    }    

    private welcome(game: IGame): string {
        return GAME_WELCOME;
    }
    private finale(game: IGame): string {
        return GAME_FINALE;
    }
}
